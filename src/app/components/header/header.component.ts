import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links = [
    'Sobre Mi',
    'Estudios', 
    'Hard & Soft Skills',
    'Proyectos',
    'Contacto'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
