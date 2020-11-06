import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.css']
})
export class ListarCursoComponent implements OnInit {
  cursos:Curso[];
  constructor(private cursoService:CursoService) { }

  ngOnInit(): void {
    //var data = this.cursos;
    this.cursoService.getCursos().subscribe(
      (data) => {
      this.cursos= data['cursor_cursos'];
      console.log(this.cursos)
    }
    )
  }
  delRol(num:number):void{
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    )
  }


}
