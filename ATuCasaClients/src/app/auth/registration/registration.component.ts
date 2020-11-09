import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      name:["",Validators.required],
      email:["",[Validators.required, Validators.email]],
      phone:["",[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password:["",Validators.required],
      passwordConfirmation:["",Validators.required]
    })
  }

  ngOnInit(): void {
  }

  async submitUser()
  {

  }


}
