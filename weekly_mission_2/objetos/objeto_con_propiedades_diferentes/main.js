const myObject3 = {
    name: "Tulio",
    age: 2,
    nicknames: [
     "Tulipan",
      "Tulancingo",
      "Tulish"
    ],
    address: {
      zip_code: "10000",
      street: "Dr. Vertiz 11 Benito Juarez",
      city: "CDMX"
    },
    traits: {
        skinny: "white",
        eyes_color: "blue",
        hair_color: "black"
    },
  }
  console.log("Ejemplo 3: Objeto con diferentes propiedades")
  console.log(myObject3)
  console.log(myObject3.name)
  console.log(myObject3["address"])
  console.log(myObject3["traits"])