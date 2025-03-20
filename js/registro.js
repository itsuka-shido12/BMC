const formRegistro = document.querySelector("#formRegistro")
const inputUserName = document.querySelector("#inputUserName")
const inputUserPass = document.querySelector("#inputUserPass")
 const inputUserFecha = document.querySelector("#inputUserFecha") 





function registroDatos (e){
    e.preventDefault()
    localStorage.setItem('user',inputUserName.value)
    localStorage.setItem('password',inputUserPass.value)
    localStorage.setItem('Fecha de nacimiento',inputUserFecha.value) 

    const cajitaMensaje = document.createElement('p');
    cajitaMensaje.innerHTML = `ya tienes cuenta <a href="./inicio_sesion.html">Iniciar sesion</a>`

    formRegistro.appendChild(cajitaMensaje)

    formRegistro.reset()
}
formRegistro.addEventListener('submit',registroDatos)