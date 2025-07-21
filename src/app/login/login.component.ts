import { Component } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  imports: [SignupComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name:string="Bhushan"
  age:number=25
  handleClick(){
    alert("Button clicked!!!");
    this.printButtonClicked();
  }
  sum(a:number,b:number){
    console.log(a=b);
  }

  printButtonClicked() {
    console.log("button is clicked");
  }

}
