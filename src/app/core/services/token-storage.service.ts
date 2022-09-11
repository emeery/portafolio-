import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {}

  saveToken(token: string): void {
    localStorage.removeItem('token')
    localStorage.setItem('token', token)
  }

  get obtieneStorage() {
    const tokenAlmacen = localStorage.getItem('token')
    if (!tokenAlmacen) return
    return { token: tokenAlmacen }
  }

  limpiarStorage(): void {
    localStorage.removeItem('token')
  }
}
