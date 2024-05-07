package tn.esprit.mayssa.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer utilisateurID;

    private String nom;

    private String email;

    private String motDePasse;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;




//    @ManyToMany
//
//    private Set<Matiere> matieres ;
//
//    @OneToMany(cascade = CascadeType.ALL,mappedBy = "user")
//    private Set<Stage> stages ;
////
//    @OneToMany (cascade = CascadeType.ALL,mappedBy = "users")
//    private Set<Erreur> erreurs ;
//
//    @OneToMany(mappedBy = "utilisateur")
//    private Set<CommentaireErreur> commentaires;
//    @ManyToMany(cascade = CascadeType.ALL,mappedBy = "user")
//    private Set<Club> clubs;
//@OneToMany(mappedBy = "utilisateur", cascade = CascadeType.ALL)
//private Set<CandidatureMiniJob> candidaturesJobs;
//
//    @ManyToMany
//    @JoinTable(
//            name = "utilisateur_erreur",
//            joinColumns = @JoinColumn(name = "utilisateur_id"),
//            inverseJoinColumns = @JoinColumn(name = "erreur_id")
//    )
//    private Set<Erreur> erreurs;
//
//    @OneToMany(mappedBy = "utilisateur", cascade = CascadeType.ALL)
//    private Set<Stage> stages;
//
//    @OneToMany(mappedBy = "utilisateur", cascade = CascadeType.ALL)
//    private Set<Projet> projets ;

//   @ManyToMany
//    private Set<Club> clubs;


//    @OneToMany(mappedBy = "utilisateur")
//    private Set<ParticipationProjet> participationsProjets;
////    @OneToMany(mappedBy = "utilisateur", cascade = CascadeType.ALL)
////    private Set<Evenement> evenements;

//    @OneToMany(mappedBy = "utilisateur")
//    private Set<CandidatureMiniJob> candidaturesMiniProjets;

//    @OneToMany(mappedBy = "utilisateur", cascade = CascadeType.ALL, orphanRemoval = true)
//    private Set<Erreur> erreurs;

}
