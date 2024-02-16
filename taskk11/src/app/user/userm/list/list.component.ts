import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  users: User []=[];
  currentPage: number = 1;
  itemsPerPage: number = 7;
  constructor(public usersrvice: UserService){}

  ngOnInit (): void{
    this.usersrvice.getAll().subscribe((res: any)=>{
      this.users = res.data;
      console.log (this.users);
    })
  }

  nextPage(): void {
    
    this.currentPage++;
   
    this.ngOnInit();
  }

  previousPage(): void {
    
    if (this.currentPage > 1) {
      this.currentPage--;
     
      this.ngOnInit();
    }
  }
  get totalPages(): number {
    return Math.ceil(this.users.length / this.itemsPerPage);
  }



}
