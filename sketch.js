let gameNumber = prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game", "1,2, or 3")
const gamesList = [
    {title: 'Ping Pong', type: 'sport game', numberOfPlayers: '2-4 people', shortDescription:'Ping pong is the most played recreational sport in China, with over 300 million players.'},
    {title: 'Chinese Yo-yo', type: 'skill game', numberOfPlayers: '1 person',shortDescription:'Chinese Yo-yo is an hourglass shaped item that is spun on a string. The string is connected to two hand sticks.' },
    {title: 'Deuces', type: 'card game', numberOfPlayers: '3-6 people',shortDescription:'Big two is a card game of Chinese origin. It is similar to the games of president, crazy eights, cheat, winner, and other shedding games. '},
]
console.log(gamesList); 
alert('You have selected "' + gamesList[gameNumber].title + '"!' + ' It is a ' + gamesList[gameNumber].type + ', and ' + gamesList[gameNumber].numberOfPlayers + ' can play.')