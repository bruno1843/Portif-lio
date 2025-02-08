//const mainLo = require('lodash');
import _ from 'lodash';

let frase = "Esta frase é um exemplo";
let fraseKenabCase = _.kebabCase(frase);
console.log(fraseKenabCase);

frase = "Este é um titulo Ficticio para um artigo";
fraseKenabCase = _.kebabCase(frase);
console.log(fraseKenabCase);