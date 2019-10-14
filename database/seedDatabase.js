const mongoose = require('mongoose');
const faker = require('faker');
const Photo = require('./Model.js')

mongoose.connect('mongodb://localhost/photos');

const db = mongoose.connection;

db.on('err', console.error.bind('err'));
db.once('open', () => {console.log('DB Connected')});




var data = [];
for (var i = 0; i < 10; i++) {
   for( var j = 1; j < 11; j++) {
       var picture = {
           listingId: i,
           photoId: j,
           caption: faker.lorem.words(),
           photoUrl: faker.image.animals()
       }
       data.push(picture);
   }
};

Photo.insertMany(data);
