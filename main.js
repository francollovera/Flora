

const productos = [
  {
    "id": "abrigo-01",
    "titulo": "Escarapela 01",
    "imagen": "./img/ESCARAPELAS/WhatsApp Image 2023-09-04 at 6.09.31 PM (2).jpeg",
    "categoria": {
      "nombre": "Escarapelas",
      "id": "abrigos"
    },
    "precio": 2500
  },
  {
    "id": "abrigo-02",
    "titulo": "Escarapela 02",
    "imagen": "./img/ESCARAPELAS/WhatsApp Image 2023-09-04 at 6.09.31 PM.jpeg",
    "categoria": {
      "nombre": "Escarapelas",
      "id": "abrigos"
    },
    "precio": 2500
  },
  {
    "id": "abrigo-03",
    "titulo": "Escarapela 03",
    "imagen": "./img/ESCARAPELAS/WhatsApp Image 2023-09-04 at 6.09.32 PM (1).jpeg",
    "categoria": {
      "nombre": "Escarapelas",
      "id": "abrigos"
    },
    "precio": 2500
  },
  {
    "id": "abrigo-04",
    "titulo": "Escarapela 04",
    "imagen": "./img/ESCARAPELAS/WhatsApp Image 2023-09-04 at 6.09.33 PM (1).jpeg",
    "categoria": {
      "nombre": "Escarapelas",
      "id": "abrigos"
    },
    "precio": 2500
  },

  {
    "id": "camiseta-01",
    "titulo": "Pulsera 01",
    "imagen": "./img/PULSERAS/WhatsApp Image 2023-09-04 at 6.14.04 PM (1).jpeg",
    "categoria": {
      "nombre": "Pulseras",
      "id": "camisetas"
    },
    "precio": 1500
  },
  {
    "id": "camiseta-02",
    "titulo": "Pulsera 02",
    "imagen": "./img/PULSERAS/WhatsApp Image 2023-09-04 at 6.14.04 PM (2).jpeg",
    "categoria": {
      "nombre": "Pulseras",
      "id": "camisetas"
    },
    "precio": 1500
  },
  {
    "id": "camiseta-03",
    "titulo": "Pulsera 03",
    "imagen": "./img/PULSERAS/WhatsApp Image 2023-09-04 at 6.14.04 PM (3).jpeg",
    "categoria": {
      "nombre": "Pulseras",
      "id": "camisetas"
    },
    "precio": 1500
  },
  {
    "id": "camiseta-04",
    "titulo": "Pulsera 04",
    "imagen": "./img/PULSERAS/WhatsApp Image 2023-09-04 at 6.14.05 PM.jpeg",
    "categoria": {
      "nombre": "Camisetas",
      "id": "camisetas"
    },
    "precio": 1500
  },

  {
    "id": "pantalon-01",
    "titulo": "Dije 01",
    "imagen": "./img/DIJES Y AROS/WhatsApp Image 2023-09-04 at 6.16.22 PM (1).jpeg",
    "categoria": {
      "nombre": "Dijes",
      "id": "pantalones"
    },
    "precio": 1000
  },
  {
    "id": "pantalon-02",
    "titulo": "Dije 02",
    "imagen": "./img/DIJES Y AROS/WhatsApp Image 2023-09-04 at 6.16.22 PM (2).jpeg",
    "categoria": {
      "nombre": "Dijes",
      "id": "pantalones"
    },
    "precio": 1200
  },
  {
    "id": "pantalon-03",
    "titulo": "Dije 03",
    "imagen": "./img/DIJES Y AROS/WhatsApp Image 2023-09-04 at 6.16.22 PM (3).jpeg",
    "categoria": {
      "nombre": "Dijes",
      "id": "pantalones"
    },
    "precio": 1000
  },
  {
    "id": "pantalon-04",
    "titulo": "Dije 04",
    "imagen": "./img/DIJES Y AROS/WhatsApp Image 2023-09-04 at 6.17.50 PM (1).jpeg",
    "categoria": {
      "nombre": "Dijes",
      "id": "pantalones"
    },
    "precio": 1000
  },
  {
    "id": "pantalon-05",
    "titulo": "Dije 05",
    "imagen": "./img/DIJES Y AROS/WhatsApp Image 2023-09-04 at 6.17.50 PM.jpeg",
    "categoria": {
      "nombre": "Dijes",
      "id": "pantalones"
    },
    "precio": 1000
  },
  {
    "id": "pantalon-06",
    "titulo": "Dije 06",
    "imagen": "./img/DIJES Y AROS/WhatsApp Image 2023-09-04 at 6.17.51 PM (1).jpeg",
    "categoria": {
      "nombre": "Dijes",
      "id": "pantalones"
    },
    "precio": 1000
  },
  {
    "id": "pantalon-07",
    "titulo": "Dije 07",
    "imagen": "./img/DIJES Y AROS/WhatsApp Image 2023-09-04 at 6.17.51 PM (2).jpeg",
    "categoria": {
      "nombre": "Dijes",
      "id": "pantalones"
    },
    "precio": 1000
  },
  {
    "id": "pantalon-08",
    "titulo": "Dije 08",
    "imagen": "./img/DIJES Y AROS/WhatsApp Image 2023-09-04 at 6.17.51 PM.jpeg",
    "categoria": {
      "nombre": "Dijes",
      "id": "pantalones"
    },
    "precio": 1000
  }
]

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

// Esta función cargará los productos en la página
function cargarTodosLosProductos() {
  // Llama a la función cargarProductos con el arreglo completo de productos
  cargarProductos(productos);

  // Establece el título principal
  tituloPrincipal.innerText = "Todos los productos";
}

// Llama a la función para cargar todos los productos cuando se carga la página
window.addEventListener('load', cargarTodosLosProductos);

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
  aside.classList.remove("aside-visible");
}))

function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto => {

    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

    contenedorProductos.append(div);
  })

  actualizarBotonesAgregar();

}


botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {

    botonesCategorias.forEach(boton => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
      tituloPrincipal.innerText = productoCategoria.categoria.nombre;
      const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = "Todos los productos";
      cargarProductos(productos);
    }

  })
});
function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar")
  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", (e) => {
      agregarAlCarrito(e);
      Swal.fire({
        title: '¡Producto agregado correctamente!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    });
  });
}

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton)

  if (productosEnCarrito.some(producto => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1
    productosEnCarrito.push(productoAgregado);
  }
  actualizarNumerito();
  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
};

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}


