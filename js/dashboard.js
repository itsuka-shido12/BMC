const user = JSON.parse( localStorage.getItem("user")) || []

const saludoUser = document.querySelector("#saludo-user")
const progreso = document.querySelector("#progreso")
const progresoUser = document.querySelector("#progreso-user")

for (let i = 0; i < user.length; i++){

    if(user[i].logged === true){
        saludoUser.textContent = `Hola ${user[i].user.split("@")[0]}`
         /* progreso.textContent = `progreso ${user[i].progreso}` */
         progresoUser.style.width = `${user[i].progress}%`
         progresoUser.textContent = `${user[i].progress}%`
    }
}


