const carrito = document.querySelector('#carrito'); 
const template = document.querySelector('#template'); 
const fragment = document.createDocumentFragment();
const btnBotones = document.querySelectorAll('.card .btn');


const carritoObjeto = {};
function agregarCarrito (e){
    // console.log(e.target.dataset) // dataset es un objeto que contiene todos los atributos data-*

    const producto= {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    };

    if(carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad +1;
    };
    carritoObjeto[producto.titulo] = {...producto};
    pintarCarrito();
};

const pintarCarrito = () => {
        carrito.textContent = '';
        Object.values(carritoObjeto).forEach(productoItem => {
            const clone = template.content.firstElementChild.cloneNode(true);
            clone.querySelector('.lead').textContent = productoItem.titulo;
            clone.querySelector('.badge').textContent = productoItem.cantidad;
            fragment.appendChild(clone);
            
            
    });
    carrito.appendChild(fragment);
};

btnBotones.forEach(btn => {
    btn.addEventListener('click', agregarCarrito);
});