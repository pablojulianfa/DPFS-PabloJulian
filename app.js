const express = require("express")
const path = require("path")
const app = express();
const port = 4000


app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req, res)=> {
    res.sendFile(path.join(__dirname, "views" ,"home.html"))
});

app.get("/login",(req, res)=> {
    res.sendFile(path.join(__dirname, "views" ,"login.html"))
});

app.get("/register",(req, res)=> {
    res.sendFile(path.join(__dirname, "views" ,"register.html"))
});

app.get("/new-product",(req, res)=> {
    res.sendFile(path.join(__dirname, "views" ,"addProduct.html"))
});

app.listen(port,()=>console.log("Servidor corriendo en http://localhost:" + port))