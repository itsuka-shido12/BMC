const formRegistro = document.querySelector("#formRegistro")
const inputUserName = document.querySelector("#inputUserName")
const inputUserPass = document.querySelector("#inputUserPass")
 const inputUserFecha = document.querySelector("#inputUserFecha") 





function registroDatos (e){
    e.preventDefault()
    
    let user = {
        user:inputUserName.value,
        pass: inputUserPass.value,
        Date: inputUserFecha.value,
        correo: "admin@admin.com",
        apodo:"pep",
        logged:false,
        progress: Number(0),
        certificado: false,
        cursos:{
            liras: false,
            percusion: {
                bombos: false,
                redoblante: false,
                platillos: false,
                tambora:false
            },
            vientos: false,
            partituras: false
        }
    }

    console.log(inputUserName.value)
    console.log(inputUserPass.value)

    const users = JSON.parse(localStorage.getItem("user")) || [];

    for (let i = 0; i < users.length; i++) {
        if(users [i].user === user.user){
            alert("El usuario ya existe 🤣")
            return
        }
        
    }

    users.push(user)

    localStorage.setItem('user', JSON.stringify (users))
    //localStorage.setItem('password',inputUserPass.value) 
    //localStorage.setItem('Fecha de nacimiento',inputUserFecha.value) 

    const cajitaMensaje = document.createElement('p');
    cajitaMensaje.innerHTML = `ya tienes cuenta <a href="./inicio_sesion.html">Iniciar sesion</a>`

    formRegistro.appendChild(cajitaMensaje)

    formRegistro.reset()
}
formRegistro.addEventListener('submit',registroDatos)