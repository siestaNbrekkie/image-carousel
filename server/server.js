const express = require('express');
const path = require('path');
const controller = require('../database/index.js');

const PORT = 3001;

const app = express();

app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));

app.get('/:id', (req, res) => {
    controller.getAll(req.params.id, res);
});
app.listen(PORT, () => { console.log('Express is Listening on :', PORT)});