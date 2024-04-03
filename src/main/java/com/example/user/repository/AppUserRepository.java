package com.example.user.repository;


import com.example.user.Entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser,Long> {


    boolean existsByEmail(String email);

    Optional<AppUser>  findByEmail(String email);
}
