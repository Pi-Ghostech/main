package tn.esprit.mayssa.entity;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "role")
public class Role {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer roleID;

    private String titre;

    private String description;

    @OneToMany(mappedBy = "role")
    private Set<Utilisateur> utilisateurs;
}
