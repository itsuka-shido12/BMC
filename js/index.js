const users = JSON.parse(localStorage.getItem("user")) || [];
const linkCerrar = document.querySelector("#link-cerrar")
const linkIniciar = document.querySelector("#link-iniciar")
const linkRegistro = document.querySelector("#link-registro")
const linkDasboard = document.querySelector("#link-dasboard")
const linkCursos = document.querySelector("#link-cursos")
const estadoLiras = document.querySelector('#estado-liras')

/* for (let i = 0; i < users.length; i++) {

    if (users[i].logged && users[i].cursos.liras) {
        estadoLiras.src = "../recursos/assets_mooc/carga 4.png"
    } else {
        estadoLiras.src = "../recursos/assets_mooc/carga 1.png"
    }

}
 */

function verificarUsuario() {




    for (let i = 0; i < users.length; i++) {

        if (users[i].logged == true) {
            console.log("Puedes cerrar sesion")
            linkCerrar.style.display = "block"
            linkIniciar.style.display = "none"
            linkRegistro.style.display = "none"
            linkDasboard.style.display = "block"
            linkCursos.style.display = "block"

            if (users[i].cursos.liras) {
                estadoLiras.src = "../recursos/assets_mooc/carga 4.png"
            } else {
                estadoLiras.src = "../recursos/assets_mooc/carga 1.png"
            }


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