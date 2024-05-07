import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Error,Category} from "../Entity/Error";
import {ErrorsService} from "../Services/ErrorService/errors.service";

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  listErrors!:Error[];
  error!: Error;
  cat:Category = Category.Front_end;
    constructor(
      private service:ErrorsService,
      private route: ActivatedRoute,
      private router: Router) {}
  ngOnInit(): void {
    this.cat = this.route.snapshot.params["category"];
    console.log("cat is :",this.cat);
    this.error=new Error();
    this.getErrorsbyCategory();

  }



  getErrorsbyCategory() {
    this.service.getErrorsByCategory(this.cat).subscribe(
      (errors: Error[]) => {
        this.listErrors = errors;
        console.log('Errors retrieved successfully');
      },
      (error) => {
        console.error('Failed to retrieve errors:', error);
      }
    );

  }


  getErrorById(ErreurId: number){
    this.router.navigate(['/frontClient/error-details',ErreurId]);
  }

  deleteError(errorId: number){
    this.service.deleteError(errorId).subscribe( data => {
      console.log(data);
      this.getErrorsbyCategory();
    })
  }


  truncateDescription(description: string): string {
    const words = description.split(' ');
    if (words.length > 10) {
      return words.slice(0, 10).join(' ') + '...';
    } else {
      return description;
    }
  }
  getImageSource(category: Category): string {
    switch (category) {
      case Category.Front_end:
        return 'assets/images2/front.jpeg';
      case Category.Back_end:
        return 'assets/images2/back.jpeg';
      case Category.DevOps:
        return 'assets/images2/dev.png';
        case Category.Data_Science:
          return 'assets/images2/ds.png';
          case Category.Cloud_Computing:
            return 'assets/images2/cloud.jpeg';
            case Category.Mobile_Development:
              return 'assets/images2/mobile.png';
              case Category.AI_and_Machine_Learning:
                return 'assets/images2/ai.png';
                case Category.Cybersecurity:
                  return 'assets/images2/cyber.jpeg';
                  case Category.Other:
                    return 'assets/images2/other.png';

      default:
        return 'assets/images2/default_image.jpg';
    }
  }

}

