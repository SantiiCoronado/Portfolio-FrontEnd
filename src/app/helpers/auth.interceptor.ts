import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PortfolioService } from '../services/portfolio.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private portfolioService:PortfolioService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.portfolioService.getToken();

    if(token){
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
      return next.handle(cloned);
    }
    return next.handle(request);
  }
}
