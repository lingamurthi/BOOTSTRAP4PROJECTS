const express = require('express');
const app = express();
app.get('/', (req, res) => {   
    res.send("Welcome")
});

app.listen(5501,()=>{
    document.write("port is listening at 8000")
});