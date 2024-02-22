import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { User, User2 } from '../user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';





@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, NgxPaginationModule ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  
})
export class ListComponent {


 
  users1: User2[] = [];

  users: any[] = [];
  
  allUsers: number = 0;
  pagination: number = 0;


 
 
  
  constructor(public usersrvice: UserService,  private route: ActivatedRoute,
    private router: Router, private toastr: ToastrService
    ){}

    fetchUsers() {
      this.usersrvice.getAll10(this.pagination).subscribe((res: any) => {
        this.users = res.data;
        this.allUsers = res.total;
        console.log(res.total);
      });
    }
    renderPage(event: number) {
      this.pagination = event;
      this.fetchUsers();
    }

  ngOnInit (): void{

    this.fetchUsers();
    console.log(this.fetchUsers());
    
    this.usersrvice.getAll().subscribe((res: any)=>{
      this.users = res.data;
      console.log (this.users);
    })
  }
  

  editUser(id: number): void {
    this.router.navigate(['/addedit', id]); 
    

  }
 
 

  deleteUser(event: any, userData: any) {
    if (confirm('Are you sure you want to delete this data?')) {
      event.target.innerText = "Deleting..";
      this.usersrvice.delete(userData).subscribe(
        (res: any) => {
         
          console.log('Deleted successfully');
         
          this.usersrvice.getAll().subscribe((res: any) => {
            this.users = res.data;
          });
        },
        (error: any) => {
         console.log(error)
         
        }
      );
    }
  }


  GoDetails(id: number): void {
    this.router.navigate(['/details', id]);
  }
 

}
