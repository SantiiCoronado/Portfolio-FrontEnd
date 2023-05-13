import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EstudioscrearComponent } from './components/estudios/estudioscrear.component';
import { EstudioseditarComponent } from './components/estudios/estudioseditar.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiosComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ProyectosComponent,
    SkillsComponent,
    SobreMiComponent,
    PortfolioComponent,
    ExperienciaLaboralComponent,
    EstudioscrearComponent,
    EstudioseditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
