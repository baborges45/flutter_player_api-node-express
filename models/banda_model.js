const mongoose = require('mongoose');

const musicaShema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    nome: String,
    imagem: String,
    url: String
});

const bandaShema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    nome: String,
    imagem: String,
    musicas: [musicaShema]
});

module.exports = mongoose.model('Banda', bandaShema);