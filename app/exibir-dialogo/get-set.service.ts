import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetSetService {


  getDialogo(): string{
    return this.resultado

  }

  setDialogo(dialogo: string){
     this.resultado = dialogo

  }

  resultado!: string

}
