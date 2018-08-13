/***************** Node and 3rd party modules *****************/
const express = require('express');

/********************* Personnel Modules **********************/

/**************************** Init ****************************/
const app = express();
const port = process.env.PORT || 3000;

/**************************** Code ****************************/
app.get('/', (req, res) => {
    res.send('Hello world');
    
});

app.listen(port, () => {
    console.log(`server running on port : ${port}`);
    
});