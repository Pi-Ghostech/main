package tn.esprit.pi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.pi.Entities.Club;
import java.util.List;

public interface ClubRepo extends JpaRepository<Club,Long> {
    List<Club> findByNomContaining(String nom);
    List<Club> findByDescriptionContaining(String description);
}
