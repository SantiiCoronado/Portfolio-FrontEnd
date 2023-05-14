import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experiencia-laboralcrear',
  templateUrl: './experiencia-laboralcrear.component.html',
  styleUrls: ['./experiencia-laboralcrear.component.css']
})
export class ExperienciaLaboralcrearComponent implements OnInit {
  empresa:string;
  descripcion:string;
  fechaInicio:Date;
  fechaFin:Date;

  constructor(private portfolioService:PortfolioService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const exp = new ExperienciaLaboral(this.empresa, this.descripcion, this.fechaInicio, this.fechaFin);
    this.portfolioService.crearExperiencia(exp).subscribe(data=>{ 
    }, err=>{
      this.router.navigate(['']);
    })
  }

}
