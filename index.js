console.log("Salut tout le monde");

const personne = require('./personne');
console.log(personne.nom);
console.log('tu as '+personne.age)+ ' ans';

const Personne = require('./classPersonne');
const paul = new Personne('Paul Larue',38);
paul.salut();
var bob = new Personne('Bob Larue',33);
bob.salut();