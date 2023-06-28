import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private _router: Router) { }

  intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{

    const tokenString = localStorage.getItem("user");

    if(tokenString){
      let tokenObject = JSON.parse(tokenString);

      request = request.clone({
        setHeaders:{
          'Authorization': `Bearer ${tokenObject.jwtToken}`,
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err)=>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            localStorage.clear();
            this._router.navigate(["admin-login"]);
          }
        }
        return throwError(err);
      })
    )
  }
}