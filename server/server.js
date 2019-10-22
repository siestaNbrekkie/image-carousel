const express = require('express');
const path = require('path');
const Photo = require("../database/model.js");

const PORT = 3001;

const app = express();

app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));

app.get('/:id', (req, res) => {
    Photo.find({listingId: req.params.id})
    .then(data => res.send(data));
});
app.listen(PORT, () => { console.log('Express is Listening on :', PORT)});