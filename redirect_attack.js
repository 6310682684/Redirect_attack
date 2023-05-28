const { log } = require('console');
const express = require('express')
const fs = require('fs');

const app = express();

app.get('/', (request, response) => {

    fs.readFile('./redirect_index.html', 'utf8', (err,html) => {

        response.send(html);
    })


});

app.get('/login', (request, response) => {

    fs.readFile('./path_redirect.html', 'utf8', (err,html) => {

        response.send(html);
    })


});


app.listen(8000, '0.0.0.0', () => console.log(`running on : http://127.0.0.1:8000/ `))

