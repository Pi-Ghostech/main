package com.example.user.changepassword;

import com.example.user.Entities.AppUser;
import com.example.user.dto.loginRequest;
import com.example.user.repository.AppUserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.security.Principal;
import java.util.Optional;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class changepasswordService {
    private  final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;

    ////change password service
    public void changePassword(ChangePasswordRequest request, Principal connectedUser) {
        // Get the email of the connected user
        String email = connectedUser.getName();

        // Retrieve the user from the repository based on the email
        Optional<AppUser> optionalUser = appUserRepository.findByEmail(email);
        AppUser user = optionalUser.orElseThrow(() -> new IllegalStateException("User not found"));

        // Check if the current password is correct
        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new IllegalStateException("Wrong password");
        }

        // Check if the new passwords match
        if (!request.getNewPassword().equals(request.getConfirmationPassword())) {
            throw new IllegalStateException("Passwords do not match");
        }

        // Update the password
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));

        // Save the updated user entity
        appUserRepository.save(user);
    }
}
