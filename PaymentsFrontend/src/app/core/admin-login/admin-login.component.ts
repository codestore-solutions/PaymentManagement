import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  constructor(
    private _service: AuthService,
    private _snackbar: MatSnackBar
  ){}

  adminLoginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  login():void{
    if(this.adminLoginForm.value.username && this.adminLoginForm.value.password){
      this._service.adminLogin({username:this.adminLoginForm.value.username, password:this.adminLoginForm.value.password});
      this._service.isLoginError.subscribe((isError)=>{
        if(isError){
          this._snackbar.open("Invalid username or password", "Try again", {duration: 2000});
        }
      })
    } else {
      this._snackbar.open("Please enter required fields.", "Dismiss", {duration: 2000});
    }
  }

}
