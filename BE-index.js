//here is the APIIIII wuu
import 'dotenv/config';  // Carga el .env
import express from "express";
import cors from "cors";
import morgan from "morgan";

import pool from "./bd/bd.js";

import usersRoutes from "./routes/usersRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";

//creamos nuestro servidor (gestionra nuestros requests)
const app = express();
const PORT = process.env.PORT || 4000; // usa el puerto del .env o 4000 si no está definido

//FUNCIONES PRE ROUTES
app.use(cors()); //frontend -> API
app.use(morgan("dev")); //Requests->Servidor shown en TERMINAL
app.use(express.json()); //frontend -> datos Servidor processe 

//FUNCIONES ROUTES ----------------------------------
app.use("/api/users", usersRoutes);
app.use("/api/login", loginRoutes);


//RUTA PRINCIPAL      (servidor prueba basica)
app.get("/", (req, res) =>{
    res.send("API funcionando");
});

//RUTA PRUEBA EXTRA   (servidor prueba 1.01)
app.get("/marco", (req, res) =>{
    res.send("Hola Marco");
});

//RUTA PRUEBA DE APIs (health check)
app.get("/ping", (req, res) =>{
    res.send({message: "pong"});
});

//SERVIDOR ON
//port: 4000
app.listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`));


pool.query("SELECT NOW()", (err, res) => {
  if (err) console.error("Error conectando a la BDD:", err);
  else console.log("Conexión exitosa a PostgreSQL:", res.rows[0]);
});



