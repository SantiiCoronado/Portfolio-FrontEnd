import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="http://localhost:8080/api/";
  
  constructor(private http:HttpClient) { }

  obtenerDatosPersona():Observable<any>{
    return this.http.get<any>(this.url + "persona");
  }

  obtenerDatosEstudio():Observable<any>{
    return this.http.get<any>(this.url + "estudio");
  }

  obtenerDatosProyecto():Observable<any>{
    return this.http.get<any>(this.url + "proyecto");
  }

  obtenerDatosExperiencia():Observable<any>{
    return this.http.get<any>(this.url + "experiencia");
  }

  obtenerDatosSkill():Observable<any>{
    return this.http.get<any>(this.url + "skill");
  }

  
}
