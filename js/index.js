const users = JSON.parse(localStorage.getItem("user")) || [];
const linkCerrar = document.querySelector("#link-cerrar")
const linkIniciar = document.querySelector("#link-iniciar")
const linkRegistro = document.querySelector("#link-registro")
const linkDasboard = document.querySelector("#link-dasboard")
const linkCursos = document.querySelector("#link-cursos")
function verificarUsuario(){

    
    for (let i = 0; i < users.length; i++) {
        
        
        if(users[i].logged == true){
            console.log("Puedes cerrar sesion")
            linkCerrar.style.display = "block"
            linkIniciar.style.display = "none"
            linkRegistro.style.display = "none"
            linkDasboard.style.display = "block"
            linkCursos.style.display = "block"
            return
        }
        
    }
    
    console.log("Debes iniciar sesión")
    linkCerrar.style.display = "none"
            linkIniciar.style.display = "block"
             linkRegistro.style.display = "block"
              linkDasboard.style.display = "none"
              linkCursos.style.display = "none"
}

verificarUsuario()