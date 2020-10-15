const express = require('express');
var cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, reponse) => {
    reponse.json({message: 'running'})
})

app.post('/cats', (request, reponse) => {
    setTimeout(() => {
        console.log('waited some random time');
        reponse.json({
            url: request.body.url,
            number: 42
        })
    }, randomInt(3000, 6000));
})

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = app
