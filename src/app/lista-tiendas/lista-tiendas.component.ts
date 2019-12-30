import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaDataService } from '../service/data/tienda-data.service';
import {Sort} from '@angular/material/sort';

export class Tienda{
  constructor(
    public id: number, 
    public nombre: string,
    public ubicacion: string,
    public done: boolean, 
    public targetDate: Date,
    public username:string
  ){

  }
}

@Component({
  selector: 'app-lista-tiendas',
  templateUrl: './lista-tiendas.component.html',
  styleUrls: ['./lista-tiendas.component.css']
})

export class ListaTiendasComponent implements OnInit {

tiendas: Tienda[]
sortedTienda: Tienda[]
message: String

  constructor(
    private router: Router,
    private tiendaService: TiendaDataService
    ) { 
          //this.sortedTienda = this.tiendas.slice();
      }
  
  ngOnInit() {
    this.refreshTiendas()
  }
  refreshTiendas(){
    this.tiendaService.retrieveAllTiendas('Alan').subscribe(
      response => {
        //console.log(response);
        this.tiendas = response;
      }
    )

  }
  addTienda(){
    //console.log("Añadir Tienda")
    this.router.navigate(['tiendas', -1])
  }
  updateTienda(id){
      //console.log(`Actualizar Tienda ${id}`);
      this.router.navigate(['tiendas', id])

  }
  deleteTienda(id){
    //console.log(`Borrar Tienda ${id}`);
    this.tiendaService.deleteTienda('Alan',id).subscribe(
      response =>{
      this.message = `Tienda borrada correctamente: ${id}`
      this.refreshTiendas()
      }
    )
      
  }

  sortData(sort: Sort) {
    const data = this.tiendas.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedTienda = data;
      return;
    }

    this.sortedTienda = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'nombre': return compare(a.nombre, b.nombre, isAsc);
        case 'ubicacion': return compare(a.ubicacion, b.ubicacion, isAsc);
        default: return 0;
      }
    });
    console.log("Ordena")
  }

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}