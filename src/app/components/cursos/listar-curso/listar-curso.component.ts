import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.css']
})
export class ListarCursoComponent implements OnInit {
  cursos:any;

  constructor(private cursoService:CursoService, private router: Router) { }
  ngOnInit(): void {
    this.listar();
    }
  delCurso(num:number):void{
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras reverti esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.cursoService.deleteCurso(num).subscribe(
              response=>{
            this.listar()
            Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado.',
              'success'
            )})
          }
          }
        )   
  }
  listar():void{
    this.cursoService.getCursos().subscribe(
      (data)=>{
        this.cursos = data['cursor_cursos'];
      }
    ) 
  }

}