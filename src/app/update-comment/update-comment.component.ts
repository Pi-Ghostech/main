import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CommentsService} from "../Services/ErrorService/comments.service";
import {GetconnecteduseridService} from "../Services/getconnecteduserid.service";
import {User} from "../Entity/User";
import { Comment} from "../Entity/Comment";

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css']
})
export class UpdateCommentComponent {



  commentId!: number;
  errorId!: number;
  comment: Comment = new Comment();
  user!:User
  constructor(private commentsService: CommentsService,
    private route: ActivatedRoute,
    private router: Router,
    private serviceuser:GetconnecteduseridService) {}

  ngOnInit(): void {
    this.commentId = this.route.snapshot.params["commentId"];

    this.errorId = this.route.snapshot.params['erreurId'];

    console.log('Comment ID:', this.commentId);
    console.log('Error ID:', this.errorId);
        this.commentsService.getCommentById(this.commentId).subscribe(data => {
      this.comment = data;

    }, error => console.log(error));


    this.user=new User();
    this.serviceuser.getConnectedUserObject().subscribe((u:User)=>{
      this.user=u;

    });

  }

  onSubmit() {
    console.log('Submitting update for error:', this.comment);
    this.commentsService.updateComment(this.commentId, this.comment,this.errorId,).subscribe(
      (com: Comment) => {
        console.log('Update successful:', com);
        console.log('looser is:', this.user.id);
        this.commentsService.affectCommentToUser(com.idComment, this.user.id).subscribe();
        this.getErrorById(this.errorId);
      }

    );
  }


  getErrorById(ErreurId: number){
    this.router.navigate(['/frontClient/error-details',ErreurId]);
  }


}
