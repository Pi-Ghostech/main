package com.example.user.changepassword;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
@RestController
@RequestMapping("/change")
@RequiredArgsConstructor
public class changepasswordController {
    private final changepasswordService service;
    @PatchMapping("/pass")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request, Principal connnecteduser) {
        service.changePassword(request, connnecteduser);
        return ResponseEntity.ok().build();
    }
}

