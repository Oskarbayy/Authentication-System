const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../templates"))

app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.listen(3000, ()=> {
    console.log("Port connected")
})