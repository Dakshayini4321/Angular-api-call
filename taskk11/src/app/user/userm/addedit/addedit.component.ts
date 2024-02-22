import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User, User2, User3 } from '../user';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FormControl,ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';


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
  userData: any;

  users1: User2[] = [];
  id: any;
  UId!: any;
  userId: string | null = null;
  

  constructor(   private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,) { }


    

  ngOnInit(): void {

    this.userId=this.route.snapshot.paramMap.get(this.id);


    this.userForm = this.formBuilder.group({
      
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        personal_email: [''],
        mobile: [''],
        office_number: [''],
        organization_id: [1, Validators.required],
        department_id: [1, Validators.required],
        division_id: [1, Validators.required],
        section_id: [1, Validators.required],
        designation_id: [1, Validators.required],
        pwd: ['', Validators.required],
        pwd_confirm: ['', Validators.required],
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

      this.route.params.subscribe(params => {
        this.id = params['id'];
        if (this.id) {
         
          this.userService.getUser(this.id).subscribe((userData: any) => {

userData.first_name = userData.name;

            this.userForm.patchValue(userData); 
          });
        }
      });
   
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      const userId = this.route.snapshot.paramMap.get('id');
      
      const apiCall = userId ? this.userService.update(this.id, userData) : this.userService.create(userData);

      apiCall.subscribe(
        () => {
          console.log('User data saved successfully');
          this.router.navigate(['user/userm/list']);
        },
        (error) => {
          console.error('Error saving user data:', error);
          if (error.error && error.error.errors) {
            // Handle errors from the server and bind to form fields
            this.handleFormErrors(error.error.errors);
          } else {
            this.toastMessage = 'An error occurred while saving user data.';
          }
        }
      );
    }
  }

  // Function to bind server-side errors to form fields
  handleFormErrors(errors: any): void {
    for (const fieldName of Object.keys(errors)) {
      const formControl = this.userForm.get(fieldName);
      if (formControl) {
        formControl.setErrors({ serverError: errors[fieldName].join(', ') });
      }
    }
  }
    }
  


