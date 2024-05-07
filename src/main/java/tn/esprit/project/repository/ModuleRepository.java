package tn.esprit.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.project.entity.Module;

public interface ModuleRepository extends JpaRepository<Module, Long> {
}
