import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Escola } from '../models/escola';

@Injectable({
  providedIn: 'root'
})

export class EscolaService {

  url = 'http://localhost:8080/api/v1/escola';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos as escolas
  getEscolas(): Observable<Escola[]> {
    return this.httpClient.get<Escola[]>(this.url + '/lista')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem uma escola pelo id
  getEscolaById(id: number): Observable<Escola> {
    return this.httpClient.get<Escola>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva uma escola ou atualisa
  saveEscola(escola: Escola): Observable<Escola> {
    return this.httpClient.post<Escola>(this.url + '/create/',  JSON.stringify(escola), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // // utualiza uma escola
  // updateEscola(escola: Escola): Observable<Escola> {
  //   return this.httpClient.put<Escola>(this.url + '/update/' + escola.id, JSON.stringify(escola), this.httpOptions)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     )
  // }

  // deleta uma escola
  deleteEscola(escola: Escola) {
    return this.httpClient.delete<Escola>(this.url + '/' + escola.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
