
exports.getPlayers = (filteredPlayers, team) => {
    if(team === true){
        return filteredPlayers.map(({name, position, nation, club}) => ({name, position, nation: nation.name, team: club.name}));
    } else {
        return filteredPlayers.map(({name, position, nation}) => ({name, position, nation: nation.name}));
    }
}

exports.orderedName = (name) => {
    return name.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
}

exports.getOrderedPlayers = (Players, order) => {
    if(order === 'desc'){
        return Players.sort((a, b) => b.name.localeCompare(a.name));
    } else {
        return Players.sort((a, b) => a.name.localeCompare(b.name));
    }
    
}

exports.addToDB = async (Player, Players) => {
    await Player.insertMany(Players)
}