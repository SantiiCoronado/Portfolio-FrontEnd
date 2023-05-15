import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-proyectoseditar',
  templateUrl: './proyectoseditar.component.html',
  styleUrls: ['./proyectoseditar.component.css']
})
export class ProyectoseditarComponent implements OnInit {
  proyecto:Proyecto;
  constructor(private portfolioService:PortfolioService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.portfolioService.obtenerProyecto(id).subscribe(data=>{
      this.proyecto=data;
    })
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id']; 
    this.portfolioService.editarProyecto(id, this.proyecto).subscribe(data=>{
      this.router.navigate(['']);
    }, err=>{
      alert("Error al modificar el proyecto");
      this.router.navigate([''])
    })
  }

}
