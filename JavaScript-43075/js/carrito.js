// Veo los productos agregados en el carrito y creo un modal

const pintarCarrito = () => {
    modalContainer.innerHTML = " ";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h3 class="modal-header-title">CARRITO</h3>
    `;

    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h3");
    modalButton.innerHTML = "CERRAR";
    modalButton.className = "modal-header-button";

    modalHeader.append(modalButton);

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none"
    });

    carrito.forEach((prod) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${prod.img}" width="200px">
        <h3>${prod.marca}</h3>
        <b>$${prod.precio}</b>
        <span class="sumar">+</span>
        <b>Cantidad: ${prod.cantidad}</b>
        <span class="restar">-</span>
        <b>Total: $${prod.cantidad * prod.precio}</b>
        `;

        modalContainer.append(carritoContent);

        let sumar = carritoContent.querySelector(".sumar");

        sumar.addEventListener("click", () => {
            prod.cantidad++;
            guardarLocalStorage();
            pintarCarrito();
        });

        let restar = carritoContent.querySelector(".restar");
        
        restar.addEventListener("click", () => {
            if(prod.cantidad !== 1){
                prod.cantidad--;
            }
            guardarLocalStorage();
            pintarCarrito();
        });

        let eliminarProducto = document.createElement("i");
        eliminarProducto.innerText = "Eliminar Producto";
        eliminarProducto.className = "eliminar-producto";
        carritoContent.append(eliminarProducto);

        eliminarProducto.addEventListener("click", borrarProducto);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "modal-total";
    totalCompra.innerHTML = `
    <h3>TOTAL A PAGAR: $${total}</h3>
    `;
    modalContainer.append(totalCompra);
};

verCarrito.addEventListener("click", pintarCarrito);

const borrarProducto = () => {
    const encontrarId = carrito.find((element) => element.id);
    Swal.fire(
        'ATENCIÓN!',
        'El producto se eliminó del carrito!',
        'warning'
    );

    carrito = carrito.filter((carritoId) => {
        return carritoId !== encontrarId;
    });

    carritoContador();
    guardarLocalStorage();
    pintarCarrito();
};

const carritoContador = () => {
    contadorCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    contadorCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}

carritoContador();