import { Injectable } from '@angular/core';
import { AccountCredentials } from '../models/account-credentials';
import { AuthResponse } from '../models/auth-response';
import { TokenStorageService } from './token-storage.service';
import { AccountApiService } from './accounnt-api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountFacadeService {
  
  constructor(private accountApi: AccountApiService, private tokenStorage: TokenStorageService) { }

  userName : string = '';

  isAuthenticated(): Boolean {
    if(this.tokenStorage.accessToken) {
      this.userName = this.tokenStorage.userName; 
      return true;
    }
    return false;
  }
  async register(credential: AccountCredentials) {
    await this.accountApi.register(credential);
  }

  async login(credential: AccountCredentials) {
    let token = await this.accountApi.login(credential) ;

    this.tokenStorage.accessToken = token.token;
    this.tokenStorage.userName = token.firstName;
  }

  logout() {
    this.tokenStorage.removeToken();
  }
  
}
