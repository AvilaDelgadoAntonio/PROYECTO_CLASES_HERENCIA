export class Vivienda {
  private _precioInicial: number; 
  _cantidadHabitaciones: number;
  constructor(precioInicial: number, cantidadHabitaciones: number) {
    this._precioInicial = precioInicial;
    this._cantidadHabitaciones = cantidadHabitaciones;
  }
  get precioInicial() {
    return this._precioInicial;
  }
  get cantidadHabitaciones() {
    return this._cantidadHabitaciones;
  }
  precio(): number {
    let precio: number;
    precio = this._precioInicial;
    if (this._cantidadHabitaciones > 4) {
      precio += 0.2 * precio;
    }
    return precio;
  }


  completo() {
    return `Precio inicial: ${this._precioInicial}, número de habitaciones: ${this._cantidadHabitaciones}`;
  }
}
