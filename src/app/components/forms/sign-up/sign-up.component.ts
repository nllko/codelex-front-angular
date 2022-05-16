import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SignUpDetails} from "../../../shared/models/signUp.model";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @Input()
  exampleValue?: string;

  @Output()
  signUpEvent = new EventEmitter<SignUpDetails>();

  signUpForm = new FormGroup({});

  countries = [
    {
      title: 'Latvia',
      countryCode: 'LV'
    },
    {
      title: 'Estonia',
      countryCode: 'EE'
    },
    {
      title: 'Lithuania',
      countryCode: 'LT'
    }
  ]

  genders = [
    'Male',
    'Female'
  ]

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(4)]],
      robot: [false,[Validators.requiredTrue]],
      country: ['',[Validators.required]],
      gender: ['',[Validators.required]]
    });
  }

  signUp(): void {
    this.signUpForm.markAllAsTouched();
    if (this.signUpForm.valid) {
      this.signUpEvent.emit(this.signUpForm.value)
    }
  }

}
