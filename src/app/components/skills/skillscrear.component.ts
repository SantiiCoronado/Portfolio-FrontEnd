import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skillscrear',
  templateUrl: './skillscrear.component.html',
  styleUrls: ['./skillscrear.component.css']
})
export class SkillscrearComponent implements OnInit {
  skill:string;
  constructor(private portfolioService:PortfolioService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const skill= new Skill(this.skill);
    this.portfolioService.crearSkill(skill).subscribe(data=>{
    }, err=>{
      this.router.navigate(['']);
    })
  }

}
