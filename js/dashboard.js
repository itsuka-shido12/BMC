const user = JSON.parse( localStorage.getItem("user")) || []

const saludoUser = document.querySelector("#saludo-user")
const progreso = document.querySelector("#progreso")

for (let i = 0; i < Array.length; i++){

    if(user[i].logged === true){
        saludoUser.textContent = `hola ${user[i].user}`
         progreso.textContent = `progreso ${user[i].progreso}`
    }
}