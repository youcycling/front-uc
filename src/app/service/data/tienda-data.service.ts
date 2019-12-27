import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TODO_JPA_API_URL } from '../../app.constants';
import { Tienda } from '../../lista-tiendas/lista-tiendas.component';

@Injectable({
  providedIn: 'root'
})
export class TiendaDataService {

  constructor(
    private http: HttpClient

  ) { }

  retrieveAllTiendas(username){
    return this.http.get<Tienda[]>(`${TODO_JPA_API_URL}/users/${username}/tiendas`);
}
  createTienda(username, tienda){
  return this.http.post(`${TODO_JPA_API_URL}/users/${username}/tiendas`, tienda)
}
  updateTienda(username, id, tienda){
  return this.http.put(`${TODO_JPA_API_URL}/users/${username}/tiendas/${id}`, tienda)
}
  retriveTienda(username, id){
    return this.http.get<Tienda>(`${TODO_JPA_API_URL}/users/${username}/tiendas/${id}`)
  }
  deleteTienda(username, id){
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/tiendas/${id}`)
  }
}
