import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { IndexComponent } from './index/index.component';
import { ListaTiendasComponent } from './lista-tiendas/lista-tiendas.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductoComponent } from './producto/producto.component';

//welcome
const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'login', component:LoginComponent},
  {path:'welcome/:name', component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'productos', component:ListaProductosComponent, canActivate:[RouteGuardService]},
  {path:'tiendas', component:ListaTiendasComponent, canActivate:[RouteGuardService]},
  {path:'todos', component:ListTodosComponent, canActivate:[RouteGuardService]},
  {path:'logout', component:LogoutComponent, canActivate:[RouteGuardService]},
  {path:'todos/:id', component:TodoComponent , canActivate:[RouteGuardService]},
  {path:'tiendas/:id', component:TiendaComponent , canActivate:[RouteGuardService]},
  {path:'productos/:id', component:ProductoComponent , canActivate:[RouteGuardService]},
  {path:'index', component:IndexComponent , canActivate:[RouteGuardService]},
  {path:'**', component:ErrorComponent, canActivate:[RouteGuardService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
