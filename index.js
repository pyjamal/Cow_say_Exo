const myInformation = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
	text : `I'm ${myInformation.nom} from ${myInformation.campus}`,
	e : "oO",
	T : "U "
}));

