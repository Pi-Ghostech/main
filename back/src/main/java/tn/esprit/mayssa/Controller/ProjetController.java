package tn.esprit.mayssa.Controller;
import jakarta.websocket.server.PathParam;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.mayssa.entity.Projet;
import tn.esprit.mayssa.Service.IProjetService;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@CrossOrigin
@RequestMapping("/Projet")
public class ProjetController {
    @Autowired
    IProjetService projetservice;

    @PostMapping("/addProjet")
    public Projet addProjet( @RequestBody Projet projet) {
        return  projetservice.addProjet(projet);
    }

    @GetMapping("/GetAllProjet")
    public List<Projet> gettAllProjet() {
        return projetservice.gettAllProjet();
    }


    @GetMapping("/{id}")
    public Projet getProjetById( @PathVariable("id") Integer projetID) {
        return  projetservice.getProjetById(projetID);
    }

   @DeleteMapping("/{id}")
    public void deleteProjet(@PathVariable("id") Integer projetID) {
        projetservice.deleteProjet(projetID); }
//    @DeleteMapping("/{id}")
//    public Map<String,Boolean>  deleteProjet(@PathVariable("id") Integer projetID)
//    { Projet projet =projetservice.findById(projetID).
//
//    }




    @PutMapping("/update/{id}")
    public Projet updateProjet(@RequestBody Projet projet, @PathParam("id") Integer projetID) {
        return projetservice.updateProjet(projet,projetID);
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<Projet> updateCourse(@PathVariable("id") long ProjetId, @RequestBody  Projet prodetails) {
//        Projet pro = projetservice.getProjetById((int) ProjetId);
//        pro.setProjettitre(prodetails.getProjetTitre);
//
//        if (prodetails.getProjet() != null) {
//            Module newModule = moduleService.getModuleById(coursedetails.getModule().getModuleId());
//            course.setModule(newModule);
//        }
//
//        Course updatedCourse = projetservice.addCourse(course);
//        return ResponseEntity.ok(updatedCourse);
//    }

    @GetMapping("/afficher/{titre}")
    public List<Projet> findBytitreLike(@PathVariable("titre")  String titre) {
        return projetservice.findallBytitreLike(titre) ;
    }

    @PostMapping("/addRating/{id}")
    public Projet addRating(@PathVariable("id") Integer projetId, @RequestParam("rating") double rating) {
        return projetservice.addRating(projetId, rating);
    }

    @GetMapping("/getAllProjectsSortedByRating")
    public List<Projet> getAllProjectsSortedByRating() {
        List<Projet> projects = projetservice.getAllProjectsSortedByRating();
        return projects;
    }
//    @PostMapping("/ajouterprojetetdetail")
//    public Projet ajouterProjetAvecDetail(@RequestBody Projet projet) {
//
//    return projetservice.ajouterProjetAvecDetail(projet);
//    }


//    @GetMapping("/getAllProjectsSortedByRating")
//    public List<Projet> getAllProjectsSortedByRating() {
//        List<Projet> projects = projetRepository.findAll();
//        Collections.sort(projects, Comparator.comparingDouble(Projet::getRating).reversed());
//        return projects;
//    }


}
