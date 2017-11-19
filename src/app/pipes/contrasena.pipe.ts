import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = true): any {
    if(!mostrar){
      return value;
    }else{
      let retorno = "";
      for(let i = 0; i<value.length; i++){
        retorno = retorno + "*"
      }
      return retorno;
    }
  }

}
