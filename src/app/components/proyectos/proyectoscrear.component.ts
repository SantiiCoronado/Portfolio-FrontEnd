import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-proyectoscrear',
  templateUrl: './proyectoscrear.component.html',
  styleUrls: ['./proyectoscrear.component.css']
})
export class ProyectoscrearComponent implements OnInit {
  nombre:string;
  descripcion:string;
  urlFoto:string;
  constructor(private portfolioService:PortfolioService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proyecto = new Proyecto(this.nombre, this.descripcion, this.urlFoto);
    this.portfolioService.crearProyecto(proyecto).subscribe(data=>{

    }, err =>{
      this.router.navigate(['']);
    })
  }
}
