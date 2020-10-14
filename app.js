const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, reponse) => {
    reponse.json({message: 'running'})
})

app.post('/cats', (request, reponse) => {
    setTimeout(() => {
        console.log('waited some random time');
        reponse.json({
            name: request.body.name,
            url: request.body.url,
            howMany: 1
        })
    }, randomInt(3000, 6000));
})

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = app
