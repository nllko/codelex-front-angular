import { Component } from '@angular/core';
import {LoginDetails} from "../../shared/models/login.model";
import {SignUpDetails} from "../../shared/models/signUp.model";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  exampleValue = 'Es nezinu';

  login(logingDetails: LoginDetails):void {
   console.log('login info',logingDetails)
 }
  signUp(signUpDetails: SignUpDetails):void {
    console.log('sign up info',signUpDetails)
  }
}
