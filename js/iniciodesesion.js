const formRegistro = document.querySelector("#formRegistro")
const inputUserName = document.querySelector("#inputUserName")
const inputUserPass = document.querySelector("#inputUserPass")


console.log(formRegistro)
console.log(inputUserName)
console.log(inputUserPass)


const users = JSON.parse(localStorage.getItem("user")) || [];


function validarUsuario (e){

    e.preventDefault()
    
    for(let i = 0; i < users.length; i++){

        
       /*  let usuarioLocal = localStorage.getItem('user')
        let passwordLocal = localStorage.getItem('password')
         */
        
        if(users[i].user === inputUserName.value && users[i].pass === inputUserPass.value){
            console.log('Bienvenido 😎')
            users[i].logged = true
            localStorage.setItem("user", JSON.stringify(users))
             window.location = "../index.html"
        return
    }
}
    
    console.log('Datos incorrectos 🫠')
    
    formRegistro.reset()
}
formRegistro.addEventListener('submit',validarUsuario)