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
  name = "Bhushan Bhale";
  x = 2;
  y = 4;
}
