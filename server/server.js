/***************** Node and 3rd party modules *****************/
const express = require('express');

/********************* Personnel Modules **********************/

/**************************** Init ****************************/
const app = express();
const port = process.env.PORT || 3000;

/**************************** Code ****************************/
app.get('/', (req, res) => {
    res.status(404).send({
        error : 'Page not found',
        name : 'Todo v1.0'
    });
    
});

app.get('/users', (req, res) => {
    res.send([{
        name : 'Adel',
        age : '22'
    },{
        name : 'musphilo',
        age : '23'
    },{
        name : 'bocka',
        age : '90'
    }]);
    
});

app.listen(port, () => {
    console.log(`server running on port : ${port}`);
    
});

module.exports.app = app;