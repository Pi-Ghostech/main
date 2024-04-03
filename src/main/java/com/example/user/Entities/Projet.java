package com.example.user.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Projet {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer projetID;

        private String titre;

        private String description;

//   @OneToMany(mappedBy = "projet")
//    private List<ParticipationProjet> participationsProjets;
//
//@ManyToOne
//@JoinColumn(name = "utilisateur_id")
//private Utilisateur utilisateur;


        @OneToOne(cascade = CascadeType.ALL)
        @OrderColumn(name="id")
        private ProjetDetail projetDetail;
       /* @OneToMany(mappedBy = "projet")
        private Set<ParticipationProjet> participationsUtilisateurs;*/
    }



