import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Alvaro";
  completo = "alvaro De dios Garcia";
  arreglo = [1,2,3,4,5,6,7,8,9];
  pi = Math.PI;
  numero = 0.23;
  salario=2345;
  heroe = {
    nombre: 'Logan',
    clave: 54,
    edad: 25,
    direccion:{
      calle:'Cualquiera',
      numero:22
    }
  }
  valorPromesa = new Promise( (resolve, reject ) =>{
      setTimeout(()=> resolve("llego la data"), 3500);
  });
  fecha = new  Date();
  video = "90NmL7bFE00";
  activar = true;
}
