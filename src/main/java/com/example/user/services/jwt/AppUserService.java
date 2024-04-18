package com.example.user.services.jwt;

import com.example.user.Entities.AppUser;
import com.example.user.Entities.Role;
import com.example.user.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AppUserService {

    private  final AppUserRepository appUserRepository;





    public List<AppUser> getallUsers(){
        return appUserRepository.findAll();
    }

    public AppUser findById(Long id){
        return appUserRepository.findById(id).orElse(null);
    }

    public boolean deleteUser (Long id) {
        if (appUserRepository.existsById(id)) {
            appUserRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }






}