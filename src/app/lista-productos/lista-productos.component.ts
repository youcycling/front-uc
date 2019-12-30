import { Component, OnInit } from '@angular/core';
import { ProductoDataService} from '../service/data/producto-data.service';
import { TiendaDataService } from '../service/data/tienda-data.service';


export class Producto {
  private id: number
  private producto: string
  private precio: string
  private tienda: string
  private enlace: string
  private enlaceImg: string
}


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[]
  message: string

  constructor(
    private productoService: ProductoDataService

  ) { }

  ngOnInit() {
    this.refreshProductos()
  }


  refreshProductos(){
    this.productoService.retrieveAllProductos().subscribe(
      response =>{
        console.log(response)
        console.log('recuperar productos')
        this.productos = response
      }
    )

    
  }
}
