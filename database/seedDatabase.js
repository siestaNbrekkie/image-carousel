const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/photos');

const db = mongoose.connection;

db.on('err', console.error.bind('err'));
db.once('open', () => {console.log('DB Connected')});

var Schema = new mongoose.Schema({
    listingId: Number,
    photoId: Number,
    caption: String,
    photoUrl: String
});

var Photo = mongoose.model('Photos', Schema);

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