import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let seleccionado: number
    console.log('\n')
    console.log('1.- Precio base de nueva vivienda')
    console.log('2.- Comparador de viviendas (PISO vs CASA vs CHALET)')
    console.log('3.- Listar configuraciones de viviendas creadas')
    console.log('4.- Modificar número de habitaciones')
    console.log('5.- Ver los datos de una vivienda concreta')
    console.log('6.- Borrar vivienda del la lista creada')
    console.log('0.- Salir')
    seleccionado = parseInt( await leerTeclado('opción ') )
    return seleccionado
}