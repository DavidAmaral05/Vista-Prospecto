import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './vistas/lista/lista.component';
import { CapturaComponent } from './vistas/captura/captura.component';
import { EvaluacionComponent } from './vistas/evaluacion/evaluacion.component';
import { MostrarComponent } from './vistas/mostrar/mostrar.component';

const routes: Routes = [
  {path:'', redirectTo:'lista', pathMatch: 'full'},
  {path:'lista', component:ListaComponent},
  {path:'captura', component:CapturaComponent},
  {path:'evaluacion', component:EvaluacionComponent},
  {path:'mostrar/:id', component:MostrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =  [ListaComponent, CapturaComponent, EvaluacionComponent]