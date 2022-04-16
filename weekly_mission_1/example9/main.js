const Pokemon = require('./pokemon')

const pikachu = new Pokemon("pikachu")
const bulbasaur = new Pokemon("bulbasaur")
const squirtle = new Pokemon("squirtle")
const charmander = new Pokemon("charmander")
const Vaporeon = new Pokemon("Vaporeon")

pikachu.sayHello()
pikachu.sayMessage("me gustas las fresas")

bulbasaur.sayHello()
bulbasaur.sayMessage("me gustan las plantas")

charmander.sayHello()
charmander.sayMessage("me gusta el fuego")

squirtle.sayHello()
squirtle.sayMessage("me gusta jugar con bulbasaur")


Vaporeon.sayHello()
Vaporeon.sayMessage("me gusta el agua")