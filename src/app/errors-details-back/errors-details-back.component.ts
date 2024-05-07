import { Component, OnInit , AfterViewInit} from '@angular/core';
import { Error } from "../Entity/Error";
import { Comment } from "../Entity/Comment";
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { Image } from '../Entity/Image';
import {ErrorsService} from "../Services/ErrorService/errors.service";
import {CommentsService} from "../Services/ErrorService/comments.service";
declare var $: any;

@Component({
  selector: 'app-errors-details-back',
  templateUrl: './errors-details-back.component.html',
  styleUrls: ['./errors-details-back.component.css']
})
export class ErrorsDetailsBackComponent {
  error!: Error;
  errorId!: number;
  listComments!:Comment[];
  listImages!:Image[];
  pagedComments!: Comment[];
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  image: any;
  displayedImage: Image | null = null;
  constructor(

    private service: ErrorsService,
    private comservice: CommentsService,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient

  ) {}



  ngOnInit(): void {
    this.errorId = this.route.snapshot.params["erreurId"];
    this.error=new Error();

    this.service.getErrorById(this.errorId).subscribe(data => {
      this.error = data;
    }, error => console.log(error));

    this.service.getCommentsForError(this.errorId).subscribe(data => {
      this.listComments = data ;
      this.pageChanged(1);
    } , error => console.log(error) );

    this.service.getImagesForError(this.errorId).subscribe(data => {
      this.listImages = data ;

    } , error => console.log(error) );

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
      this.back();
    })
  }
  onAddImageClick(errorId: number) {
    this.router.navigate(['image',errorId]);
  }


  deleteComment(commentId: number){
    this.comservice.deleteComment(commentId).subscribe( data => {
      console.log(data);
      window.location.reload();

    })
  }





  pageChanged(page: number) {
    const itemsPerPage = 3;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, this.listComments.length);
    this.pagedComments = this.listComments.slice(startIndex, endIndex);
  }



  back(){
    this.router.navigate(['/backtemplate/errors-back']);
  }
}
