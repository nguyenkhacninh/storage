package com.example.demo.presentation.controller;

import com.example.demo.application.services.UserServices;
import com.example.demo.domain.User;
import com.example.demo.dto.UserRequest;
import org.aspectj.apache.bcel.classfile.Module;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    UserServices userServices;

    @GetMapping
    public ResponseEntity<List<User>> getAll (){

        return new ResponseEntity<>(userServices.getAll(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<User> getUserById (@PathVariable Long id){
            User user = userServices.getUserById(id);
            if(Objects.nonNull(user)){
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
         return new ResponseEntity<>(user, HttpStatus.NO_CONTENT);
    }

    @PostMapping("/update")
    public ResponseEntity update (@RequestBody UserRequest userRequest) throws Exception {
        if(userRequest.getUserId()==null || userRequest.getUserId() <=0){
           throw new Exception("Invalid data");
        }
        userServices.update(userRequest);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity create (@RequestBody User user){
        userServices.create(user);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity delete ( @RequestBody UserRequest userRequest){
        userServices.delete(userRequest.getUserId());
        return new ResponseEntity(HttpStatus.OK);
    }
}
