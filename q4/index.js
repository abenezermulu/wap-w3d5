const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ "extended" : false }));

const date_ob = new Date();
const hour = date_ob.getHours();

if(hour > 6 && hour < 18){
    app.use('/css', express.static(path.join(__dirname, 'css', 'day.css')));
}else {
    app.use('/css', express.static(path.join(__dirname, 'css', 'night.css')));
}

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <link href="/css" rel="stylesheet"/>
        </head>

        <body>
            <form method='POST' action='/result'>
                <label>Name</label>
                <input type='text' name='name' />
                
                <label>Age</label>
                <input type='text' name='age' />
                
                <input type='submit' value='Submit' />
            </form> 
        </body>
    </html>
    `);
});

app.post("/result", (req, res) => {
    res.redirect(303, `/output?name=${req.body.name}&age=${req.body.age}`);
});

app.get("/output", (req, res) => {
    let name = req.query.name; 
    let age = req.query.age; 
    res.send(`Welcome ${name}, ${age}`)
});

app.listen(3000);