import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, ValidationErrors } from '@angular/forms';
import {CommentsService} from "../Services/ErrorService/comments.service";
import {GetconnecteduseridService} from "../Services/getconnecteduserid.service";
import {User} from "../Entity/User";
import {Comment} from "../Entity/Comment";

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  constructor(
    private commentService: CommentsService,
    private route: ActivatedRoute,
    private router: Router,
    private serviceuser:GetconnecteduseridService

  ) { }
  user!:User
  errorId!: number;
  comment: Comment = new Comment();
  badWords: string[] = ['zz', 'ss']; // Add your list of bad words here

  commentFormControl = new FormControl('', {
    validators: [Validators.required, this.badWordValidator.bind(this)]
  });

  ngOnInit(): void {
    this.errorId = this.route.snapshot.params["erreurId"];

    this.user=new User();
    this.serviceuser.getConnectedUserObject().subscribe((u:User)=>{
      this.user=u;

    });
  }

  saveComment() {
    this.commentService.addComment(this.comment, this.errorId).subscribe(
      (com: Comment) => {
        console.log("Comment added successfully with id:", com.idComment);
        console.log("User id:", this.user.id);

        this.commentService.affectCommentToUser(com.idComment, this.user.id).subscribe(
          () => {
            console.log("Comment affected to user successfully");
            this.goToError();
          },
          (error) => {
            console.log("Error affecting comment to user:", error);
            this.goToError();
          }
        );
      }
    );
  }



  onSubmit() {
    console.log(this.comment);
    this.saveComment();

  }

  goToError() {
    this.router.navigate(['/frontClient/error-details/', this.errorId]);
  }

  badWordValidator(control: FormControl): ValidationErrors | null {
    const commentText = control.value.toLowerCase();
    for (const word of this.badWords) {
      if (commentText.includes(word)) {
        return { badWord: true };
      }
    }
    return null;
  }

}
