import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/models/estudio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios:Estudio[]=[];

  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.cargarEstudios();
  }

  cargarEstudios():void{
    this.portfolioService.obtenerDatosEstudio().subscribe(data=>{
      this.estudios=data;
    }
    );
  }

  delete(id?:number):void{
    if(id != undefined){
      this.portfolioService.eliminarEstudio(id).subscribe(data=>{
      }, err =>{
        this.cargarEstudios();
      })
    }
  }

}
