package tn.esprit.mayssa.Repo;
import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.mayssa.entity.Projet;
import tn.esprit.mayssa.entity.ProjetDetail;

import java.util.List;

public interface ProjetDetailRepo  extends JpaRepository<ProjetDetail,Integer>{
//    List<ProjetDetail> findBy(String nomProjet, String classe, String nomRespoDepot);
//ProjetDetail findByClasseContaining(String Classe); Projet findBytitreLike(String titre);
    ProjetDetail findByclasseLike(String classe);
}
