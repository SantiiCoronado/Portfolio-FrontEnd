import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-sobre-mieditar',
  templateUrl: './sobre-mieditar.component.html',
  styleUrls: ['./sobre-mieditar.component.css']
})
export class SobreMieditarComponent implements OnInit {
  persona:Persona;

  constructor(private portfolioService:PortfolioService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.portfolioService.obtenerDatosPersona().subscribe(data=>{
      this.persona=data[0];
    })
  }


  onUpdate(): void{
    this.portfolioService.editarPersona(this.persona).subscribe(data=>{
      alert("Modificacion realizada correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar")
      this.router.navigate(['']);
    })

  }
}
