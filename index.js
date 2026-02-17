import express from "express"

const app = express();

app.use(express.static("public"));

app.listen(4000, console.log("http://localhost:4000"));
// localhost
// 127.0.0.1