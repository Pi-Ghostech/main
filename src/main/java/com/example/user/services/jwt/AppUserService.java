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
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AppUserService implements UserDetailsService {

    private  final AppUserRepository appUserRepository;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {//login

        AppUser appUser = appUserRepository.findByEmail(email)
                .orElseThrow (()-> new UsernameNotFoundException("appUser not found with email " + email));

        // Get roles associated with the user
        Set<Role> roles = appUser.getRoles();

        // Create a collection of GrantedAuthority objects based on the user's roles
        Collection<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role.getName()))
                .collect(Collectors.toList());
        return  new User(appUser.getEmail(), appUser.getPassword(), authorities);
    }



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
