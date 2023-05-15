import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EstudioscrearComponent } from './components/estudios/estudioscrear.component';
import { EstudioseditarComponent } from './components/estudios/estudioseditar.component';
import { SobreMieditarComponent } from './components/sobre-mi/sobre-mieditar.component';
import { ExperienciaLaboralcrearComponent } from './components/experiencia-laboral/experiencia-laboralcrear.component';
import { ExperienciaLaboraleditarComponent } from './components/experiencia-laboral/experiencia-laboraleditar.component';
import { SkillscrearComponent } from './components/skills/skillscrear.component';
import { ProyectoscrearComponent } from './components/proyectos/proyectoscrear.component';
import { ProyectoseditarComponent } from './components/proyectos/proyectoseditar.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {path:'portfolio', component: PortfolioComponent, canActivate:[AuthGuard]},
  {path:'estudioscrear', component: EstudioscrearComponent, canActivate:[AuthGuard]},
  {path:'estudioseditar/:id', component: EstudioseditarComponent, canActivate:[AuthGuard]},
  {path:'sobre-mieditar/:id', component: SobreMieditarComponent, canActivate:[AuthGuard]},
  {path:'experiencia-laboralcrear', component: ExperienciaLaboralcrearComponent, canActivate:[AuthGuard]},
  {path:'experiencia-laboraleditar/:id', component: ExperienciaLaboraleditarComponent, canActivate:[AuthGuard]},
  {path:'skillscrear', component: SkillscrearComponent, canActivate:[AuthGuard]},
  {path:'proyectoscrear', component: ProyectoscrearComponent, canActivate:[AuthGuard]},
  {path:'proyectoseditar/:id', component: ProyectoseditarComponent, canActivate:[AuthGuard]},
  {path:'login', pathMatch: 'full', component: LoginComponent},
  {path:'', pathMatch: 'full',component:PortfolioComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
