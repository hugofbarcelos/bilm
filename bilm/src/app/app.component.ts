import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent
  ],
  template: `
        <login></login>
  `,
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'bilm';
}