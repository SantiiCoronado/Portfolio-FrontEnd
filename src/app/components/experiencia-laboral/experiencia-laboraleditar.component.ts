import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experiencia-laboraleditar',
  templateUrl: './experiencia-laboraleditar.component.html',
  styleUrls: ['./experiencia-laboraleditar.component.css']
})
export class ExperienciaLaboraleditarComponent implements OnInit {
  experiencia:ExperienciaLaboral;
  constructor(private portfolioService:PortfolioService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.portfolioService.obtenerExperiencia(id).subscribe(data=>{
      this.experiencia=data;
    });
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.portfolioService.editarExperiencia(id, this.experiencia).subscribe(data=>{
      this.router.navigate(['']);
    }, err=>{
      alert("Error en la modificacion")
      this.router.navigate([''])
    })
  }
}
