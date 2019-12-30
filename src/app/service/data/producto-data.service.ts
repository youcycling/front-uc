import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TODO_JPA_API_URL } from '../../app.constants';
import { Producto } from '../../lista-productos/lista-productos.component';

@Injectable(
  {
  providedIn: 'root'
}
)
export class ProductoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllProductos(){
    return this.http.get<Producto[]>(`${TODO_JPA_API_URL}/users/productos`);
}
}