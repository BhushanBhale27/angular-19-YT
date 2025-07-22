import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports:[LoginComponent, LogoutComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-19-YT';
  name:string = '';
  email=""
  info = ''
  // users = ['Bhushan','Bhale','Sanu','Aai','baba'];
  users = [
    {name:'bhushan',age:25,color:"red"},
    {name:'Anil',age:25,color:"red"},
    {name:'baba',age:25,color:"red"},
    {name:'sanu',age:25,color:"red"}
  ]
  getName(event:Event){
    console.log(typeof event);
    console.log(event);
    if(typeof (event.target as HTMLInputElement).value === "string"){
      this.name = ((event.target as HTMLInputElement).value);
    } else {
      this.name = "Enter valid name";
    }
  }
  getEmail(val:string){ 
      this.email = val;
  }
  setEmail(){
    this.email = "default@gmail.com"
  }

  getNameOfObj(val:string){
    this.info = val;
  }
}
