const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, reponse) => {
    reponse.json({message: 'running'})
})

app.post('/cats', (request, reponse) => {
    reponse.json({
        name: request.body.name,
        url: request.body.url,
        howMany: 1
    })
})

module.exports = app
