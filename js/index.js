const users = JSON.parse(localStorage.getItem("user")) || [];
const linkCerrar = document.querySelector("#link-cerrar")
const linkIniciar = document.querySelector("#link-iniciar")
const linkRegistro = document.querySelector("#link-registro")
function verificarUsuario(){

    
    for (let i = 0; i < users.length; i++) {
        
        
        if(users[i].logged == true){
            console.log("Puedes cerrar sesion")
            linkCerrar.style.display = "block"
            linkIniciar.style.display = "none"
            linkRegistro.style.display = "none"
            return
        }
        
    }
    
    console.log("Debes iniciar sesión")
    linkCerrar.style.display = "none"
            linkIniciar.style.display = "block"
             linkRegistro.style.display = "block"
}

verificarUsuario()