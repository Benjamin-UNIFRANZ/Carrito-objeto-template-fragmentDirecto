const carrito = document.querySelector('#carrito'); 
const template = document.querySelector('#template'); 
const fragment = document.createDocumentFragment();
const footer =document.getElementById('footer');
const templateFooter = document.getElementById('templateFooter');

document.addEventListener('click', (e) => {
    // console.log(e.target.matches('.card .btn-outline-primary'));
    if(e.target.matches('.card .btn-outline-primary')){
        // console.log('Añadir al carrito');
        agregarCarrito(e);
    };
    // console.log(e.target.matches('.list-group-item .btn-outline-info'));
    if(e.target.matches('#carrito .list-group-item .btn-outline-info')){
        // console.log('Añadir al carrito');
        btnAumenta(e);
    };
    if(e.target.matches('#carrito .list-group-item .btn-outline-dark')){
        // console.log('Añadir al carrito');
        btndisminuir(e);
    };
} );


let carritoObjeto = [];

// btnBotones.forEach(btn =>btn.addEventListener('click', agregarCarrito));

function agregarCarrito (e){
    // console.log(e.target.dataset) // dataset es un objeto que contiene todos los atributos data-*

    const producto= {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    };
    // console.log(producto);
    const index = carritoObjeto.findIndex(productoItem => productoItem.id === producto.id);

    if(index === -1){
        carritoObjeto.push(producto);
    }else{
        carritoObjeto[index].cantidad ++;
        // carritoObjeto[index].precio = carritoObjeto[index].cantidad * producto.precio
    }
    // console.log(carritoObjeto);
    pintarCarrito(carritoObjeto);

};

const pintarCarrito = (array) => {
        carrito.textContent = '';
        array.forEach(productoItem => {
            const clone = template.content.cloneNode(true);
            clone.querySelector('.text-white .lead').textContent = productoItem.titulo;
            clone.querySelector('.badge').textContent = productoItem.cantidad;
            clone.querySelector('div .lead span').textContent = productoItem.cantidad * productoItem.precio;
            clone.querySelector('.btn-outline-dark').dataset.id = productoItem.id;
            clone.querySelector('.btn-outline-info').dataset.id = productoItem.id;
            fragment.appendChild(clone);         
    });
    carrito.appendChild(fragment);
    pintarFooter()
};

const btnAumenta = (e) => {
    // console.log('me diste click', e.target.dataset.id);
    carritoObjeto = carritoObjeto.map(productoItem => {
        if (productoItem.id === e.target.dataset.id) {
            productoItem.cantidad++;

        }
        return productoItem;
    });
    pintarCarrito(carritoObjeto)
};

const btndisminuir = (e) => {
    // console.log('me diste click', e.target.dataset.id);
    carritoObjeto = carritoObjeto.filter(productoItem => {
            if(productoItem.id === e.target.dataset.id){
                if(productoItem.cantidad > 0){
                    productoItem.cantidad --;
                    if(productoItem.cantidad === 0)return;
                    return productoItem;
                }
            }else{ return productoItem;}
    } );
    pintarCarrito(carritoObjeto);
}


const pintarFooter = () => {
    // console.log('pintar footer');
    footer.textContent = '';
    if (carritoObjeto.length === 0) {
        return;
    }else {
        const total = carritoObjeto.reduce((acc, current) => acc + current.cantidad * current.precio, 0);
        const clone = templateFooter.content.cloneNode(true);
        clone.querySelector('span').textContent = total;
        footer.appendChild(clone);
    }
}































