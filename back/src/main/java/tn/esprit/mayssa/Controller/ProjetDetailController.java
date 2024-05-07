package tn.esprit.mayssa.Controller;
import jakarta.websocket.server.PathParam;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.mayssa.entity.Projet;
import tn.esprit.mayssa.entity.ProjetDetail;
import tn.esprit.mayssa.Service.IProjetDeatil;

import java.util.List;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/ProjetDetail")
public class ProjetDetailController {
    @Autowired
     IProjetDeatil projetDetailService;
    @PostMapping("/addProjetDeatil")
    public ProjetDetail createProjetDetail(@RequestBody ProjetDetail projetDetail) {
        return projetDetailService.createProjetDetail(projetDetail);
    }
    @GetMapping("/getAllProjetDetails")

    public List<ProjetDetail> getAllProjetDetails() {
        return projetDetailService.getAllProjetDetails();
    }

    @GetMapping("/getProjetDetailById/{id}")
    public ProjetDetail getProjetDetailById(@PathVariable("id") Integer idProjet) {
        return projetDetailService.getProjetDetailById(idProjet);
    }
@PutMapping("/updateProjetDetail")
    public ProjetDetail updateProjetDetail(ProjetDetail projetDetail) {


        return projetDetailService.updateProjetDetail(projetDetail);
    }
@DeleteMapping("/deleteProjetDetail")
    public void deleteProjetDetail(Integer id) {
        projetDetailService.deleteProjetDetail(id);
    }









    @GetMapping("/recherche/{classe}")
    public ProjetDetail findByclasseLike(@PathVariable("classe") String classe)
    {
        return projetDetailService.findByclasseLike(classe);
    }


//    @GetMapping("/search")
//
//    public List<ProjetDetail> findBy( @RequestParam String nomProjet, @RequestParam String classe,@RequestParam String nomRespoDepot) {
//
//        return projetDetailService.findBy(nomProjet, classe, nomRespoDepot);
//    }




//


}
