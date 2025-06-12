
const users = JSON.parse(localStorage.getItem('user'))

const video = document.querySelector("#video")
const estado = document.querySelector("#estado")


for (let i = 0; i < users.length; i++) {
    if (users[i].logged && users[i].cursos.partituras) {
        estado.innerHTML = `
            Estado: <img width="30" class="ms-3" src="../recursos/assets_mooc/Recurso 1.png" alt="">
        `
    }
}

function actulizaEstadoProgress(){
    for (let i = 0; i < users.length; i++) {

            if (users[i].logged && !users[i].partiturasCompletado) {
                console.log('Bienvenido 😎')
                users[i].cursos.partituras = true
                users[i].progress += 25
                users[i].partiturasCompletado = true
                localStorage.setItem("user", JSON.stringify(users))

                return
            }
        }
}

console.log(users[0].progreso)


video.addEventListener('timeupdate', function () {
    tiempoVisto = video.currentTime;

    if (tiempoVisto > 35) {
        console.log("video completado")
        estado.innerHTML = `
            Estado: <img width="30" class="ms-3" src="../recursos/assets_mooc/Recurso 1.png" alt="">
        `
        actulizaEstadoProgress()

    } else {
        `Estado: <span class="ms-2">🔴</span>`
    }


})