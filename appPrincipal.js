// ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
const formulario = document.getElementById('formulario');
const userName = document.querySelector('input[name="UserName"]');
const userGmail = document.querySelector('input[name="userGmail"]');
const alertSuccess = document.getElementById('alertSuccess');
const userGmailError = document.getElementById('userGmailError');
const userNameError = document.getElementById('userNameError');

const regUserName = /^[a-zA-Z]+$/;
const regUserGmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const success = () => {
    alertSuccess.classList.remove('d-none');
    alertSuccess.textContent = 'El formulario se envio correctamente';
    setTimeout(() => {
        alertSuccess.classList.add('d-none');
    }, 3000);
}
const mensajeError = (errores) => {
    errores.forEach(error => {
        error.tipo.classList.remove('d-none');
        error.tipo.textContent = error.msg;
    } )

}
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(userName.value);
    // console.log(userGmail.value);

    // console.log(regUserName.test(userName.value));
    const errores =[];
    if(!regUserName.test(userName.value) || !userName.value.trim()){
        userName.classList.add('is-invalid');
        errores.push({
            tipo:userNameError,
            msg:'El nombre no es valido, solo letras'
        })
    }else {
        userName.classList.remove('is-invalid');
        userName.classList.add('is-valid');
        userNameError.classList.add('d-none');

    }

    if(!regUserGmail.test(userGmail.value || !userGmail.value.trim())){
        userGmail.classList.add('is-invalid');
        errores.push({
            tipo:userGmailError,
            msg:'El correo no es valido, ejm: juancito@gmail.com'
        })
    }else {
        userGmail.classList.remove('is-invalid');
        userGmail.classList.add('is-valid');
        userGmailError.classList.add('d-none');
    }
    // console.log('El correo es valido');
    if (errores.length !== 0){
        mensajeError(errores);
        return;
    }

    success();
} )  ;
































