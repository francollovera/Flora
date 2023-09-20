let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.getElementById("carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("total");
const botonComprar = document.getElementById("checkout-btn");
let totalCalculado;
let cantidadTotal = 0;

function cargarProductosCarrito() {
  if (productosEnCarrito && productosEnCarrito.length > 0) {
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoProductos.innerHTML = "";

    productosEnCarrito.forEach((producto) => {
      cantidadTotal = cantidadTotal + producto.cantidad;
      const div = document.createElement("div");
      div.classList.add("carrito-producto");
      div.innerHTML = `
                    <img class="carrito-producto-imagen" src="${producto.imagen
        }" alt="${producto.titulo}">
                    <div class="carrito-producto-titulo">
                        <small>Título</small>
                        <h3>${producto.titulo}</h3>
                    </div>
                    <div class="carrito-producto-cantidad">
                        <small>Cantidad</small>
                        <p id='quantity'>${producto.cantidad}</p>
                    </div>
                    <div class="carrito-producto-precio">
                        <small>Precio</small>
                        <p>$${producto.precio}</p>
                    </div>
                    <div class="carrito-producto-subtotal">
                        <small>Subtotal</small>
                        <p id= "unit-price">$${producto.precio * producto.cantidad}</p>
                    </div>
                    <button class="carrito-producto-eliminar" id="${producto.id
        }"><i class="bi bi-trash-fill"></i></button>
                `;

      contenedorCarritoProductos.append(div);
      
    });
  } else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
  }
  actualizarBotonesEliminar();
  actualizarTotal();
}
cargarProductosCarrito();

function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarDelCarrito);
  });
}

function eliminarDelCarrito(e) {
  const idBoton = e.currentTarget.id;

  const index = productosEnCarrito.findIndex(
    (producto) => producto.id === idBoton
  );

  productosEnCarrito.splice(index, 1);
  cargarProductosCarrito();

  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
}
botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
  productosEnCarrito.length = 0;
  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
  cargarProductosCarrito();
  contenedorCarritoVacio.classList.add("disabled");
  contenedorCarritoProductos.classList.add("disabled");
  contenedorCarritoAcciones.classList.add("disabled");
  
}

function actualizarTotal() {
 totalCalculado = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );
  total.innerText = `$${totalCalculado}`;
}



// REPLACE WITH YOUR PUBLIC KEY AVAILABLE IN: https://developers.mercadopago.com/panel
const mercadopago = new MercadoPago('APP_USR-5102c4a1-b24f-4aed-80d0-29d6a0a2ac3f', {
  locale: '<LOCALE>' // The most common are: 'pt-BR', 'es-AR' and 'en-US'
});

          

const bricksBuilder = mercadopago.bricks();

// Handle call to backend and generate preference.
botonComprar.addEventListener("click", Mercado );

function Mercado() {

  // $('#checkout-btn').attr("disabled", true);

  const orderData = {
    quantity: 1,
    description: productosEnCarrito[0].titulo,
    price: totalCalculado
  };

//   fetch("https://flora-two.vercel.app/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(orderData),
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (preference) {
//       createCheckoutButton(preference.id);

//       $(".shopping-cart").fadeOut(500);
//       setTimeout(() => {
//         $(".container_payment").show(500).fadeIn();
//       }, 500);
//     })
   
// };
fetch("https://flora-two.vercel.app/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(orderData),
})
  .then(function (response) {
    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa");
    }
    return response.json();
  })
  .then(function (preference) {
    createCheckoutButton(preference.id);

    $(".shopping-cart").fadeOut(500);
    setTimeout(() => {
      $(".container_payment").show(500).fadeIn();
    }, 500);
  })
  .catch(function (error) {
    console.error("Error en la solicitud:", error);
  });

function createCheckoutButton(preferenceId) {
  // Initialize the checkout
  const bricksBuilder = mercadopago.bricks();

  const renderComponent = async (bricksBuilder) => {
    if (window.checkoutButton) window.checkoutButton.unmount();
    await bricksBuilder.create(
      'wallet',
      'checkout-btn', // class/id where the payment button will be displayed
      {
        initialization: {
          preferenceId: preferenceId
        },
        callbacks: {
          onError: (error) => console.error(error),
          onReady: () => { }
        }
      }
    );
  };
  window.checkoutButton = renderComponent(bricksBuilder);
}

// Handle price update
// function updatePrice() {
//   let quantity = producto.cantidad;
//   let unitPrice = producto.precio; 
//   let amount = parseInt(unitPrice) * parseInt(quantity);

//   document.getElementById("cart-total").innerHTML = "$ " + amount;
//   document.getElementById("summary-price").innerHTML = "$ " + unitPrice;
//   document.getElementById("summary-quantity").innerHTML = quantity;
//   document.getElementById("summary-total").innerHTML = "$ " + amount;
// }

// document.getElementById("quantity").addEventListener("change", updatePrice);
// updatePrice();

// Go back
// document.getElementById("go-back").addEventListener("click", function () {
//   $(".container_payment").fadeOut(500);
//   setTimeout(() => {
//     $(".shopping-cart").show(500).fadeIn();
//   }, 500);
//   $('#checkout-btn').attr("disabled", false);
// });
