import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../interfaces/admin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoginError = new EventEmitter<boolean>(false);

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

  adminLogin(loginData: Admin): void {
    this._http.post("https://app-deliveryagent-dev.azurewebsites.net/api/v1/testing/login", loginData)
      .subscribe((result:any) => {
        if (result) {
          localStorage.setItem("user", JSON.stringify(result));
          this._router.navigate(["admin/dashboard"])
        }
      }, (err)=>{
        this.isLoginError.emit(true);
      })
  }

}
