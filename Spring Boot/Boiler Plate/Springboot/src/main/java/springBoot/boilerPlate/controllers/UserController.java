package springBoot.boilerPlate.controllers;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springBoot.boilerPlate.models.User;
import springBoot.boilerPlate.repository.UsersRepository;
import springBoot.boilerPlate.services.UserServices;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping(path = "/")
public class UserController {

    private UserServices userServices;

    @Autowired
    public UserController (UserServices userServices){
        this.userServices = userServices;
    }
    @Autowired
    private UsersRepository usersRepository;

    @GetMapping()
    List<User> getAllUsers() {
        return usersRepository.findAll();
    }

    @GetMapping("/{userId}")
    User getUserById(@PathVariable Long userId) {

    Query query = Query.query(where("_id").is(userId));
   
        return usersRepository.findOne(query, User.class);;
    }

    @PostMapping()
    public User saveUserDetails(@RequestBody User user) {
        return userServices.saveUserDetails(user);
    }

}
