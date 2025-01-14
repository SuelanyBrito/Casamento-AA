import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCasamentoComponent } from './pages/lista-casamento/lista-casamento.component';

const routes: Routes = [
  {path:'', component:ListaCasamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
