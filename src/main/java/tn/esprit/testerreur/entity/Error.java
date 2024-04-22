package tn.esprit.testerreur.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Error {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idErreur;
    private Long idUser ;
    private String titre ;
    private String description ;
    private Date dateCreationErr ;




}
