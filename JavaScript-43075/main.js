function saludar() {
    alert(
        "Bienvenidos a Jordan Brand, a continuación recibira un listado con todos nuestros productos disponibles."
    );
}

saludar();

// Constructor de productos

class Zapatillas {
    constructor(marca, precio, id) {
        this.marca = marca;
        this.precio = precio;
        this.id = id;
    }
}

const zapatilla1 = new Zapatillas("Air Jordan 5 Retro", 45000, "ID: AJ5");
const zapatilla2 = new Zapatillas("Jordan Delta 3 Low", 55000, "ID: JDL");
const zapatilla3 = new Zapatillas("Jordan Air 200E", 40000, "ID: JAE");
const zapatilla4 = new Zapatillas(
    "Air Jordan Legacy 312 Low",
    50000,
    "ID: AJLL"
);
const zapatilla5 = new Zapatillas("Air Jordan 1 KO", 35000, "ID: JKO");
const zapatilla6 = new Zapatillas("Air Jordan 11 Retro", 55000, "ID: AJ11");
const zapatilla7 = new Zapatillas("Air Jordan XXXVII", 45000, "ID: JVII");
const zapatilla8 = new Zapatillas("Jordan Jumpman Two Trey", 65000, "ID: JJTT");
const zapatilla9 = new Zapatillas("Jordan Series Mind", 35000, "ID: JSM");
const zapatilla10 = new Zapatillas("Air Jordan 12 Retro", 60000, "ID: AJ12");

const arrayZapatillas = [];

arrayZapatillas.push(zapatilla1);
arrayZapatillas.push(zapatilla2);
arrayZapatillas.push(zapatilla3);
arrayZapatillas.push(zapatilla4);
arrayZapatillas.push(zapatilla5);
arrayZapatillas.push(zapatilla6);
arrayZapatillas.push(zapatilla7);
arrayZapatillas.push(zapatilla8);
arrayZapatillas.push(zapatilla9);
arrayZapatillas.push(zapatilla10);

// Recorrer el arreglo de objetos

let mensaje = "Los productos disponibles son: \n";
arrayZapatillas.forEach((zapatilla1) => {
    mensaje = mensaje + `${zapatilla1.marca}: $${zapatilla1.precio}\n`;
});
alert(mensaje);

let compra = prompt("Si desea comprar algún producto escriba 'SI'");

if (compra == "SI") {
    let mensaje = "A continuación escriba el ID del producto que desea \n";
    arrayZapatillas.forEach((zapatilla1) => {
        mensaje =
            mensaje +
            `${zapatilla1.marca}: $${zapatilla1.precio} - ${zapatilla1.id}\n`;
    });
    prompt(mensaje);
    alert("Agregamos el producto al carrito.");
} else {
    alert("Gracias por si visita.");
}
