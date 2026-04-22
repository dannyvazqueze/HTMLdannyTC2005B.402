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

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    if (!email || !password){
        document.getElementById("mensaje").textContent =
        "Favor de ingresar tus datos respectivamente"
        return;
    }

    try {
        const response = await fetch("http://localhost:4000/api/login/login", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email, password})  
        });

        const data = await response.json();
        console.log("Respuesta servidor:", data);

        //PRIMERO verificamos si el login fue exitoso
        if (!response.ok){
            document.getElementById("mensaje").textContent = data;
            return;
        }

        //SOLO si fue exitoso usamos el user.id
        const userId = data.user.id;

        localStorage.setItem("UserId", userId);
        window.location.href = `game.html?userId=${userId}`;

    } catch (error){
        console.error("Error conexión:", error);
        document.getElementById("mensaje").textContent =
        "No se pudo conectar con el servidor";
    }
}
