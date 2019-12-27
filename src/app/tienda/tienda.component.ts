import { Component, OnInit } from '@angular/core';
import { Tienda } from '../lista-tiendas/lista-tiendas.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaDataService } from '../service/data/tienda-data.service';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  id: number
  tienda: Tienda
  constructor(
    private route: ActivatedRoute,
    private tiendaService: TiendaDataService,
    private router: Router
  

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.tienda = new Tienda(this.id, '', '', false, new Date(),'');
    if (this.id != -1) {
      this.tiendaService.retriveTienda('Alan',this.id).subscribe(
        data => {
          this.tienda = data
          //console.log(data)
        }
      )
    }
  }

  saveTienda(){
    console.log(`Add Tienda ${this.id}`);  
    if(this.id==-1){
        this.tiendaService.createTienda("Alan",this.tienda).subscribe(data => {
          //console.log(data)
          this.router.navigate(['tiendas'])
        })
    }else{
      this.tiendaService.updateTienda('Alan',this.id, this.tienda).subscribe(
        response => {
          this.router.navigate(['tiendas'])
        }
      )
    }
  }
}
