package tn.esprit.mayssa.Repo;
import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.mayssa.entity.Projet;

import java.util.List;

public interface ProjetRepo extends JpaRepository<Projet,Integer> {

    List<Projet> findAllBytitreLike(String titre);
    List<Projet> findAllByOrderByRatingDesc();

    


}
