
import { Component, OnInit } from '@angular/core';

import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgbModal,NgbModalRef  } from '@ng-bootstrap/ng-bootstrap';
import { CreateImageComponent } from '../create-image/create-image.component';
import { MatDialog,MatDialogConfig  } from '@angular/material/dialog';
import {Image} from "../Entity/Image";
import {User} from "../Entity/User";
import {ErrorsService} from "../Services/ErrorService/errors.service";
import {ImageService} from "../Services/ErrorService/image.service";
import {CommentsService} from "../Services/ErrorService/comments.service";
import {GetconnecteduseridService} from "../Services/getconnecteduserid.service";
import {Error,Category} from "../Entity/Error";
import {Comment} from "../Entity/Comment";
import {PageJPAReleventData} from "../Entity/page-jparelevent-data";


@Component({
  selector: 'app-error-details-front',
  templateUrl: './error-details-front.component.html',
  styleUrls: ['./error-details-front.component.css']
})
export class ErrorDetailsFrontComponent implements OnInit{
  error!: Error;
  errorId!: number;
  imageId!: number;
  listComments!:Comment[] | null;
  listImages!:Image[];
  pagedComments!: Comment[];
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  image: any;
  displayedImage: Image | null = null;

  deleteOff:boolean=false;

  user!:User;
  comowner!:User;
  Connecteduser!:User;
  constructor(

    private service: ErrorsService,
    private imageService : ImageService ,
    private comservice: CommentsService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private dialog: MatDialog,
    private serviceuser:GetconnecteduseridService

  ) {}



  ngOnInit(): void {

    this.errorId = this.route.snapshot.params["erreurId"];
    this.error=new Error();

    this.service.getErrorById(this.errorId).subscribe(data => {
      this.error = data;

      console.log("test",this.user )
    }, error => console.log(error));
    //console.log("aaaaaaaaaaaaaa",this.listComments)

    this.service.getUserById(this.errorId).subscribe(data => {
      this.user = data;

      console.log("test",this.user )
    }, error => console.log(error));



    this.service.getImagesForError(this.errorId).subscribe(data => {
      this.listImages = data ;

    } , error => console.log(error) );

    this.Connecteduser=new User();
    this.serviceuser.getConnectedUserObject().subscribe((u:User)=>{
      this.Connecteduser=u;
      this.callPagination();
    });

  }



  getImageUrl(image: Image): string {
    return 'data:image/jpeg;base64,' + image.picByte;
  }

  displayImage(image: Image) {
    this.displayedImage = image;
  }

  closeImage() {
    this.displayedImage = null;
  }



  getErrorById(errorId: number) {
    this.service.getErrorById(errorId).subscribe( data => {
      console.log(data);
    })
  }

  deleteError(errorId: number){
    this.service.deleteError(errorId).subscribe( data => {
      console.log(data);
      this.back(this.error.category);
    })
  }
  updateLikes(commentId: number){
this.comservice.updateLikes(commentId).subscribe( data => {
  console.log(data);
  window.location.reload();

})

  }

  deleteImage(imageId: number | undefined) {
    if (imageId) {
      this.imageService.deleteImage(imageId).subscribe(data => {
        console.log(data);
        window.location.reload();
      });
    }
  }

  onAddImageClick(errorId: number) {
    this.router.navigate(['/frontClient/image',errorId]);
  }

  onUpdateclick(errorId: number) {
    this.router.navigate(['/frontClient/update-error',errorId]);
  }
  onUpdateCommentclick(commentId: number,errorId: number) {
    this.router.navigate(['/frontClient/update-comment',commentId,errorId]);
  }
  deleteComment(commentId: number){
    this.comservice.deleteComment(commentId).subscribe( data => {
      console.log(data);
      window.location.reload();

    })


  }

  onReplyClick(errorId: number) {
    this.router.navigate(['/frontClient/create-comment',errorId]);
  }

  totalPages: number = 0;
currentPage: number= 0;
sort:string ="likes";

onPageChange(event: number) {
console.log(event);
this.currentPage=event;
 this.callPagination()
}


callPagination() {
  this.service.getCommentsPaginatedForError(this.currentPage, this.sort!, this.errorId).subscribe((response: HttpResponse<PageJPAReleventData<Comment>>) => {
      this.listComments = response.body?.content ?? null;
      this.totalPages = response.body?.totalPages ?? -1;
      this.currentPage = response.body?.pageable.pageNumber ?? -1;
      console.log("sort :" + this.sort);
      console.log(response);

      if (this.listComments) {
          for (const comment of this.listComments) {
              this.comservice.getUserById(comment.idComment).subscribe(data => {
                  this.comowner = data;

                  comment.isOwner = this.Connecteduser.id === this.comowner.id;
              }, error => console.log(error));
          }
      }
  });
}




openCreateImageForm(errorId: number) {
  const dialogConfig = new MatDialogConfig();

  // Set the desired width and height of the dialog
  dialogConfig.width = '700px';
  dialogConfig.height = '700px';

  // Set the position of the dialog
  dialogConfig.position = {
    bottom: '30px', // Change this value to adjust the top position
    left: '400px' // Change this value to adjust the left position
  };
  dialogConfig.data = {
    errorId: errorId
  };

  const dialogRef = this.dialog.open(CreateImageComponent,dialogConfig);

  dialogRef.afterClosed().subscribe(result => {
    window.location.reload();
  });
}



  back(cat: Category){
    this.router.navigate(['/frontClient/errors',cat]);
  }
}
