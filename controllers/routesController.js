const axios = require('axios');
const Player = require('../models/playerModel.js');
const { getPlayers, orderedName, getOrderedPlayers, addToDB } = require('../utils/helpers.js');

exports.team = async (req, res) => {
    const { Name, Page } = req.body;

    try {
        const data = await axios.get(`https://www.easports.com/fifa/ultimate-team/api/fut/item?page=${Page}`)
        const { page, totalPages, items } = data.data;

        let filteredPlayers = items.filter((player) => {
            return player.club.name === orderedName(Name);
        })

        const Players = getPlayers(filteredPlayers, false);
        const teamPlayers = getPlayers(filteredPlayers, true);

        addToDB(Player, teamPlayers);

        res.json({
            Page: page,
            totalPages,
            totalItems : Players.length,
            Players    
        })
        
    } catch (error) {
        res.json(error)
    }
}

exports.players = async (req, res) => {

    const { search, order, page } = req.query;

    try {
        const data = await axios.get(`https://www.easports.com/fifa/ultimate-team/api/fut/item?page=${page}`);

        const { totalPages, items } = data.data;

        const filteredPlayers= items.filter(i => {
            return i.name.toLowerCase().includes(search.toLowerCase());
        })

        const Players = getPlayers(filteredPlayers, true);

        const orderedPlayers = getOrderedPlayers(Players, order);

        addToDB(Player, orderedPlayers);

        res.json({
            Page: page,
            totalPages,
            items: orderedPlayers.length,
            Players: orderedPlayers
        })

    } catch (error) {
        res.json({error})
    }
}