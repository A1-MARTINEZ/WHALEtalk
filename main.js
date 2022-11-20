//WHALETalk

let input = 'turpentine and turtles';
var vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (let i = 0; i < input.length; i++) {
  const phrase = input[i];
  
  if (phrase === 'e'){
  resultArray.push(phrase);

  }else if (phrase === 'u'){
      resultArray.push(phrase);
  }
  
  for (let j = 0; j < vowels.length; j++) {
   const letters = vowels[j];
   
   if(phrase === letters){

    resultArray.push(phrase);

    }
   }
}

let resultString = resultArray.join('');
let result = resultString.toUpperCase();
console.log(result);
