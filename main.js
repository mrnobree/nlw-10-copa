function createGame(player1, hour, player2) {
  return `
  <li>
     <img src="/assets/flags/${player1}.svg" alt="icon ${player1}" />
     <strong>${hour}</strong>
     <img src="/assets/flags/${player2}.svg" alt="icon ${player2}" />
  </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
   <div class="card" style="animation-delay: ${delay}s">
     <h2>${date}<span>${day}</span></h2>
       <ul>
         ${games}
       </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard("02/12", "sexta", createGame("cameroon", "16:00", "brazil"))
