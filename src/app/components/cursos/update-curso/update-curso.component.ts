import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-curso',
  templateUrl: './update-curso.component.html',
  styleUrls: ['./update-curso.component.css']
})
export class UpdateCursoComponent implements OnInit {
  cursos: any;  
  curso:Curso=new Curso();
  constructor(private cursoService:CursoService,
    private router: Router, private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    console.log("log")
    this.cargarCurso();
  }
  cargarCurso():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.cursoService.getCurso(id).subscribe(
          (data)=>{
          this.cursos=data['cursor_cursos'] 
          this.curso.nombre=this.cursos[0].NOMBRE;
          this.curso.cr=this.cursos[0].CR;
          this.curso.ht=this.cursos[0].HT;
          this.curso.hp=this.cursos[0].HP;
          this.curso.id_curso=id
        })
      }
    })
  }
  modificarCurso():void{
    this.cursoService.updateCurso(this.curso).subscribe(
      response=>{
        console.log(this.curso)
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, update it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/listar'])
            Swal.fire(
              'Actualizado!',
              'El registro ha sido Modificado.',
              'success'
            )
          }
        })    
    })
  }
}
