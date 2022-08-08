import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listaProspectos } from 'src/app/modelos/listaProspectos.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { prospectoUnitario } from 'src/app/modelos/prospectoUnitario.interface';
import { ResponseI } from 'src/app/modelos/ResponseI.interface';
import { Imagen } from 'src/app/modelos/Imagen.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<listaProspectos[]>{
    return this.http.get<listaProspectos[]>('/api/prospectos');
  }

  getSingleProspecto(idempleado:any): Observable<prospectoUnitario>{
    return this.http.get<prospectoUnitario>('/api/prospectos');
  }

  postProspecto(form:prospectoUnitario): Observable<ResponseI>{
    return this.http.post<ResponseI>('/api/prospectos', form);
  }

  putProspecto(form:prospectoUnitario): Observable<ResponseI>{
    return this.http.put<ResponseI>('/api/prospectos', form);
  }

  postImagen(form:Imagen): Observable<ResponseI>{
    return this.http.post<ResponseI>('/api/documentos', form)
  }

}
