using System;

namespace Searching
{
  public class LinearSearch
  {
    public int search(int[] arrayOfNumber, int numberToFind)
    {
      int lengthOfArray = arrayOfNumber.Length;

      for (int i = 0; i < lengthOfArray; i++)
      {
        if (arrayOfNumber[i] == numberToFind)
        {
          return i;
        }
      }
      
      return -1;
    }
  }

  public class BinarySearch
  {
    public int search(int[] arrayOfNumbers, int numberToFind)
    {
      int startIndex = 0;
      int endIndex = arrayOfNumbers.Length - 1;
      int mid;
      
      while (endIndex - startIndex > 1) {
        mid = (endIndex + startIndex) / 2;
        if (arrayOfNumbers[mid] < numberToFind) {
          startIndex = mid + 1;
        }
        else {
          endIndex = mid;
        }
      }
      
      if (arrayOfNumbers[startIndex] == numberToFind)
      {
        return startIndex;
      }
      else if (arrayOfNumbers[endIndex] == numberToFind)
      {
        return endIndex;
      }
      
      return -1;
    }
  }
  
  public class Program
  {
    public static void Main(string[] args)
    {
      int[] arrayOfNumber = { 22, 33, 44, 10, 50, 59, 88, 77, 99, 101, 222, 115, 668 };
      int numberToFind = 101;

      // -------------------------//
      // Linear Search Algorithm  //
      // -------------------------//
      
      // LinearSearch linearSearch = new LinearSearch();
      // int linearSearchResult = linearSearch.search(arrayOfNumber, numberToFind);
      // Console.WriteLine(linearSearchResult);
      
      // -------------------------//
      // Binary Search Algorithm  //
      // -------------------------//
      
      BinarySearch binarySearch = new BinarySearch();
      int binarySearchResult = binarySearch.search(arrayOfNumber, numberToFind);
      Console.WriteLine(binarySearchResult);
    }
  }
}