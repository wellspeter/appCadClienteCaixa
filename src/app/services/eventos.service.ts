import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eventos } from '../models/Eventos'

interface EventosResponse{
  EventosRetorno: Array<any>;
}

@Injectable({
  providedIn: 'root'
})

export class EventosService {

  private API_EVENTOS = 'https://appcaixacad.herokuapp.com/eventos/getall'

  constructor(private http: HttpClient) { 
  }

  public getEventos():Observable<Eventos[]>{
    return this.http.get<Eventos[]>(this.API_EVENTOS);
  }

}
