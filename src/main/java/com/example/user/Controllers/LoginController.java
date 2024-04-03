package com.example.user.Controllers;


import com.example.user.dto.loginRequest;
import com.example.user.dto.loginResponse;
import com.example.user.services.jwt.AppUserService;
import com.example.user.utilis.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
public class LoginController {

  private  final AuthenticationManager authenticationManager;


  private  final AppUserService appUserService;
  private  final JwtUtil jwtUtil;



    @PostMapping("/login")
    public ResponseEntity<loginResponse> login(@RequestBody loginRequest loginRequest){

        try {

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
            );
        } catch ( AuthenticationException e) {

            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        UserDetails userDetails;
        try {

            userDetails= appUserService.loadUserByUsername(loginRequest.getEmail());

        } catch ( UsernameNotFoundException e) {
            return  ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        String jwt = jwtUtil.generateToken(userDetails.getUsername());

        return  ResponseEntity.ok(new loginResponse(jwt));



    }
}
