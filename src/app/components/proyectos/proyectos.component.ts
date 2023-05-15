import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private portfolioService:PortfolioService) { }
  proyectos:any;

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos():void{
    this.portfolioService.obtenerDatosProyecto().subscribe(data=>{
      console.log("Datos de proyecto"+ JSON.stringify(data));
      this.proyectos=data;
    }
    );
  }

  delete(id?:number){
    if(id!=undefined){
      this.portfolioService.eliminarProyecto(id).subscribe(data=>{       
      }, err=>{
        this.cargarProyectos();
      })
    }
  }
}
