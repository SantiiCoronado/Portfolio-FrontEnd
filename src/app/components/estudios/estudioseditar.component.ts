import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/models/estudio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-estudioseditar',
  templateUrl: './estudioseditar.component.html',
  styleUrls: ['./estudioseditar.component.css']
})
export class EstudioseditarComponent implements OnInit {

  estudio:Estudio;
  constructor(private portfolioService:PortfolioService, private route:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.portfolioService.obtenerEstudio(id).subscribe(data=>{
      console.log("Datos de estudio"+ JSON.stringify(data));
      this.estudio=data;
    }
    );
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.portfolioService.editarEstudio(id, this.estudio).subscribe(data=>{
      alert("Modificacion realizada correctamente");
      this.route.navigate(['']);
    }, err =>{
      alert("Error al modificar el estudio")
      this.route.navigate(['']);
    })

  }
}
