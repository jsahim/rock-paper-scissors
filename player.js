class Player {
  constructor(playerName){
    this.name = playerName
    this.wins = 0
  }
  takeTurn(event, userSpell) {
    var spellsArray = ["bombarda", "ebublio", "diffindo", "serpensortia", "expelliarmus"]
    var userChoice
    var compChoice
    if (currentGame.type === "classic"){
      userChoice = userSpell
      compChoice = spellsArray[Math.floor(Math.random() * 3)]
      console.log(userChoice, compChoice)
    } else if (currentGame.type === "difficult") {
      userChoice = userSpell
      compChoice = spellsArray[Math.floor(Math.random() * spellsArray.length)]
      console.log(userChoice, compChoice)
    }
    currentGame.findWinner(userChoice, compChoice)
  }
}