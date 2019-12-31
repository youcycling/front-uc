import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { IndexComponent } from './index/index.component';
import { TiendaComponent } from './tienda/tienda.component';
import { HeaderComponent } from './header/header.component';
import { ListaTiendasComponent } from './lista-tiendas/lista-tiendas.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ProductoComponent } from './producto/producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductoDataService } from './service/data/producto-data.service';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
    IndexComponent,
    TiendaComponent,
    HeaderComponent,
    ListaTiendasComponent,
    ListaProductosComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [
     {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi:true, providers: [ProductoDataService]  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
