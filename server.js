const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/form', (req, res) => {
    console.log(req.body);
    const data = JSON.stringify(req.body);
    console.log('Data Received:' + data);
    res.send(req.body);
});

console.log('Server is running on', process.env.PORT || 3000, process.env.IP || '0.0.0.0');

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );