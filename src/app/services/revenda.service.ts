import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Revenda } from '../models/Revenda';

interface RevendaResponse{
  RevendaRertorno: Array<any>;
}

@Injectable({
  providedIn: 'root'
})

export class RevendaService {

  private API_REVENDA = 'https://appcaixacad.herokuapp.com/revenda/getall'
  
  constructor(private http: HttpClient) { }

  public getRevendas():Observable<Revenda[]>{
    return this.http.get<Revenda[]>(this.API_REVENDA);
  }
}
