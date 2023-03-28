package springBoot.boilerPlate.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import springBoot.boilerPlate.models.User;

public interface UsersRepository extends MongoRepository <User, Long> {

}
