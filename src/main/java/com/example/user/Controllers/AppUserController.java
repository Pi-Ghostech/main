package com.example.user.Controllers;

import com.example.user.Entities.AppUser;
import com.example.user.services.AuthService;
import com.example.user.services.jwt.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("/user")
public class AppUserController {
    private  final AppUserService appUserService;
    private final AuthService authService;


    @GetMapping("/get")
    public ResponseEntity<?> findAll(){
        return ResponseEntity.ok(appUserService.getallUsers());
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> findById(@PathVariable("id") Long id){
        return ResponseEntity.ok(appUserService.findById(id));
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        if (appUserService.deleteUser(id)) {
            return ResponseEntity.ok(ResponseEntity.ok("User deleted successfully"));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/update")
    public ResponseEntity<?> UpdateUser(@RequestBody AppUser appUser){
        return ResponseEntity.ok(authService.updateeUser(appUser));
    }





}
