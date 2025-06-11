const user = JSON.parse( localStorage.getItem("user")) || []

const saludoUser = document.querySelector("#saludo-user")
const progreso = document.querySelector("#progreso")
const progresoUser = document.querySelector("#progreso-user")

for (let i = 0; i < user.length; i++){

    if(user[i].logged === true){
        saludoUser.textContent = `hola ${user[i].user}`
         /* progreso.textContent = `progreso ${user[i].progreso}` */
         progresoUser.style.width = `${user[i].progreso}%`
         progresoUser.textContent = `${user[i].progreso}%`
    }
}