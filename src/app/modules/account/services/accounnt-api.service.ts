import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AccountCredentials } from '../models/account-credentials';
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  private readonly apiUrl:string = environment.accountApiUrl;

  constructor(private httpClient: HttpClient) { }

  login(credential: AccountCredentials){
    let options = { responseType: 'blob' }
    credential.firstName = 'default';
    credential.lastName = 'default';
    console.log(credential)
    return this.httpClient.post<AuthResponse>(`${this.apiUrl}auth/authenticate`, credential, {headers: options}).toPromise() as Promise<AuthResponse>;
  }

  register(credential : AccountCredentials){
    let options = {responseType:'blob'};
    return this.httpClient.post<string>(`${this.apiUrl}auth/register`, credential, {headers: options}).toPromise() as Promise<void>;
  }
}
