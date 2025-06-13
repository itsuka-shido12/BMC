const users = JSON.parse(localStorage.getItem("user")) || [];
const linkCerrar = document.querySelector("#link-cerrar")
const linkIniciar = document.querySelector("#link-iniciar")
const linkRegistro = document.querySelector("#link-registro")
const linkDasboard = document.querySelector("#link-dasboard")
const linkCursos = document.querySelector("#link-cursos")
const estadoLiras = document.querySelector('#estado-liras')
const estadoPercusion = document.querySelector('#estado-percusion')
const estadoCorneta = document.querySelector('#estado-corneta')
const estadoPartitura = document.querySelector('#estado-partituras')
const cajaBotones = document.querySelector("#cajaBotones")

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
            linkDasboard.src  = users[i].avatar
            linkCursos.style.display = "block"
            if (cajaBotones) {

                cajaBotones.innerHTML = `
                    <a href="./pages/modulos.html" class="btn-active ">EMPEZAR CURSO</a>
                `
            }

            /* if (
                users[i].cursos.liras ||
                users[i].cursos.partituras ||
                users[i].cursos.vientos ||
                users[i].cursos.percusion.bombos
            ) {
                estadoPercusion.src = "../recursos/assets_mooc/carga 4.png"
                estadoLiras.src = "../recursos/assets_mooc/carga 4.png"
                estadoCorneta.src = "../recursos/assets_mooc/carga 4.png"
                estadoPartitura.src = "../recursos/assets_mooc/carga 4.png"
            } else {
                estadoPercusion.src = "../recursos/assets_mooc/carga 1.png"
                estadoLiras.src = "../recursos/assets_mooc/carga 1.png"
                estadoCorneta.src = "../recursos/assets_mooc/carga 1.png"
                estadoPartitura.src = "../recursos/assets_mooc/carga 1.png"
            } */

            if (estadoLiras && estadoPartitura && estadoCorneta && estadoPercusion) {
                if (users[i].cursos.liras) {
                    estadoLiras.src = "../recursos/assets_mooc/carga 4.png"
                } else {
                    estadoLiras.src = "../recursos/assets_mooc/carga 0.png"
                }

                if (users[i].cursos.partituras) {
                    estadoPartitura.src = "../recursos/assets_mooc/carga 4.png"
                } else {
                    estadoPartitura.src = "../recursos/assets_mooc/carga 0.png"
                }

                if (users[i].cursos.vientos) {
                    estadoCorneta.src = "../recursos/assets_mooc/carga 4.png"
                } else {
                    estadoCorneta.src = "../recursos/assets_mooc/carga 0.png"
                }

                if (users[i].cursos.percusion.bombos) {
                    estadoPercusion.src = "../recursos/assets_mooc/carga 4.png"
                } else {
                    estadoPercusion.src = "../recursos/assets_mooc/carga 0.png"
                }
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
    cajaBotones.innerHTML = `
               <a href="./pages/Modalidades.html" class="btn ">VER CATEGORÍAS</a>
                        <a id="linkRegistrate" href="./pages/registro.html" class="btn-active">REGÍSTRATE</a>
            `
}

verificarUsuario()