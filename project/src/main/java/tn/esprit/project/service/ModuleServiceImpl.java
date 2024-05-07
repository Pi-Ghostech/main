package tn.esprit.project.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tn.esprit.project.entity.Module;
import tn.esprit.project.repository.ModuleRepository;

import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class ModuleServiceImpl implements IModuleService{
    ModuleRepository moduleRepository;
    @Override
    public Module addModule(Module module) {
        return moduleRepository.save(module);
    }

    @Override
    public List<Module> getAllModules() {
        return moduleRepository.findAll();
    }

    @Override
    public Module getModuleById(long moduleId) {
        return moduleRepository.findById(moduleId).get();
    }

    @Override
    public void deleteModule(long moduleId) {
        moduleRepository.deleteById(moduleId);
    }



}
