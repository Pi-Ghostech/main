package tn.esprit.project.service;


import tn.esprit.project.entity.Module;

import java.util.List;

public interface IModuleService {

    Module addModule(Module module);

    List<Module> getAllModules();

    Module getModuleById(long moduleId);

    void deleteModule(long moduleId);

}
