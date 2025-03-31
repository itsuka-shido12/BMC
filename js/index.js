const users = JSON.parse(localStorage.getItem("user")) || [];
function verificarUsuario(){

    
    for (let i = 0; i < users.length; i++) {
        
        
        if(users[i].logged == true){
            console.log("Puedes cerrar sesion")
        }
        
    }
    
    console.log("Debes iniciar sesión")
}

verificarUsuario()