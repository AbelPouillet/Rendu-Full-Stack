const mongoose = require('mongoose');

const CharacterSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthYear: { type: Number, required: true }
});

module.exports = mongoose.model('Character', CharacterSchema);