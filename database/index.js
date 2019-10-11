const mongoose = require ('mongoose');
const faker = require ('faker');

mongoose.connect('mongodb://localhost/gallery');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', () => {
    console.log('Connected to DB')
});

var Schema = mongoose.Schema;

var imgSchema = new Schema({
    url: String,
    listingId: Number,
    pictureId: Number,
    caption: String
});

var Gallery = mongoose.model('Galleries', imgSchema);

var test = {
    url: 'skdksdk'
}
const filter = {listingId: 0};
const update = {caption: 'hi Vita'};
Gallery.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true
}, (err, doc) => {
    if (err) {
        console.log(err);
    }
});

console.log(faker.image.animals());