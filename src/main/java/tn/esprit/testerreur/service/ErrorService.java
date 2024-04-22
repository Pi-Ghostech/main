package tn.esprit.testerreur.service;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tn.esprit.testerreur.entity.Error;
import tn.esprit.testerreur.repository.ErrorRepository;

import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class ErrorService implements IErrorService{
    ErrorRepository errorRepository ;

    @Override
    public List<Error> retrieveAllErrors() {
        return (List<Error>) errorRepository.findAll()  ;
    }

    @Override
    public void deleteError(long idError) {
        errorRepository.deleteById(idError);
    }


    @Override
    public Error updateError(Error error) {
        return errorRepository.save(error);
    }

    @Override
    public Error addError(Error error) {
        return errorRepository.save(error);
    }


}
