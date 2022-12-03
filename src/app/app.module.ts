import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasModule } from './components/personas/personas.module';
import { SitiosModule } from './components/sitios/sitios.module';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SharedComponent } from './components/shared/shared.component';
import { NavMenuComponent } from './components/shared/nav-menu/nav-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    SharedComponent,
    NavMenuComponent, 
  ],
  imports: [
    BrowserModule,
    SitiosModule,
    PersonasModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
