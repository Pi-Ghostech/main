package tn.esprit.mayssa.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProjetDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProjet;
    private String NomProjet;
    private  String classe;
    private  String description;
    private LocalDate dateDepot;
    private String nomRespoDepot;
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "projetDetail")
    @OrderColumn(name="id")
    @JsonIgnore

    private Projet projet;



}
