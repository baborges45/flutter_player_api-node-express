const mongoose = require('mongoose');

const musicShema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    image: String,
    url: String
})