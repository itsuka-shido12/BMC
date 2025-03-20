const formRegistro = document.querySelector("#formRegistro")
const inputUserName = document.querySelector("#inputUserName")
const inputUserPass = document.querySelector("#inputUserPass")


console.log(formRegistro)
console.log(inputUserName)
console.log(inputUserPass)

function validarUsuario (e){
    e.preventDefault()
    
    let usuarioLocal = localStorage.getItem('user')
    let passwordLocal = localStorage.getItem('password')
    

    if(usuarioLocal === inputUserName.value && passwordLocal === inputUserPass.value){
        console.log('Bienvenido 😎')
        localStorage.setItem('activo',true)
        window.location = "../index.html"
       
    }else{
        console.log('Datos incorrectos 🫠')
    }
    

    formRegistro.reset()
}
formRegistro.addEventListener('submit',validarUsuario)