import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoDataService} from '../service/data/producto-data.service';



export class Producto {
  constructor(
  private id: number,
  private producto: string,
  private precio: string,
  private tienda: string,
  private enlace: string,
  private enlaceImg: string){
    
  }
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
    private productoService: ProductoDataService,
    private router: Router

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

  updateProducto(id){
    console.log(`Actualizar producto ${id}`)
    this.router.navigate(['productos', id])
  }
  deleteProducto(id){
    console.log(`Borrar producto ${id}`)
  }
}
