const client = require('../DatabaseConnection/Connection')
const express = require("express");
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();


const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/items', (req, res)=>{
    client.query(`Select * from items`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
client.connect();