import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

import { AppComponent } from './app.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID , useValue: 'es'},
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
