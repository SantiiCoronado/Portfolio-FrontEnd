import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/models/estudio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-estudioscrear',
  templateUrl: './estudioscrear.component.html',
  styleUrls: ['./estudioscrear.component.css']
})
export class EstudioscrearComponent implements OnInit {

  institucion:string;
  titulo:string;
  fechaInicio:Date;
  fechaFin:Date;
  constructor(private portfolioService:PortfolioService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const estudio = new Estudio(this.institucion, this.titulo, this.fechaInicio, this.fechaFin);
    this.portfolioService.crearEstudio(estudio).subscribe(data=>{
    }, err=>{
      alert("Estudio añadido correctamente");
      this.router.navigate(['']);
    })
  }
}
