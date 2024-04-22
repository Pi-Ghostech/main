package tn.esprit.testerreur.controller;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.testerreur.entity.Error;
import tn.esprit.testerreur.service.IErrorService;
import java.util.List;
@RestController
@AllArgsConstructor
@RequestMapping("/error")
public class ErrorController {

    IErrorService errorService ;

    @GetMapping("/get")
    public List<Error> getErrors() {

        List<Error> ListErrors = errorService.retrieveAllErrors();
        return ListErrors ;

    }

    @PostMapping("/add")
    public Error addError(@RequestBody Error e)
    {
        Error error = errorService.addError(e);
        return error ;
    }

}
