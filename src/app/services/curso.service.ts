import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private httpHeaders = new HttpHeaders({'Conten-Type': 'application/json'});
  private cursoUrl: string = 'http://localhost:9090/cursos';//endpoint
  constructor(private http: HttpClient) { }

  getCursos():Observable<Curso[]>{
    return this.http.get<Curso[]>(this.cursoUrl+'/all');
  }
  getCurso(id:number):Observable<Curso[]> {
    return this.http.get<Curso[]>(this.cursoUrl+'/'+id);
  }
  addCurso(curso: Curso): Observable<number>{
    return this.http.post<number>(this.cursoUrl+"/add", curso, {headers:this.httpHeaders});
  }

  deleteCurso(curso: Curso) {
    return this.http.delete(this.cursoUrl+'/delete/'+curso.ID_CURSO);
  }

  updateCurso(curso: Curso) {
    return this.http.put(`${this.cursoUrl}/update/`, curso);
  }

}
