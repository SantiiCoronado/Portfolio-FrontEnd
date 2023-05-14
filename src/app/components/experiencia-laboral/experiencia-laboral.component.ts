import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  experiencias:ExperienciaLaboral[] = [];

  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.cargarExperiencias();
  }

  cargarExperiencias():void{
    this.portfolioService.obtenerDatosExperiencia().subscribe(data=>{
      this.experiencias = data;
    })
  }

  delete(id?:number):void{
    if(id != undefined){
      this.portfolioService.eliminarExperiencia(id).subscribe(data=>{
      }, err =>{
        this.cargarExperiencias();
      })
    }

  }

}
