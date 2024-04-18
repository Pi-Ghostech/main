package com.example.user.Configurations;



import com.example.user.filters.JwtRequestFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class WebSecurityConfiguration {


    private  final JwtRequestFilter jwtRequestFilter;





    @Bean
//security ressources rules
    public SecurityFilterChain securityFilterChain(HttpSecurity security) throws Exception {

        return  security.csrf().disable()
                .authorizeRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/signup", "/login").permitAll()
                                .requestMatchers("/roles/get","/change/pass").authenticated()
                                .requestMatchers("/user/**")
                                .hasAuthority("ROLE_admin") // Use ROLE_ADMIN for consistency
                                .anyRequest().authenticated())
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }


    @Bean
//signup
    public PasswordEncoder passwordEncoder(){

        return  new BCryptPasswordEncoder();
    }


    @Bean
    //@Bean Annotation: This annotation is used to declare a method as a bean definition
    // method. When Spring detects methods annotated with @Bean
    // , it invokes these methods and registers the return value as a bean within the Spring application context.
    //In summary, this method is responsible for providing an AuthenticationManager bean by retrieving
    // it from the AuthenticationConfiguration object. This bean can then be used by other components
    // in the Spring application, particularly for authentication purposes, such as authenticating users during login processes.
//login
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {

        return  configuration.getAuthenticationManager();
    }
}
