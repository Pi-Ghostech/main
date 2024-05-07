package tn.esprit.mayssa.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Projet {
    public Integer getProjetTitre;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer projetID;
    private String lienSiteWeb;


    private String titre;

    private String description;

    private double rating;

    private int ratingCount; // Nombre total de notes


    @OneToOne(cascade = CascadeType.ALL)
    @OrderColumn(name="id")
    private ProjetDetail projetDetail;




    @PrePersist
    @PreUpdate
    public void beforeSaveOrUpdate() {
        if (projetDetail == null) {
            projetDetail = new ProjetDetail();
        }
        // Remplir les détails du projet ici
        projetDetail.setNomProjet(this.titre); // Remplir le nom du projet avec le titre du projet
        projetDetail.setDescription(this.description); // Remplir la description des détails du projet avec la description du projet
        // Vous pouvez remplir d'autres champs de la même manière
        projetDetail.setDateDepot(LocalDate.now());



        if (projetDetail == null) {
            projetDetail = new ProjetDetail();
        }
        projetDetail.setIdProjet(this.projetID); // Assurez-vous que l'ID du détail du projet est le même que l'ID du projet
        // Remplir d'autres champs du détail du projet si nécessaire

    }





    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public int getRatingCount() {
        return ratingCount;
    }

    public void setRatingCount(int ratingCount) {
        this.ratingCount = ratingCount;
    }




    //   @OneToMany(mappedBy = "projet")
//    private List<ParticipationProjet> participationsProjets;
//
//@ManyToOne
//@JoinColumn(name = "utilisateur_id")
//private Utilisateur utilisateur;



//    @OneToMany(mappedBy = "projet")
//    private Set<ParticipationProjet> participationsUtilisateurs;
//    @OneToOne(cascade = CascadeType.ALL)
//    @OrderColumn(name="id")
//    private  ProjetDetail projetDetail;

}
