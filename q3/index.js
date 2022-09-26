const express = require('express');
const path = require('path');
const app = express();


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
            <form>
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

app.listen(3000);