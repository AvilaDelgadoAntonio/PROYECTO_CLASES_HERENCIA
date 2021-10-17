import { Vivienda } from './vivienda';
export class Chalet extends Vivienda {
  private _zonaAjardinada: string;
  constructor(precioInicial: number, cantidadHabitaciones: number, zonaAjardinada: string) {
    super(precioInicial, cantidadHabitaciones);
    this._zonaAjardinada = zonaAjardinada;
    
  }
  get zonaAjardinada() {
    return this._zonaAjardinada
  }

  // sobre escribimos aquí también el método (proceso de overwriting o overloading)
  precio(): number {
    let precio: number;
    precio = super.precio();
    if (this._zonaAjardinada == 'LOSETAS') {
      precio += 0.3 * precio;
    }
    return precio
  }

  completo(){
    let resultado: string
    resultado = `${super.completo()}, zonaAjardinada: ${this._zonaAjardinada}`
    return resultado
  }
}
