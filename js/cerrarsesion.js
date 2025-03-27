
//trae al usuario actual del localstorage
const users = JSON.parse(localStorage.getItem("user")) || []

//Cambiar el estado logged a false
//

for(let i = 0; i < users.length; i++) {

    if(users[i].logged){
        users[i].logged = false
        localStorage.setItem("user", JSON.stringify(users))
        window.location ="../index.html"
    }
}

