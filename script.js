//========================================
// CONFIGURACIÓN GENERAL
//========================================

const whatsapp = "5491121793883";


//========================================
// BASE DE DATOS DEL MENÚ
//========================================

const platos = [

    {
        categoria: "Ofertas",
        nombre: "6 Tamales Peruanos",
        precio: 20000,
        imagen: "img/tamales.jpg",
        descripcion: "Promoción especial de seis tamales artesanales.",
        recomendado: true,
        picante: false
    },

    {
        categoria: "Platos",
        nombre: "Tiradito de lenguado en salsa de ají amarillo",
        precio: 18000,
        imagen: "img/tiradito.jpg",
        descripcion: "Delicado tiradito acompañado de salsa de ají amarillo.",
        recomendado: true,
        picante: false
    },

    {
        categoria: "Platos",
        nombre: "Seco de cordero con frijoles",
        precio: 15000,
        imagen: "img/seco.jpg",
        descripcion: "Seco tradicional acompañado de frijoles.",
        recomendado: true,
        picante: false
    },

    {
        categoria: "Platos",
        nombre: "Chanfainita con tallarines rojos, ceviche y crema de huancaína",
        precio: 12000,
        imagen: "img/chanfainita.jpg",
        descripcion: "Combinado peruano tradicional.",
        recomendado: false,
        picante: true
    },

    {
        categoria: "Bebidas",
        nombre: "Champus + 2 empanadas",
        precio: 6000,
        imagen: "img/champus.jpg",
        descripcion: "Bebida tradicional con dos empanadas.",
        recomendado: false,
        picante: false
    },


    //====================================
    // POSTRES PERUANOS
    //====================================

    {
        categoria: "Postres",
        subcategoria: "Postres peruanos",
        nombre: "Postres peruanos",
        precio: null, // Reemplazar null por el precio. Ejemplo: 5000
        imagen: "img/postres.jpg",
        descripcion: "Selección de postres peruanos tradicionales.",
        recomendado: false,
        picante: false
    },


    //====================================
    // DELICIAS CASERAS
    //====================================

    {
        categoria: "Postres",
        subcategoria: "Delicias caseras",
        nombre: "Pie de limón",
        precio: null, // Reemplazar null por el precio
        imagen: "img/pie-limon.jpg",
        descripcion: "Pie de limón casero, fresco y cremoso.",
        recomendado: false,
        picante: false
    },

    {
        categoria: "Postres",
        subcategoria: "Delicias caseras",
        nombre: "Budines",
        precio: null, // Reemplazar null por el precio
        imagen: "img/budines.jpg",
        descripcion: "Budines caseros, ideales para acompañar una bebida.",
        recomendado: false,
        picante: false
    },

    {
        categoria: "Postres",
        subcategoria: "Delicias caseras",
        nombre: "Porción de torta de naranja",
        precio: null, // Reemplazar null por el precio
        imagen: "img/torta-naranja.jpg",
        descripcion: "Porción de torta casera de naranja.",
        recomendado: false,
        picante: false
    }

];


//========================================
// CONTENEDOR PRINCIPAL
//========================================

const menu = document.getElementById("menu");

const categorias = [

    {
        nombre: "Ofertas",
        clase: "ofertas"
    },

    {
        nombre: "Platos",
        clase: "platos"
    },

    {
        nombre: "Bebidas",
        clase: "bebidas"
    },

    {
        nombre: "Postres",
        clase: "postres",
        subcategorias: [
            "Postres peruanos",
            "Delicias caseras"
        ]
    }

];


//========================================
// FUNCIÓN PARA CREAR UNA TARJETA
//========================================

function crearTarjeta(plato, contenedor) {

    const card = document.createElement("div");
    card.className = "card";


    //--------------------------------
    // Insignias
    //--------------------------------

    const recomendado = plato.recomendado
        ? `
            <span class="badge recomendado">
                ⭐ Recomendado
            </span>
        `
        : "";

    const picante = plato.picante
        ? `
            <span class="badge picante">
                🌶️ Picante
            </span>
        `
        : "";


    //--------------------------------
    // Precio
    //--------------------------------

    const precio = plato.precio !== null
        ? `<h3>$${plato.precio.toLocaleString("es-AR")}</h3>`
        : `<h3 class="precioConsultar">Consultar precio</h3>`;


    //--------------------------------
    // Botón WhatsApp
    //--------------------------------

    const mensaje = encodeURIComponent(
        `Hola, quiero consultar la disponibilidad y el precio de: ${plato.nombre}`
    );

    const boton = `
        <a
            class="btnPedido"
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/${whatsapp}?text=${mensaje}">
            Consultar por WhatsApp
        </a>
    `;


    //--------------------------------
    // Contenido de la tarjeta
    //--------------------------------

    card.innerHTML = `

        <img
            src="${plato.imagen}"
            alt="${plato.nombre}"
            loading="lazy">

        <div class="insignias">
            ${recomendado}
            ${picante}
        </div>

        <h2>${plato.nombre}</h2>

        <p>${plato.descripcion}</p>

        ${precio}

        <small class="disponibilidad">
            📦 Preguntar por disponibilidad
        </small>

        ${boton}

    `;

    contenedor.appendChild(card);
}


//========================================
// CREAR MENÚ
//========================================

categorias.forEach(categoria => {

    //--------------------------------
    // Título principal
    //--------------------------------

    const titulo = document.createElement("h2");

    titulo.className =
        `tituloCategoria ${categoria.clase}Titulo`;

    titulo.textContent = categoria.nombre;

    menu.appendChild(titulo);


    //--------------------------------
    // Categorías sin subdivisiones
    //--------------------------------

    if (!categoria.subcategorias) {

        const contenedor = document.createElement("div");

        contenedor.className =
            `contenedorCategoria ${categoria.clase}`;

        menu.appendChild(contenedor);

        platos
            .filter(plato =>
                plato.categoria === categoria.nombre
            )
            .forEach(plato => {
                crearTarjeta(plato, contenedor);
            });

        return;
    }


    //--------------------------------
    // Categorías con subdivisiones
    //--------------------------------

    categoria.subcategorias.forEach(subcategoria => {

        const seccion = document.createElement("section");

        seccion.className = "seccionSubcategoria";


        // Título de la subdivisión

        const subtitulo = document.createElement("h3");

        subtitulo.className = "tituloSubcategoria";
        subtitulo.textContent = subcategoria;

        seccion.appendChild(subtitulo);


        // Contenedor de productos

        const contenedor = document.createElement("div");

        contenedor.className =
            `contenedorCategoria ${categoria.clase}`;

        seccion.appendChild(contenedor);


        // Filtrar productos

        platos
            .filter(plato =>
                plato.categoria === categoria.nombre &&
                plato.subcategoria === subcategoria
            )
            .forEach(plato => {
                crearTarjeta(plato, contenedor);
            });

        menu.appendChild(seccion);

    });

});