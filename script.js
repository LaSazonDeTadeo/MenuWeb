//========================================
// CONFIGURACIÓN GENERAL
//========================================

const whatsapp = "5491121793883";


//========================================
// BASE DE DATOS DEL MENÚ
//========================================

const platos = [

{
    categoria:"Platos",

    nombre:"Tiradito de lenguado en salsa de ají amarillo",

    precio:18000,

    imagen:"img/tiradito.jpg",

    descripcion:"Delicado tiradito acompañado de salsa de ají amarillo.",

    stock:0,

    recomendado:true,

    picante:false,

    disponible:false
},

{
    categoria:"Platos",

    nombre:"Seco de cordero con frijoles",

    precio:15000,

    imagen:"img/seco.jpg",

    descripcion:"Seco tradicional acompañado de frijoles.",

    stock:0,

    recomendado:true,

    picante:false,

    disponible:false
},

{
    categoria:"Platos",

    nombre:"Chanfainita con tallarines rojos, ceviche y crema de huancaína",

    precio:12000,

    imagen:"img/chanfainita.jpg",

    descripcion:"Combinado peruano tradicional.",

    stock:0,

    recomendado:false,

    picante:true,

    disponible:false
},

{
    categoria:"Bebidas",

    nombre:"Champus + 2 empanadas",

    precio:6000,

    imagen:"img/champus.jpg",

    descripcion:"Bebida tradicional con dos empanadas.",

    stock:0,

    recomendado:false,

    picante:false,

    disponible:false
},

{
    categoria:"Postres",

    nombre:"Todos los postres",

    precio:5000,

    imagen:"img/postres.jpg",

    descripcion:"Todos los postres disponibles al mismo precio.",

    stock:0,

    recomendado:false,

    picante:false,

    disponible:false
}

];


//========================================
// CONTENEDOR PRINCIPAL
//========================================

const menu = document.getElementById("menu");

const categorias = ["Platos","Bebidas","Postres"];


//========================================
// CREAR MENÚ
//========================================

categorias.forEach(categoria=>{

    // Título

    const titulo = document.createElement("h2");

    titulo.className="tituloCategoria";

    titulo.textContent=categoria;

    menu.appendChild(titulo);


    // Contenedor

    const contenedor=document.createElement("div");

    contenedor.className="contenedorCategoria";

    menu.appendChild(contenedor);


    // Productos

    platos

    .filter(plato=>plato.categoria===categoria)

    .forEach(plato=>{

        const card=document.createElement("div");

        card.className="card";


        //--------------------------------
        // Insignias
        //--------------------------------

        let recomendado="";

        if(plato.recomendado){

            recomendado=`<span class="badge recomendado">⭐ Recomendado</span>`;

        }

        let picante="";

        if(plato.picante){

            picante=`<span class="badge picante">🌶️ Picante</span>`;

        }


        //--------------------------------
        // Botón
        //--------------------------------

        let boton="";

        if(plato.stock>0 && plato.disponible){

            boton=`

            <a

            class="btnPedido"

            target="_blank"

            href="https://wa.me/${whatsapp}?text=Hola,%20quiero%20pedir:%20${encodeURIComponent(plato.nombre)}">

            Pedir por WhatsApp

            </a>

            `;

        }

        else{

            boton=`

            <button class="agotado">

            Agotado

            </button>

            `;

        }


        //--------------------------------
        // Tarjeta
        //--------------------------------

        card.innerHTML=`

            <img src="${plato.imagen}">

            ${recomendado}

            ${picante}

            <h2>${plato.nombre}</h2>

            <p>${plato.descripcion}</p>

            <h3>$${plato.precio.toLocaleString()}</h3>

            <small>

            Stock disponible: ${plato.stock}

            </small>

            ${boton}

        `;

        contenedor.appendChild(card);

    });

});