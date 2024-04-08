import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({}); // Declare a FormGroup variable
  constructor(private user_service:UserServiceService) { }

  ngOnInit(): void {
    // Initialize the registerForm FormGroup
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required), // Use Validators.required for mandatory fields
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  // You can create a method to handle form submission
  onSubmit() {
    // Here you can access the form values using this.registerForm.value
    console.log(this.registerForm.value);
    // You can also perform any other logic like sending the form data to a server
    this.user_service.registerUser(this.registerForm.value).subscribe(
      (r) => {
          
          // Handle the data here
         
      },
      (_e) => {
          
      }
  );
  }

  
}
