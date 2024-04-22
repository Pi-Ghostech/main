package tn.esprit.testerreur.service;
import tn.esprit.testerreur.entity.Comment;
import tn.esprit.testerreur.entity.Error;

import java.util.List;
public interface ICommentService {

    List<Comment> retrieveAllComments() ;
    void deleteComment(long idComment) ;
    Comment updateComment(Comment comment) ;
    Comment addComment(Comment comment) ;

}
