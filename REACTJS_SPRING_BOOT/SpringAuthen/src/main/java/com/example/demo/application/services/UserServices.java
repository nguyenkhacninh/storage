package com.example.demo.application.services;

import com.example.demo.domain.User;
import com.example.demo.dto.UserRequest;
import com.example.demo.infrastructure.repository.UserRepository;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;

@Service
public class UserServices {

    private static final Logger LOGGER =  LoggerFactory.getLogger(UserServices.class);
    @Autowired
    UserRepository userRepository;

    public List<User> getAll (){
        LOGGER.info("hello test log");
        return userRepository.findAll();
    }

    public User getUserById (Long id){
        Optional<User> optionalUser =  userRepository.findById(id);
        if(optionalUser.isPresent()){
            return optionalUser.get();
        }
        return null ;
    }
    public void update (UserRequest userRequest) throws Exception {
        Optional<User> optionUser = userRepository.findById(userRequest.getUserId());
        if(! optionUser.isPresent()){
            throw new Exception("No user");
        }
        User user = optionUser.get();
        user.setName(userRequest.getName());
        user.setAddress(userRequest.getAddress());
        user.setPhone(userRequest.getPhone());
        userRepository.save(user);
    }

    public void delete (Long userId) {
        userRepository.deleteById(userId);
    }

    public void create (User user) {
       userRepository.save(user);
    }

}
