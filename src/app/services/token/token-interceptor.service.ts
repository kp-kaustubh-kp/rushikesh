import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class TokenInterceptorService implements HttpInterceptor{
  // authserv: any;

  constructor(private inject:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let authserv = this.inject.get(AuthService);
    let jwtToken = req.clone({
    setHeaders:{
     Authorization: 'Bearer '+localStorage.getItem('accessToken')
    }
    });
    return next.handle(jwtToken);
  }
}
