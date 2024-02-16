import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User, User2 } from '../user';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  users: User2 []=[];
updatedUser: any;
sectionId: string = '';
toastr: any;

currentPage: number = 1;
itemsPerPage: number = 15;
  

  constructor(public usersrvice: UserService){}

  ngOnInit (): void{
    this.usersrvice.getAll().subscribe((res: any)=>{
      this.users = res.data;
      console.log (res);
    })
    this.usersrvice.getAll2().subscribe((res: any)=>{
      this.users = res.data;
      console.log (res);
    })
    this.usersrvice.getAll3().subscribe((res: any)=>{
      this.users = res.data;
      console.log (res);
    })
  }

  onDeleteSection(section_id: string): void {
    this.usersrvice.delete(section_id).subscribe((res: any) => {
      
      this.toastr.success('User data deleted successfully');
      console.log('Section deleted successfully:', res);
      
    }, (error) => {
     
      console.error('Failed to delete section:', error);
    });
  }

  onUpdateSection(section_id: string, updatedUser: User): void {

   


    this.usersrvice.update(section_id, updatedUser).subscribe((res: any) => {
     
      console.log('Section updated successfully:', res);
      
    }, (error) => {
      
      console.error('Failed to update section:', error);
    });
  }

  
  }
  
  
  



