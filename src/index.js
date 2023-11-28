// get modules
const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const constructor = require("./mongodb") // get the module with the constructor function

app.use(express.json()) // setup middleware
app.set("view engine", "hbs") // use handlerbar templates
app.set("views", path.join(__dirname, "../templates")) // change the default 'views' folder to the 'templates' folder
app.use(express.urlencoded({extended:false}))

// Connections
app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup", async (req,res) => { // connection to '/signup' action in signup.hbs (with async so its a promise)
    // Store in database
    const data = {
        name: req.body.name,
        password: req.body.password
    }

    console.log(data)
    console.log(constructor)

    await constructor.insertMany([data])

    // await for it to be inserted into the database and then render home page

    res.render("home")

})

app.listen(3000, ()=> {
    console.log("Port connected")
})