class Autos {
    constructor(modelo, marca, km, precio) {
        this.modelo = modelo;
        this.marca = marca;
        this.km = km;
        this.precio = precio;
    }
}

const autoUno = new Autos ("Yaris", "Toyota", 30000, 5000000);
const autoDos = new Autos ("Gol Trend", "Volkswagen", 200000, 2500000);
const autoTres = new Autos ("Uno", "Fiat", 300000, 2000000) ;
const autoCuatro = new Autos ("Ecosport", "Ford", 50000, 4500000);

const arrayAutos = [autoUno,autoDos,autoTres,autoCuatro];

console.log(arrayAutos);

arrayAutos.forEach((mostraAutos) => {
    console.log(mostraAutos);
})

function menu() {
    alert("Bienvenidos a la concesionaria de autos Coder");
    let opciones = parseFloat(prompt("Ingrese una opción: \n1)Vender un auto \n2)Comprar un auto \n3)Ver stock \n4)Salir"));
    return opciones;
}

function venderAuto () {
    let modelo = prompt("Ingrese el modelo del auto: ");
    let marca = prompt("Ingrese marca del auto: ");
    let km = parseInt(prompt("Ingrese kilometraje de su vehiculo a vender: "));
    let precio = parseInt(prompt("Indique por cuanto quiere vender su vehiculo: "));
    let auto = new Autos(modelo, marca, km, precio);
    arrayAutos.push(auto);
    console.log(arrayAutos);
}

function comprarAuto () {
    let modelo = prompt("Ingrese el modelo del auto que quiere comprar: ");
    let auto = arrayAutos.find(auto => auto.modelo === modelo);
    let indice = arrayAutos.indexOf(auto);
    arrayAutos.splice(indice, 1);
    console.log(arrayAutos);
}

function verStock () {
    let modelo = prompt("Ingrese el modelo del auto que quiere buscar: ");
    let auto = arrayAutos.find(auto => auto.modelo === modelo);
    console.log(auto);
}

function salir () { 
    alert("Gracias por su visita");
}

let opciones = menu();

switch(opciones){
    case 1:
        venderAuto();
        break;
    case 2:
        comprarAuto();
        break;
    case 3:
        verStock();
        break;
    case 4:
        salir();
        break;
    default:
        alert("Opción incorrecta");
        break;
}