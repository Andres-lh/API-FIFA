const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    nation: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: false
    }
}) 

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;