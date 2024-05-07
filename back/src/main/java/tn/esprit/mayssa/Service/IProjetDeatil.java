package tn.esprit.mayssa.Service;
import tn.esprit.mayssa.entity.ProjetDetail;

import java.util.List;

public interface IProjetDeatil  {





        // Create (POST)
        ProjetDetail createProjetDetail(ProjetDetail projetDetail);

        // Read All (GET)
        List<ProjetDetail> getAllProjetDetails();

        // Read by ID (GET)
        ProjetDetail getProjetDetailById(Integer idProjet) ;

        // Update (PUT)
         ProjetDetail updateProjetDetail(ProjetDetail projetDetail);
        // Delete (DELETE)
        void deleteProjetDetail(Integer id) ;

//        List<ProjetDetail> findBy(String nomProjet, String classe, String nomRespoDepot);
//        ProjetDetail findByClasseContaining(String Classe);

        ProjetDetail findByclasseLike(String classe);

}
