import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios:any

  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.obtenerDatosEstudio().subscribe(data=>{
      console.log("Datos de estudio"+ JSON.stringify(data));
      this.estudios=data;
    }
    );
  }

}
