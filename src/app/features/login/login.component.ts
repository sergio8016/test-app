import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ButtonModule, InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  protected username = '';
  protected password = '';
  protected loginError = false;

  constructor(private readonly router: Router, private readonly auth: AuthService) {}

  protected login(): void {
    this.loginError = !this.auth.login(this.username);
    if (!this.loginError) {
      void this.router.navigate(['/dashboard']);
    }
  }
}
