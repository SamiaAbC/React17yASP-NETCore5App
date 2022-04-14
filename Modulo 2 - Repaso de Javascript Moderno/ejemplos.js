//console.log('Hola mundo');

//Diferencia entre var, let y constant

let myFunction = function duplicar (valor){
    return valor *2;
}

let duplicar = (valor) => {
    return valor * 2;
}

let duplicar2 = valor => valor * 2;

//console.log(myFunction(2));

const Persona = {
    nombre: 'Sonia', 
    apellido: 'Perez', 
    edad: 40
}

//const pais = 'RD';
//pais = 'Spain'; //No podemos reasignar la variable definida como const

Persona.nombre = 'Sara';
//console.log(Persona);


//Template Strings
let apellido = 'Takahashi';
const saludo = `Hola, ${apellido}, ¿cómo estás?`;
const saludo2 = "Hola, " + apellido + ", ¿cómo estás?";
const pais = 'Japan';

let sumar = (num1, num2) => num1+ num2;

const mensaje = `Hola, ${apellido}, 

Esta es una carta desde ${pais}.

Queremos informarte que la suma de 4 y 6 son: ${sumar(4,6)}

Saludos cordiales
`;

//console.log(mensaje);

//Operador Ternario
let edad = 16;
let mensajillo = edad >= 18 ? 'Puedes pasar' : 'No puedes pasar';

//console.log(mensajillo);

let paisProp = 'paisillo';

const personilla = {
    edadcilla: 42,
    [paisProp]: pais,
    funcionNormalilla: function (){},
    arrowFunction: () => {},
}
//console.log(personilla);

const retornaValoresPersonilla = (props) => personilla[props];
//console.log(retornaValoresPersonilla('edad'));

const {edadcilla, paisillo} = personilla;

console.log (edadcilla);

obtenerDirecction = () => {
    return {
        calle: 'Mi calle', 
        Num: 'Mi num',
        Piso: 'Mi piso'
    }
}

const {calle, Num, Piso} = obtenerDirecction();

//console.log(calle, Num, Piso);

imprimirNombre = (Persona) =>{
    console.log(Persona.nombre);
}

imprimirNombre2 = ({nombre}) => {
    console.log(nombre);
}

//imprimirNombre(Persona);
//imprimirNombre2(Persona);
const myArray = [1, 2, 3, 4, 5];

const [primero, segundo,, siguiente] = myArray;

//console.log(primero);
//console.log(siguiente);

//Spread Operator

const Animal = {
    edadin: 2,
    color: 'naranja',
    nombre: 'Tiñina'
}

const {edadin, ...Animal2} = Animal;
const Animal3 = {...Animal};

//console.log(Animal2.edadin);
//console.log(Animal3.edadin);

//MAP
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((val) => val * val);

const people = [
    {id: 1, nombre: "Felipa", pais: "RD"},
    {id: 2, nombre: "Claudia", pais: "Uganda"},
    {id: 3, nombre: "Francesco", pais: "Cuba"},
];

const losids = people.map((value => value.id));

const nombresYPais = people.map(value => {
    return {
        nombrecillos: value.nombre, 
        pais: value.pais
    }
})

const divs = people.map(value => 
    `<div>
        <span>${value.nombre} (país: ${value.pais}</span>
    </div>`)
console.log(divs);


//<></>
