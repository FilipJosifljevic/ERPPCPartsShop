package erp.pcpartsbackend.services;


import erp.pcpartsbackend.models.User;
import erp.pcpartsbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User getUser(UUID userId){
        return userRepository.findByUserId(userId);
    }

    public Optional<User> getUserByEmail(String email){
        return userRepository.findByEmailContainingIgnoreCase(email);
    }

    public User addUser(User user){
        return userRepository.save(user);
    }

    public void deleteUser(User user){
        userRepository.delete(user);
    }

    public boolean existById(UUID userId){
        return getUser(userId) != null;
    }
}
