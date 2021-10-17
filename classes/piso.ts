import { Vivienda } from './vivienda';
export class Piso extends Vivienda {
  private _terraza: string;
  constructor(precioInicial: number, cantidadHabitaciones: number, terraza: string) {
    super(precioInicial, cantidadHabitaciones);
    this._terraza = terraza;
    
  }
  get terraza() {
    return this._terraza
  }

  // sobre escribimos el método (proceso de overwriting o overloading)
  precio(): number {
    let precio: number;
    precio = super.precio();
    if (this._terraza == 'CERRAMIENTO') {
      precio += 0.1 * precio;
    }
    return precio
  }

  completo(){
    let resultado: string
    resultado = `${super.completo()}, terraza: ${this._terraza}`
    return resultado
  }
}
