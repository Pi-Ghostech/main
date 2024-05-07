package tn.esprit.mayssa.Service;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.mayssa.Repo.ProjetDetailRepo;
import tn.esprit.mayssa.Service.IProjetDeatil;
import tn.esprit.mayssa.entity.Projet;
import tn.esprit.mayssa.entity.ProjetDetail;

import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class ProjetDetailService  implements IProjetDeatil{
    @Autowired
   private ProjetDetailRepo  projetDetailRepository;
    @Override
    public ProjetDetail createProjetDetail(ProjetDetail projetDetail) {
        return projetDetailRepository.save(projetDetail);
    }

    @Override
    public List<ProjetDetail> getAllProjetDetails() {
        return projetDetailRepository.findAll();
    }

    @Override
    public ProjetDetail getProjetDetailById(Integer idProjet) {
        return projetDetailRepository.findById(idProjet).get();
    }

    @Override
    public ProjetDetail updateProjetDetail(ProjetDetail projetDetail) {


        return projetDetailRepository.save(projetDetail);
    }

    @Override
    public void deleteProjetDetail(Integer id) {
        projetDetailRepository.deleteById(id);
    }

    @Override
    public ProjetDetail findByclasseLike(String classe) {
        return projetDetailRepository.findByclasseLike(classe); }

//    @Override
//    public List<ProjetDetail> findBy(String nomProjet, String classe, String nomRespoDepot) {
//        return projetDetailRepository.findBy(nomProjet, classe,nomRespoDepot);
//    }
//@Override
//public  ProjetDetail findByClasseContaining(String Classe)
//    {
//    return  projetDetailRepository.findByClasseContaining(Classe);
//
//}
}
