import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FormControl,ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { log } from 'console';
import { response } from 'express';


@Component({
  selector: 'app-addedit',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './addedit.component.html',
  styleUrl: './addedit.component.css'
})
export class AddeditComponent implements OnInit{
  
  userForm: any;
  toastMessage: any;

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      
        first_name: ['abc', Validators.required],
        last_name: ['def', Validators.required],
        email: ['mhs@gmail.com', [Validators.required, Validators.email]],
        personal_email: [''],
        mobile: [''],
        office_number: [''],
        organization_id: [1, Validators.required],
        department_id: [1, Validators.required],
        division_id: [1, Validators.required],
        section_id: [1, Validators.required],
        designation_id: [1, Validators.required],
        pwd: ['abcdef', Validators.required],
        pwd_confirm: ['abcdef', Validators.required],
        addresses: this.formBuilder.group({
          contact: this.formBuilder.group({
            address: [''],
            street: [''],
            state: [''],
            city: [''],
            zip: [''],
            contact: [''],
            country_id: ['']
          }),
          emergency: this.formBuilder.group({
            relative_name: [''],
            relationship: [''],
            address: [''],
            relative_mobile: ['']
          })
        }),
        address: [''],
        street: [''],
        state: [''],
        city: [''],
        country_id: [''],
        zip: [''],
        contact: [''],
        relative_name: [''],
        relationship: [''],
        relative_mobile: [''],
        relative_address: [''],
        role_ids: [[1]],
        is_auditor: [false],
        is_top_user: [true],
        is_send_welcome: [false],
        date_of_birth: [''],
        national_insurance_number: [''],
        joining_date: [''],
        leaving_date: [''],
        is_license_active: [true]
      });
   
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      this.userService.create(user).subscribe(
        (data: any) => {
          console.log('Added successfully'); 
        },
        (error: any) => {
          console.error(error); 
        }
      );
    } else {
     
    }
    
  }
}