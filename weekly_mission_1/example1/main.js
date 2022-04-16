// 1. Creación de un objeto con propiedades

let myCar = new Object(); // Creación de un objeto
myCar.made_by = 'Ford y Honda'; // Guardando un valor dentro del objeto creado
myCar.model = 'Camaro';
myCar.year = 1969;

console.log(myCar) // Imprimiendo objeto

// 2. Declaración de un objeto con variables locales y públicas

const myModule = (() => {

// Variables de contexto local
 const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
 const privateBar = [1,2,3,4]
 const baz = "Soy un valor que va a ser expuesto"

// Variable para guardar las variables locales
 const exported = {
   publicFoo: "Valor público, pueden verme desde donde me llamen",
   publicBar: privateBar,
    publicBaz: baz,
    publicFou: privateFoo
    
    
 }

// Exposición de variables locales
 return exported
})()

console.log(myModule)