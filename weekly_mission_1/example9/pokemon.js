class Pokemon {
    constructor(name){
        this.name=name
    }

    sayHello (message) {
        console.log(`mi pokemon: ${this.name} te esta saludando`)
    }

    sayMessage (message) {
        console.log(`mi pokemon: ${this.name} dice ${message}`)
    }



}



module.exports = Pokemon
