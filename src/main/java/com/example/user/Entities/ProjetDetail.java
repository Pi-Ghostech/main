package com.example.user.Entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProjetDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private  String name;
    private  String password;
    private  String email;
    
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "projetDetail")
    @OrderColumn(name="id")
    private Projet projet;


}
