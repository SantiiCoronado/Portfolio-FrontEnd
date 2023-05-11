import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any;
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.obtenerDatosSkill().subscribe(data=>{
      console.log("Datos de skill"+ JSON.stringify(data));
      this.skills=data;
    }
    );
  }

}
