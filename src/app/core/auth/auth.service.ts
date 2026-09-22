import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export type UserRole = 'admin' | 'worker';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storageKey = 'build-flow-session';
  private readonly currentUser = signal<string | null>(this.readSession());

  constructor(private readonly router: Router) {}

  get username(): string | null {
    return this.currentUser();
  }

  get role(): UserRole | null {
    const username = this.currentUser();
    return username === 'admin' || username === 'worker' ? username : null;
  }

  get isAuthenticated(): boolean {
    return this.role !== null;
  }

  login(username: string): boolean {
    const normalizedUsername = username.trim().toLowerCase();
    if (normalizedUsername !== 'admin' && normalizedUsername !== 'worker') {
      return false;
    }

    sessionStorage.setItem(this.storageKey, normalizedUsername);
    this.currentUser.set(normalizedUsername);
    return true;
  }

  logout(): void {
    sessionStorage.removeItem(this.storageKey);
    this.currentUser.set(null);
    void this.router.navigate(['/login']);
  }

  private readSession(): string | null {
    const storedUsername = sessionStorage.getItem(this.storageKey);
    return storedUsername === 'admin' || storedUsername === 'worker' ? storedUsername : null;
  }
}
