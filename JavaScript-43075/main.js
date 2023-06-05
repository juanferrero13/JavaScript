let titulo = document.getElementById("title");
titulo.className = "titulo";

// // Constructor de productos

class Zapatillas {
    constructor(objeto, marca, precio) {
        this.objeto = objeto;
        this.marca = marca;
        this.precio = precio;
    }
}

const zapatilla1 = new Zapatillas("./img/jordan1.webp", "Jordan Delta 3 Low", 55000);
const zapatilla2 = new Zapatillas("./img/jordan2.webp", "Air Jordan 5 Mix", 45000);
const zapatilla3 = new Zapatillas("./img/jordan3.webp", "Jordan Air 200E", 40000);
const zapatilla4 = new Zapatillas("./img/jordan4.webp", "Jordan Legacy 312 Low", 50000);
const zapatilla5 = new Zapatillas("./img/jordan5.webp", "Air Jordan 1 KO", 35000);
const zapatilla6 = new Zapatillas("./img/jordan6.webp", "Air Jordan 11", 55000);
const zapatilla7 = new Zapatillas("./img/jordan7.webp", "Air Jordan XXXVII", 45000);
const zapatilla8 = new Zapatillas("./img/jordan8.webp", "Jumpman Two Trey", 65000);
const zapatilla9 = new Zapatillas("./img/jordan9.webp", "Jordan Series Mind", 35000);
const zapatilla10 = new Zapatillas("./img/jordan10.webp", "Air Jordan 12", 60000);
const zapatilla11 = new Zapatillas("./img/jordan11.webp", "Air Jordan Max", 65000);
const zapatilla12 = new Zapatillas("./img/jordan12.webp", "Air Jordan 4 Midnight ", 55000);

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
arrayZapatillas.push(zapatilla11);
arrayZapatillas.push(zapatilla12);


arrayZapatillas.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <img src="${item.objeto}" alt="" width="250px">
    <p>${item.marca}</p>
    <b>$${item.precio}</b>
    <br>
    <button id="boton" class="productos-button">COMPRAR</button>
    `;
    
    container.append(div);
    div.classList.add('productos');
    
    let boton = document.getElementById("boton");

    boton.addEventListener("click", () => { 
        console.log("Agregar al Carrrito");
    })

})

let contenedor = document.getElementById("container");
contenedor.className = "container";

