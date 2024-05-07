package tn.esprit.mayssa.Service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.mayssa.Repo.ProjetDetailRepo;
import tn.esprit.mayssa.Repo.ProjetRepo;
import tn.esprit.mayssa.entity.Projet;
import tn.esprit.mayssa.entity.ProjetDetail;


import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class ProjetService  implements IProjetService{
   @Autowired
    ProjetRepo projetRepo;

   ProjetDetailRepo projetDetailRepo;

    @Override
    public Projet addProjet(Projet projet) {
        return  projetRepo.save(projet);
    }

    @Override
    public List<Projet> gettAllProjet() {
        return projetRepo.findAll();
    }

    @Override
    public Projet getProjetById(Integer projetID) {
        return projetRepo.findById(projetID).get();
    }

    @Override
    public void deleteProjet(Integer projetID) {
        projetRepo.deleteById(projetID);

    }

    @Override
    public Projet updateProjet(Projet projet,Integer projetID) {
        return projetRepo.save(projet);
    }

    @Override
    public List<Projet> findallBytitreLike(String titre) {
        List<Projet> p =projetRepo.findAllBytitreLike(titre);
        return p;}


    @Override
    public Projet addRating(Integer projectId, double rating) {
        Projet projet = projetRepo.findById(projectId).orElse(null);
        if (projet != null) {
            // Ajouter la nouvelle note à la somme totale des notes
            double newTotalRating = projet.getRating() * projet.getRatingCount() + rating;
            // Incrémenter le nombre total de notes
            int newTotalCount = projet.getRatingCount() + 1;
            // Calculer la nouvelle moyenne en divisant la somme des notes par le nombre total de notes
            double newAverageRating = newTotalRating / newTotalCount;
            // Mettre à jour la note moyenne et le nombre total de notes
            projet.setRating(newAverageRating);
            projet.setRatingCount(newTotalCount);
            return projetRepo.save(projet);
      }
        return null;
    }

//    @Override
//    public Projet ajouterProjetAvecDetail(Projet projet) {
//        ProjetDetail projetDetail=projet.getProjetDetail();
//        projetDetailRepo.save(projetDetail);
//        projet.setProjetDetail(projetDetail);
//        return projetRepo.save(projet);
//
//    }


    @Override
    public List<Projet> getAllProjectsSortedByRating() {
        return projetRepo.findAllByOrderByRatingDesc();
    }

//@Override
//    public List<Projet> getAllProjectsSortedByRating() {
//        List<Projet> projects = projetRepo.findAll();
//        Collections.sort(projects, Comparator.comparingDouble(Projet::getRating).reversed());
//        return projects;
//    }

}
