package com.example.user.Controllers;


import com.example.user.Entities.AppUser;
import com.example.user.Entities.Role;
import com.example.user.dto.SignUpRequest;
import com.example.user.services.AuthService;
import com.example.user.services.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
public class SignUpController {

    private  final AuthService authService;


    @PostMapping("/signup")

    public ResponseEntity<String> SignUpCustomer(@RequestBody SignUpRequest signUpRequest){


        boolean isUserCreated = authService.createUser(signUpRequest);
        if(isUserCreated){
            return  ResponseEntity.status(HttpStatus.CREATED).body("Custommer Created Succefuly");
        }
        else {

            return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to created Custommer");
        }
    }


}
