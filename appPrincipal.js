// const carrito = document.querySelector('#carrito'); 
// const template = document.querySelector('#template'); 
// const fragment = document.createDocumentFragment();
// const btnBotones = document.querySelectorAll('.card .btn');
// const carritoObjeto = [];

// btnBotones.forEach(btn =>btn.addEventListener('click', agregarCarrito));

// function agregarCarrito (e){
//     // console.log(e.target.dataset) // dataset es un objeto que contiene todos los atributos data-*

//     const producto= {
//         titulo: e.target.dataset.fruta,
//         id: e.target.dataset.fruta,
//         cantidad: 1
//     };

//     const index = carritoObjeto.findIndex(productoItem => productoItem.id === producto.id);

//     if(index === -1){
//         carritoObjeto.push(producto);
//     }else{
//         carritoObjeto[index].cantidad ++;
//     }
//     pintarCarrito(carritoObjeto);
// };

// const pintarCarrito = (array) => {
//         carrito.textContent = '';
//         array.forEach(productoItem => {
//             const clone = template.content.firstElementChild.cloneNode(true);
//             clone.querySelector('.lead').textContent = productoItem.titulo;
//             clone.querySelector('.badge').textContent = productoItem.cantidad;
//             fragment.appendChild(clone);         
//     });
//     carrito.appendChild(fragment);
// };




// const users = [
//     {
//         id: 1,
//         name: 'John Doe',
//         age: 22
//     },
//     {
//         id: 2,
//         name: 'Jane Doe',
//         age: 12
//     },
//     {
//         id: 3,
//         name: 'John Smith',
//         age: 29    },
//     {
//         id: 4,
//         name: 'Jane Smith',
//         age: 32
//     },
//     {
//         id: 5,
//         name: 'John Carmen',
//         age: 18
//     }

// ];
// const arrayDeNumeros = [
//     [1,2,3,[1,2,3,[1,2,3]]],
//     [4,5,6],
//     [7,8,9]
// ];

// const usersObj = users.map(user =>user.name);

// console.log(usersObj);

// const numerodosPOR = users.map(num => num.age * 2);
// console.log(numerodosPOR);

// const mayores = users.filter(user => user.age > 18);
// console.log(mayores)

// const userFiltrado = users.filter(user => user.id !==3);
// console.log(userFiltrado);

// const {name} = users.find(user => user.name === 'John Doe');
// console.log(name);

// const existe = users.some(user => user.name === 'John Does');
// console.log(existe);

// const incide = users.findIndex(user => user.name === 'John Smith');
// console.log(incide);

// const arrayNuevo= users.slice(0,2);
// console.log(arrayNuevo);

// const array3 = users.splice(0,1);
// console.log(array3);

// const array4= users.concat(users);
// console.log(array4);

// const array3 = [...users,'-', ...arrayDeNumeros];
// console.log(array3);

// const array3 = arrayDeNumeros.reduce((acc, el) => acc + el, 0);
// console.log(array3);

// const solorNumeros =  arrayDeNumeros.reduce(
//     (acc,el) => acc.concat(el), []
// )
// console.log(solorNumeros);

// const arrayPlano = [].concat(...arrayDeNumeros);
// console.log(arrayPlano);

// const OtroArrayPlano = arrayDeNumeros.flat(3);
// console.log(OtroArrayPlano);

// const cadenaMeses = " Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre";

// const arrayMeses = cadenaMeses.split(',');
// console.log(arrayMeses);

// const arrayPrueba = arrayMeses.join(',');
// console.log(arrayPrueba);


// const padre = document.querySelector('.border-primary');
// const hijos = document.querySelectorAll('.border-secondary');
// const nieto = document.querySelector('.border-danger');


// padre.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('click en padre');
// },);

// hijos.forEach(hijo => {
//     hijo.addEventListener('click', (e) => {
//         e.stopPropagation();
//         console.log('click en hijo');
//     });
// },);

// nieto.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('click en nieto');
// },);

// const cajitas = document.querySelectorAll('.border');

// cajitas.forEach(cajita => {
//     cajita.addEventListener('click', (e) => {
//         e.stopPropagation();
//         console.log('click en cajita');
//     });
// } );

// const container = document.querySelector('.container');

// container.addEventListener('click', (e) => {
//     // console.log(e.target);
//     if(e.target.id === 'padre'){
//         console.log('click en padre');
//     };

//     // console.log(e.target.matches('.border-success'));

//     if(e.target.matches('.border-secondary')){
//         console.log('click en hijo');
//     };

//     // console.log(e.target.dataset.div);
//     if(e.target.dataset.div === 'divNieto'){
//         console.log('click en nieto');
//     };
// });








// const formulario = document.querySelector('Form');
// const ancla = document.querySelector('a');
// ancla.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('click en ancla');
// });


// formulario.addEventListener('submit', (e) => {
//     console.log('enviando formulario');
//     e.preventDefault();
// } );
