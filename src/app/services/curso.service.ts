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
  getCurso(id:number):Observable<Object> {
    return this.http.get(`${this.cursoUrl}/${id}`);
  }
  addCurso(curso:Curso): Observable<number>{
    return this.http.post<number>(this.cursoUrl+"/add", curso, {headers:this.httpHeaders});
  }

  deleteCurso(id:number): Observable<number>{
    return this.http.delete<number>(this.cursoUrl+"/delete/"+id,{headers:this.httpHeaders});
  }

  updateCurso(curso: Curso):Observable<number>{
    return this.http.put<number>(`${this.cursoUrl}/update/${curso.id_curso}`, curso,{headers:this.httpHeaders});
  }

}
