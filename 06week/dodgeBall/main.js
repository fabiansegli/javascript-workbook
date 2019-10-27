const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const dodgeBallPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class Player {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
      this.id = id;
      this.name = name;
      this.age = age;
      this.skillSet = skillSet;
      this.placeBorn =placeBorn;
      this.canThrowBall = canThrowBall;
      this.canDodgeBall =canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy =isHealthy;
      this.yearsExperience = yearsExperience;
    }
    joinBlueTeam(blueTeam) {
      this.blueTeam = blueTeam
    }
    joinRedTeam(redTeam) {
      this.redTeam = redTeam
    }
  }
  class blueTeammate {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
      this.id = id;
      this.name = name;
      this.age = age;
      this.skillSet = skillSet;
      this.placeBorn =placeBorn;
      this.canThrowBall = canThrowBall;
      this.canDodgeBall =canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy =isHealthy;
      this.yearsExperience = yearsExperience;
      this.mascot = mascot;
      this.teamColor = teamColor;
    }
  }
  class redTeammate {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
      this.id = id;
      this.name = name;
      this.age = age;
      this.skillSet = skillSet;
      this.placeBorn =placeBorn;
      this.canThrowBall = canThrowBall;
      this.canDodgeBall =canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy =isHealthy;
      this.yearsExperience = yearsExperience;
      this.mascot = mascot;
      this.teamColor = teamColor;
    }
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  const makePlayer = (person) => {
    const dodgeBallPlayer = new Player(person.id, person.name, person.age, person.skillSet, person.placeBorn, true, true, true, true, 5)
    console.log(dodgeBallPlayer)
    dodgeBallPlayers.push(dodgeBallPlayer)
    console.log(dodgeBallPlayers)
    const listItems = document.getElementById('players')
    listItems.innerHTML = ''
    dodgeBallPlayers.map(player => {
      const li = document.createElement('li')
      const redButton = document.createElement('button')
      const blueButton = document.createElement('button')
      redButton.innerHTML = 'Join the red team'
      blueButton.innerHTML = 'Join the blue team'
      blueButton.addEventListener('click', function(){joinBlueTeam(player)})
      redButton.addEventListener('click', function(){joinRedTeam(player)})
      li.appendChild(redButton)
      li.appendChild(blueButton)
      li.appendChild(document.createTextNode(player.name))
      listItems.append(li)

    })
  }

  const joinBlueTeam = (player) => {
  const bluePlayer = new blueTeammate(player.id, player.name, player.age, player.skillSet, player.placeBorn, true, true, true, true, 5, 'Tiger', 'Blue')
  console.log(bluePlayer)
  blueTeam.push(bluePlayer)
  console.log(blueTeam)
  const blueTeamPlayers = document.getElementById('blue')
  blueTeamPlayers.innerHTML = ''
  blueTeam.map(player => {
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(player.name)) 
  blueTeamPlayers.append(li)
  })
}
const joinRedTeam = (player) => {
  const redPlayer = new redTeammate(player.id, player.name, player.age, player.skillSet, player.placeBorn, true, true, true, true, 5, 'Tiger', 'Blue')
  console.log(redPlayer)
  redTeam.push(redPlayer)
  console.log(redTeam)
  const redTeamPlayers = document.getElementById('red')
  redTeamPlayers.innerHTML = ''
  redTeam.map(player => {
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(player.name)) 
  redTeamPlayers.append(li)
  })
}
  // constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)