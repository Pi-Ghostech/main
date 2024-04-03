package com.example.user.services;
import com.example.user.Entities.AppUser;
import com.example.user.dto.SignUpRequest;

public interface AuthService {
    boolean createUser(SignUpRequest signUpRequest);
    boolean updateeUser(AppUser appUser);
}
