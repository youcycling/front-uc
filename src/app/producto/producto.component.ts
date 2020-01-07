import { Component, OnInit } from '@angular/core';
import { Producto } from '../lista-productos/lista-productos.component';
import { ActivatedRoute} from '@angular/router';
import { ProductoDataService} from '../service/data/producto-data.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  id:number
  producto: Producto
  constructor(
    private route: ActivatedRoute, 
    private productoService: ProductoDataService

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.producto = new Producto(this.id, '', '','', '');
    if (this.id != -1) {
      this.productoService.retriveProducto(this.id).subscribe(
        data => {
          this.producto = data
          console.log(data)
        }
      )
    }
  }

}
