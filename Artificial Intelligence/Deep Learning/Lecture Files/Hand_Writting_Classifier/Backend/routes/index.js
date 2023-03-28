const express = require("express");
const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");
const { promisify } = require("util");
const sharp = require("sharp");
const router = require("express").Router();

// Define the path to the saved model
const modelPath = "./ai_model/handwrittenPrediction.sav";

// Define a function to load the saved model
async function loadModel() {
  const model = await tf.loadLayersModel(`file://${modelPath}/saved_model.pb`);
  return model;
}

// Define a function to preprocess the image and make a prediction
async function uploadImageAndPredict(imagePath, handwrittingModel) {
  // Load the image using the sharp module and resize it to 28x28 pixels
  const buffer = await promisify(fs.readFile)(imagePath);
  const image = await sharp(buffer).resize(28, 28).grayscale().toBuffer();

  // Convert the image to a tensor and preprocess it
  const tensor = tf.tensor(image).reshape([1, 784]);
  const tensorFloat = tensor.toFloat().div(tf.scalar(255));

  // Make a prediction using the loaded model
  const prediction = handwrittingModel.predict(tensorFloat);
  const resultPrediction = prediction.argMax(1).dataSync()[0];

  return resultPrediction;
}

// Create an instance of the express application
const app = express();

// Define the `/predict` route
router.route("/").get(async (req, res) => {
  try {
    // Load the saved model
    const handwrittingModel = await loadModel();

    // Get the image file from the request and call the `uploadImageAndPredict` function
    const file = req.files.image;
    const result = await uploadImageAndPredict(
      file.tempFilePath,
      handwrittingModel
    );

    // Return the result as a JSON response
    res.json({ prediction: result });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
