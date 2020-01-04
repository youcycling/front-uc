import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaDataService } from '../service/data/tienda-data.service';
import {Sort} from '@angular/material/sort';
import {PageEvent} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


export class Tienda{
  constructor(
    public id: number, 
    public nombre: string,
    public ubicacion: string,
    public done: boolean, 
    public targetDate: Date,
    public username:string,
    public descripcion:string
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
// MatPaginator Inputs
//length = 100;
//pageSize = 10;
//pageSizeOptions: number[] = [5, 10, 25, 100];

// MatPaginator Output
pageEvent: PageEvent;
//dataSource: Tienda[]

displayedColumns: string[] = ['nombre', 'ubicacion', 'descripcion', 'fecha', 'realizado', 'actualizar', 'eliminar'];
dataSource = new MatTableDataSource<Tienda>();
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;



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
        //this.dataSource = response
        this.dataSource = new MatTableDataSource<Tienda>(this.tiendas)
        this.dataSource.paginator = this.paginator;  
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
        case 'nombre': return compare(a.nombre, b.nombre, isAsc);
        case 'ubicacion': return compare(a.ubicacion, b.ubicacion, isAsc);
        case 'descripcion': return compare(a.descripcion, b.descripcion, isAsc);
        default: return 0;
      }
    });
    console.log("Ordena")
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

//const ELEMENT_DATA: Tienda[] = [
// {id: 1, nombre: '1', ubicacion: 'Hydrogen',done: YES, descripcion: '1.0079', fecha: 'H', realizado:'si'}]