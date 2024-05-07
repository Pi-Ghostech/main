package tn.esprit.mayssa.Service;
import tn.esprit.mayssa.entity.Projet;

import java.util.List;

public interface IProjetService {

    Projet addProjet( Projet projet );
    List<Projet> gettAllProjet();
    Projet getProjetById(Integer projetID);
    void deleteProjet(Integer projetID);
    Projet updateProjet(Projet projet,Integer projetID);
    List<Projet> findallBytitreLike(String titre);

    public List<Projet> getAllProjectsSortedByRating();

    Projet addRating(Integer projectId, double rating);
//
//    List<Projet> getAllProjectsSortedByRating();

    //Projet ajouterProjetAvecDetail(Projet projet);


}
