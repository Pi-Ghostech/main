package tn.esprit.testerreur.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.testerreur.entity.Error;
@Repository
public interface ErrorRepository extends JpaRepository<Error, Long> {
}
