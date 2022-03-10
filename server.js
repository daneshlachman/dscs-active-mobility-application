import express from "express";
import ejs from "ejs";
import fs  from 'fs';
import readline from'readline';


const app = express();
app.use(express.static("Static"))
app.set("view engine", "ejs")
app.set("views", "view")
app.get('/', onhome)
app.get('/about', onabout)
app.get("*", onerror)

app.listen(3000)


//GET, PUT POST,DELETE 
function onhome (req,res) {
    res.render("index.ejs")

}

function onabout (req,res) {
    res.render("index.ejs")
    
    }

    function onerror (req,res) {
        res.send("error")
        
        }


