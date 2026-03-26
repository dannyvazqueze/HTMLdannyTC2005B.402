import express from "express"

const app = express();

app.use(express.static("public"));

app.listen(3000, console.log("http://localhost:3000"));
// localhost
// 127.0.0.1