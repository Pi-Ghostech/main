package tn.esprit.testerreur.service;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tn.esprit.testerreur.entity.Comment;
import tn.esprit.testerreur.repository.CommentRepository;


import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class CommentService implements ICommentService{
    CommentRepository commentRepository ;

    @Override
    public List<Comment> retrieveAllComments() {
        return (List<Comment>) commentRepository.findAll()  ;
    }

    @Override
    public void deleteComment(long idError) {
        commentRepository.deleteById(idError);
    }


    @Override
    public Comment updateComment(Comment comment) {
        return commentRepository.save(comment);
    }

    @Override
    public Comment addComment(Comment comment) {
        return commentRepository.save(comment);
    }
}
