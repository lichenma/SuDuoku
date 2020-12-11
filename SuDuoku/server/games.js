// storing current moves in following array 
const games = []

const addGame = ({ room }) => {
    room = room.trim().toLowerCase(); 
    moves = '{}'
    const game = { room , moves }; 

    games.push(game); 

    return { game }; 
}

const updateGame = ({ room, moves }) => {
    room = room.trim().toLowerCase(); 

    const game = games.find((game) => game.room === room) || addGame({room: room}); 

    if (!room){
        return { error: 'Room is required.' }; 
    }
     
    game.moves = moves
    return game; 
}

const removeGame = (room) => {
    const index = games.findIndex((game) => game.room === room); 
    // when the last user leaves we should clear the room data 
    if (index !== -1){
        return games.splice(index, 1)[0]; 
    }
}


const getGame = (room) => games.find((game) => game.room === room); 

const existingGame = (room) => {
    return games.filter(game => game.room === room).length > 0
}

module.exports = { addGame, updateGame, removeGame, getGame , existingGame }; 