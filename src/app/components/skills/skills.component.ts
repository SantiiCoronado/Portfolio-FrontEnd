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
    this.cargarSkills();
  }

  cargarSkills():void{
    this.portfolioService.obtenerDatosSkill().subscribe(data=>{
      this.skills=data;
    });
  }

  delete(id:number):void{
    if(id != undefined){
      this.portfolioService.eliminarSkill(id).subscribe(data=>{
      }, err=>{
        this.cargarSkills();
      })
    }
  }

}
