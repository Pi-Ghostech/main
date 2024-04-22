package tn.esprit.testerreur.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.testerreur.entity.Comment;
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long>{
}
