import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
import { Estudio } from '../models/estudio';
import { Proyecto } from '../models/proyecto';
import { ExperienciaLaboral } from '../models/experiencia-laboral';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="http://localhost:8080/api/";
  
  constructor(private http:HttpClient) { }
  //Persona
  obtenerDatosPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url + "persona");
  }

  editarPersona(id:number, persona:Persona):Observable<any>{
    return this.http.put<Persona>(this.url + `persona/editar/${id}`, persona)
  }


  //Estudio
  obtenerDatosEstudio():Observable<Estudio[]>{
    return this.http.get<Estudio[]>(this.url + "estudio");
  }

  obtenerEstudio(id:number):Observable<Estudio>{
    return this.http.get<Estudio>(this.url + `estudio/${id}`)
  }

  crearEstudio(estudio:Estudio):Observable<any>{
    return this.http.post<any>(this.url + "estudio/crear", estudio)
  }

  editarEstudio(id:number, estudio:Estudio):Observable<any>{
    return this.http.put<any>(this.url + `estudio/editar/${id}`, estudio)
  }

  eliminarEstudio(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `estudio/eliminar/${id}`)
  }


  //Proyecto
  obtenerDatosProyecto():Observable<any>{
    return this.http.get<any>(this.url + "proyecto");
  }

  obtenerProyecto(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(this.url + `proyecto/${id}`)
  }

  crearProyecto(proyecto:Proyecto):Observable<any>{
    return this.http.post<any>(this.url + "proyecto/crear", proyecto)
  }

  editarProyecto(id:number, proyecto:Proyecto):Observable<any>{
    return this.http.put<any>(this.url + `proyecto/editar/${id}`, proyecto)
  }

  eliminarProyecto(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `proyecto/eliminar/${id}`)
  }

  //Experiencia Laboral
  obtenerDatosExperiencia():Observable<any>{
    return this.http.get<any>(this.url + "experiencia");
  }

  obtenerExperiencia(id:number):Observable<ExperienciaLaboral>{
    return this.http.get<ExperienciaLaboral>(this.url + `experiencia/${id}`)
  }

  crearExperiencia(experiencia:ExperienciaLaboral):Observable<any>{
    return this.http.post<any>(this.url + "experiencia/crear", experiencia)
  }

  editarExperiencia(id:number, experiencia:ExperienciaLaboral):Observable<any>{
    return this.http.put<any>(this.url + `experiencia/editar/${id}`, experiencia)
  }

  eliminarExperiencia(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `experiencia/eliminar/${id}`)
  }

  //Skills
  obtenerDatosSkill():Observable<any>{
    return this.http.get<any>(this.url + "skill");
  }

  obtenerSkill(id:number):Observable<Skill>{
    return this.http.get<Skill>(this.url + `skill/${id}`)
  }

  crearSkill(skill:Skill):Observable<any>{
    return this.http.post<any>(this.url + "skill/crear", skill)
  }

  editarSkill(id:number, skill:Skill):Observable<any>{
    return this.http.put<any>(this.url + `skill/editar/${id}`, skill)
  }

  eliminarSkill(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `skill/eliminar/${id}`)
  }

  
}
