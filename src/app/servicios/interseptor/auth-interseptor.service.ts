import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterseptorService {

  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      let intReq = req;
      const token = window.sessionStorage.getItem("jwt");
      if(token != null){
          intReq = req.clone({
              headers: req.headers.set('Authorization','Bearer '+token)
          });
      }
      return next.handle(intReq);
  }
}

export const interceptorProvider = [{
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterseptorService,
  multi: true }];