function saludar(){
    //cuando usuario escriba su nombre y de click -> lo que escribio -> a pantalla
    //aprendo como js lee lo que hay dentro de input

    //variable nombre guarda lo que usuario puso en username 
    // ---> regresamos hola y el texto de username 
    let nombre = document.getElementById("username").value
    document.getElementById("mensaje").textContent = "Hola! " + nombre + "!"

}


function limpiarCampos(){
    //borraremos lo que hay escrito en los inputs y esconde el mensaje 
    //aprendo js modifica el html en cualquier momento

    // dejamos vacio username | password | mensaje
    document.getElementById("username").value = ""
    document.getElementById("password").value = ""
    document.getElementById("mensaje").textContent = ""
}


function validarLogin(){
    //revisara si ususario y contraseña -> correctos?
    // si -> welcome!
    // no -> ERROR!

    //aprendo if else en js

    let user = document.getElementById("username").value
    let password = document.getElementById("password").value

    if (user === "dannyv32" && password === "235476"){
        document.getElementById("mensaje").textContent = "WELCOME " + user + "!!"
    } else{
            document.getElementById("mensaje").textContent = "ERROR ususario y/o contraseña son incorrectos"
        }
}