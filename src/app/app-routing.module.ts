import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EstudioscrearComponent } from './components/estudios/estudioscrear.component';
import { EstudioseditarComponent } from './components/estudios/estudioseditar.component';
import { SobreMieditarComponent } from './components/sobre-mi/sobre-mieditar.component';

const routes: Routes = [
  {path:'portfolio', component: PortfolioComponent},
  {path:'estudioscrear', component: EstudioscrearComponent},
  {path:'estudioseditar/:id', component: EstudioseditarComponent},
  {path:'sobre-mieditar/:id', component: SobreMieditarComponent},
  {path:'login', component: LoginComponent},
  {path:'', redirectTo: 'portfolio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
