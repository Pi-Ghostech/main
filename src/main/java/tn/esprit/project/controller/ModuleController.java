package tn.esprit.project.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.project.entity.Module;
import tn.esprit.project.repository.ModuleRepository;
import tn.esprit.project.service.IModuleService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/module")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ModuleController {
    IModuleService moduleService;
    ModuleRepository moduleRepository;

    @PostMapping("/add")
    public Module addModule(@RequestBody Module module) {return moduleService.addModule(module);}

    @GetMapping("/getAll")
    public List<Module> getAllModules() {return moduleService.getAllModules();}

    @GetMapping("/{id}")
    public Module getModuleById(@PathVariable("id") long moduleId) {return moduleService.getModuleById(moduleId);}

    @DeleteMapping("/{id}")
    public void deleteModule(@PathVariable("id") long moduleId) {moduleService.deleteModule(moduleId);}

    @PutMapping("/{id}")
    public ResponseEntity<Module> updateModule(@PathVariable("id") long moduleId, @RequestBody Module moduledetails) {
        Module module = moduleService.getModuleById(moduleId);
        module.setModuleName(moduledetails.getModuleName());
        module.setDescription(moduledetails.getDescription());
        Module updatedModule = moduleService.addModule(module);
        return ResponseEntity.ok(updatedModule);
    }

}
