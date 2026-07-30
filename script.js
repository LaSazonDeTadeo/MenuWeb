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

{
    categoria: "Postres",
    nombre: "Todos los postres",
    precio: 5000,
    imagen: "img/postres.jpg",
    descripcion: "Todos los postres disponibles al mismo precio.",
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
        clase: "postres"
    }

];


//========================================
// CREAR MENÚ
//========================================

categorias.forEach(categoria => {

    //--------------------------------
    // Título
    //--------------------------------

    const titulo = document.createElement("h2");

    titulo.className = `tituloCategoria ${categoria.clase}Titulo`;

    titulo.textContent = categoria.nombre;

    menu.appendChild(titulo);


    //--------------------------------
    // Contenedor
    //--------------------------------

    const contenedor = document.createElement("div");

    contenedor.className = `contenedorCategoria ${categoria.clase}`;

    menu.appendChild(contenedor);


    //--------------------------------
    // Productos
    //--------------------------------

    platos
        .filter(plato => plato.categoria === categoria.nombre)
        .forEach(plato => {

            const card = document.createElement("div");

            card.className = "card";


            //--------------------------------
            // Insignias
            //--------------------------------

            let recomendado = "";

            if (plato.recomendado) {
                recomendado = `<span class="badge recomendado">⭐ Recomendado</span>`;
            }

            let picante = "";

            if (plato.picante) {
                picante = `<span class="badge picante">🌶️ Picante</span>`;
            }


            //--------------------------------
            // Tarjeta
            //--------------------------------

            card.innerHTML = `

                <img src="${plato.imagen}" alt="${plato.nombre}">

                ${recomendado}

                ${picante}

                <h2>${plato.nombre}</h2>

                <p>${plato.descripcion}</p>

                <h3>$${plato.precio.toLocaleString()}</h3>

                <small>
                    📦 Preguntar por disponibilidad
                </small>

                <a
                    class="btnPedido"
                    target="_blank"
                    href="https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hola, quiero consultar la disponibilidad de: ${plato.nombre}`)}">
                    Consultar por WhatsApp
                </a>

            `;

            contenedor.appendChild(card);

        });

});