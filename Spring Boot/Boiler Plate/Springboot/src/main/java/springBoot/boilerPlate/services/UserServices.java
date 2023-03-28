package springBoot.boilerPlate.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import springBoot.boilerPlate.models.User;
import springBoot.boilerPlate.repository.UsersRepository;

import java.util.List;

@Service
public class UserServices {
    @Autowired
    private UsersRepository usersRepository;

    public User saveUserDetails(User user){
        try{
            User response = this.usersRepository.save(user);
        }
        catch (Exception error){
            System.out.println(error);
        }
        return user;
    }
}


