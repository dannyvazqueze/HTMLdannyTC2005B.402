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


async function validarLogin(){
    //revisara si ususario y contraseña -> correctos?
    // si -> welcome!
    // no -> ERROR!

//read users inputs
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

//case 1: empty (make if)
    if (!email || !password){
        document.getElementById("mensaje").textContent= "Favor de ingresar tus datos respectivamente"
        return;
    }

//case 2: verify if welcome or error
    //recieve json from user using fetch from URL.  ------------------------------------------------------------------    
    const response = await fetch("http://localhost:4000/api/login/login", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({email, password})  
    });
    
    //recieve json from server ----------------------------------------------------------------------------------------
    const data = await response.json();

    //verify welcome or error with if ok -----------------------------------------------------------------------------
    if (response.ok){
        document.getElementById("mensaje").textContent = "WELCOME " + user + "!!"
    } else{
            document.getElementById("mensaje").textContent = "ERROR user and/or password are incorrect"
        }
}


