
const users = JSON.parse(localStorage.getItem('user'))

const video = document.querySelector("#videoLira")
const estado = document.querySelector("#estado")


for (let i = 0; i < users.length; i++) {
    if (users[i].logged && users[i].cursos.liras) {
        estado.innerHTML = `
            Estado: <img width="30" class="ms-3" src="../recursos/assets_mooc/Recurso 1.png" alt="">
        `
    }
}


video.addEventListener('timeupdate', function () {
    tiempoVisto = video.currentTime;

    if (tiempoVisto > 35) {
        console.log("video completado")
        estado.innerHTML = `
            Estado: <img width="30" class="ms-3" src="../recursos/assets_mooc/Recurso 1.png" alt="">
        `
        for (let i = 0; i < users.length; i++) {

            if (users[i].logged) {
                console.log('Bienvenido 😎')
                users[i].cursos.liras = true
                users[i].progreso = 25
                localStorage.setItem("user", JSON.stringify(users))



                return
            }
        }

    } else {
        `Estado: <span class="ms-2">🔴</span>`
    }


})