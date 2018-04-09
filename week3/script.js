//String and Array challenges
//1-string
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
myString.length;
console.log(myString.length);
let obj = { sentence:'hello this is a difficult to read sentence'};
console.log(obj.sentence);
//2-array


let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
var i;
for (i = 0; i < favoriteAnimals.length; i++){
    if (favoriteAnimals === 'blowfish'){
      favoriteAnimals.push('meerkat');
    }
  console.log(favoriteAnimals);
}

console.log(favoriteAnimals);




