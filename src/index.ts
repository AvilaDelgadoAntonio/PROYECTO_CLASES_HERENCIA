import { menuPral } from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'
import { Vivienda } from './../classes/vivienda';
import { Piso } from './../classes/piso';
import { Chalet } from './../classes/chalet';

const main = async () => {
    let n: number
    let n1: number
    let f1: string
    let j1: string
    let casa: Vivienda ;   
    let apartamento: Piso;
    let casa_campo: Chalet;
    let seleccionado: string | any;
    let viviendas: Array<Vivienda > = new Array<Vivienda >();
    do {

        n = await menuPral()
        switch(n){
            case 1:
                console.log(`Está en opción 1, PRECIO INICIAL DE UNA NUEVA VIVIENDA`)
                seleccionado =  await leerTeclado('Teclee 1 para CASA BÁSICA, 2 para PISO, 3 para CHALET')                
                if (seleccionado == 1)
                    {console.log(`Ha elegido una CASA BÁSICA`)
                    casa = new Vivienda (75000, 2);                    
                    console.log(`Número habitaciones (NOTA: si es mayor de 5, 20% más), la cantidad base es: ${casa.cantidadHabitaciones}`);
                    console.log(`Precio base (incluyendo las 2 habitaciones sin coste adicional): ${casa.precioInicial}`);
                    console.log(`Precio final: ${casa.precio()}`); }                
                else
                    {if (seleccionado == 2)
                        {console.log(`Ha elegido un PISO`)
                        apartamento = new Piso (950000, 3, 'abierta');                    
                        console.log(`Número habitaciones (NOTA: si es mayor de 5, 20% más), la cantidad base es: ${apartamento.cantidadHabitaciones}`);
                        console.log(`Terraza (NOTA: si es con cerramiento, 10 % más), la modalidad de terraza base es: ${apartamento.terraza}`);
                        console.log(`Precio base PISO (incluyendo 3 habitaciones y terraza abierta sin coste adicional): ${apartamento.precioInicial}`);
                        console.log(`Precio piso final: ${apartamento.precio()}`);}                        
                        else
                        {console.log(`Ha elegido un CHALET`)
                        casa_campo = new Chalet (2050000, 4, 'cesped');                    
                        console.log(`Número habitaciones (NOTA: si es mayor de 5, 20% más), la cantidad base es: ${casa_campo.cantidadHabitaciones}`);
                        console.log(`Jardín (NOTA: si es con losetas, 30 % más), la modalidad de jardín base es: ${casa_campo.zonaAjardinada}`);
                        console.log(`Precio base CHALET (incluyendo 4 habitaciones y jardín de césped sin coste adicional): ${casa_campo.precioInicial}`);
                        console.log(`Precio piso final: ${casa_campo.precio()}`);}}                                          
            break
            case 2:
                console.log(`Está en opción 2, COMPARADOR DE VIVIENDAS (PISO vs CASA vs CHALET)`)
                n1 =  parseInt( await leerTeclado('Indicar el número de habitaciones deseadas'))
                f1 =  await leerTeclado('Escriba si desea terraza ABIERTA o CERRAMIENTO (Solo en caso de PISOS)')
                j1 =  await leerTeclado('Escriba si desea jardín con CÉSPED o LOSETAS (Solo en caso de CHALETS)')

                // Podemos asignar tanto Viviendas como Pisos y Chalets
                viviendas[0] = new Piso (95000, n1, f1);
                viviendas[1] = new Vivienda (75000, n1);
                viviendas[2] = new Chalet (205000, n1, j1);
                // recorremos el array 
                // Esto es un caso de polimorfismo, pues la variable a puede ser de cualquiera de los tipos 
            for (let a of viviendas) {
                if (a instanceof Piso == true) {
                      //En caso de PISO
                    console.log(`${a.completo()}, precio final: ${a.precio()}`);}
                else{
                        if (a instanceof Piso == false) {
                           //En caso de CASA
                            console.log(`${a.completo()}, precio final: ${a.precio()}`);}
                        else{
                            //En caso de CHALET
                            console.log(`${a.completo()}, precio final: ${a.precio()}`);}}}
            break
            case 3:
                console.log(`Está en opción 3, LISTAR CONFIGURACIONES DE VIVIENDAS CREADAS`)
                console.log(`Lista de cada vivienda`)
                console.log(viviendas);

                break
            case 4:
                console.log(`Está en opción 4, MODIFICADOR DE NÚMERO DE HABITACIONES`)
                n1 =  parseInt( await leerTeclado('Indicar el nuevo número de habitaciones')) 
                console.log(`En caso de PISO`);
                viviendas[0]._cantidadHabitaciones = n1
                console.log(`${viviendas[0].completo()}, precio final: ${viviendas[0].precio()}`);
                console.log(`En caso de CASA`);
                viviendas[1]._cantidadHabitaciones = n1
                console.log(`${viviendas[1].completo()}, precio final: ${viviendas[1].precio()}`);
                console.log(`En caso de CHALET`);
                viviendas[2]._cantidadHabitaciones = n1
                console.log(`${viviendas[2].completo()}, precio final: ${viviendas[2].precio()}`);               
            break 
            case 5:
                console.log(`Está en opción 5, VER DATOS DE VIVIENDA CONCRETA`)                    
                let datos_piso = viviendas[0];
                let datos_casa = viviendas[1];
                let datos_chalet = viviendas[2];
                seleccionado =  await leerTeclado('Teclee 1 para ver datos de PISO, 2 para CASA o 3 para CHALET')
                if (seleccionado == 1)
                    {console.log(`Abajo están todos los datos del PISO que ha configurado`)
                    console.log(`${datos_piso.completo()}, precio final: ${datos_piso.precio()}`);}                
                else
                    {if (seleccionado == 2)
                        {console.log(`Abajo están todos los datos de la CASA que ha configurado`)
                        console.log(`${datos_casa.completo()}, precio final: ${datos_casa.precio()}`);}                    
                    else
                        {console.log(`Abajo están todos los datos del CHALET que ha configurado`)
                        console.log(`${datos_chalet.completo()}, precio final: ${datos_chalet.precio()}`);}}
            break
            case 6:
                    console.log(`Está en opción 6, BORRAR VIVIENDA DE LA LISTA CREADA`)  
                    seleccionado =  await leerTeclado('Teclee 1 para borrar PISO, 2 para borrar CASA o 3 para CHALET')
                    
                    if (seleccionado == 1)
                    {
                        console.log(`Ha elegido borrar el PISO`)
                        viviendas.splice( 0, 1);
                    }
                    else
                    {
                        if (seleccionado == 2)
                        {
                            console.log(`Ha elegido borrar la CASA`)
                            viviendas.splice( 1, 2);    
                        }
                        else
                        {
                        console.log(`Ha elegido borrar el CHALET`)
                        viviendas.splice( 2, 3);
                        }
                    }
            break
            case 0:
            break
            default:
                console.log("Opción incorrecta, introduzca solo las opciones del menú")
                break}
    }while (n != 0)
}
main()