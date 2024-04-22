package tn.esprit.testerreur.service;
import tn.esprit.testerreur.entity.Error;
import java.util.List;
public interface IErrorService {

    List<Error> retrieveAllErrors() ;
    void deleteError(long idError) ;
    Error updateError(Error error) ;
    Error addError(Error error) ;
}
