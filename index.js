
/***** Deliverable 1 *****/
const header = document.getElementById("header")
console.log("Here's your header:", header)

 
/***** Deliverable 2 *****/

header.style.color = "red";

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

let playerContainer = document.getElementsByClassName('player-container')[0]

    for (let i = 0; i < PLAYERS.length; i++) {

       let playerDiv = document.createElement('DIV')
       console.log(playerDiv)
       playerDiv.className = 'player'
       playerDiv.setAttribute('data-number', PLAYERS[i].number)

       let playerInfo = `
       <h3>${PLAYERS[i].name} (<em>${PLAYERS[i].nickname}</em>)</h3>
       <img src="${PLAYERS[i] image}" alt="${PLAYERS[i].name}">
       `
    }


/***** Deliverable 4 *****/