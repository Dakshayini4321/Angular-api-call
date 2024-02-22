import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User, User2, User3 } from '../user';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  users: any;
  users1: User3[] = [];
updatedUser: any;
sectionId: string = '';
  id: any;
userData: any;
  


  constructor(public usersrvice: UserService, private http:HttpClient, private route: ActivatedRoute ){}

  
 


 




ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.id = +params['id']; 



    
      if (this.id) {
       
        this.usersrvice.getUser(this.id).subscribe((userData: any) => {
          userData.first_name = userData.name;
          this.userData = userData;



          console.log(userData); 
        });
      }
    });
 

    
  };
}

 
  
  

  

  

 


  




  
  
  
  



