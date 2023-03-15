const superheroes = require('superheroes');
const supervillains = require('supervillains');

superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
my_superhero = superheroes.random();
my_supervillain = supervillains.random();
//=> 'Spider-Ham'
console.log(my_superhero + " vs " + my_supervillain)