const express = require('express');
const path = require('path');
const Photo = require("../database/model.js");

const PORT = 3001;
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', express.static(path.join(__dirname, '../public')));

app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));

app.get('/:id', (req, res) => {
    Photo.find({listingId: req.params.id})
    .then(data => res.send(data));
});
app.listen(PORT, () => { console.log('Express is Listening on :', PORT)});