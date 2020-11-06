import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {
  constructor(private cursoService:CursoService,private router: Router) { }
  

  ngOnInit(): void {
  }
  cursoModel:Curso = new Curso();
  onSubmit(){

  }
  public create():void{
    this.cursoService.addCurso(this.cursoModel).subscribe(
      response=>this.router.navigate(['/curso'])
    )
}
}
