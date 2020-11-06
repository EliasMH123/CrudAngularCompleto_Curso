import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCursoComponent } from './components/cursos/add-curso/add-curso.component';
import { ListarCursoComponent } from './components/cursos/listar-curso/listar-curso.component';
import { UpdateCursoComponent } from './components/cursos/update-curso/update-curso.component';

const ROUTES: Routes = [
  { path: 'listar', component: ListarCursoComponent},
  { path: "curso/add", component: AddCursoComponent },
  { path: "editar/:id", component: UpdateCursoComponent }
  /*
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home" }*/
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
