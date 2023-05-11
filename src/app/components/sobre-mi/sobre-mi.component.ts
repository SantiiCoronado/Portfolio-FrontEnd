import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  personas:any;
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.obtenerDatosPersona().subscribe(data=>{
        console.log("Datos personales"+ JSON.stringify(data));
        this.personas=data[0];
      }
    );
  }

}
