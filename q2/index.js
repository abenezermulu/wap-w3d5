const express = require("express");
const app = express();

app.use(express.urlencoded({ "extended" : false }));

app.get("/", (req, res) => {
  res.send(`
        <form method='POST' action='/result'>
            <label>Name</label>
            <input type='text' name='name' />
            
            <label>Age</label>
            <input type='text' name='age' />
            
            <input type='submit' value='Submit' />
        </form> 
    `);
});

app.post("/result", (req, res) => {
  res.send(`Welcome ${req.body.name}, ${req.body.age}`);
});

app.listen(3000);