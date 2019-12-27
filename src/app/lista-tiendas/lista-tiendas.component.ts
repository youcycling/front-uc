import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaDataService } from '../service/data/tienda-data.service';

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
message: String

  constructor(
    private router: Router,
    private tiendaService: TiendaDataService
    ) { }
  
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

}
