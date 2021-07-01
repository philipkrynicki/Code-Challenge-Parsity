// const findSum = function(array) {
//   // your code here - don't forget to return a number!
// };

let numberArray = [ 1, 2, 3 ];

function findSum(array) {
  let sum = 0;
    for(let i = 0; i < numberArray.length; i++){
    sum += numberArray[i];
  }
   return sum;
}

var sums = findSum(numberArray);
console.log(sums);

// const findFrequency = function(array) {
//   // your code here - don't forget to return an object!
// };


let frequencyArray = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd'];
findFrequency(frequencyArray);
console.log( findFrequency(frequencyArray)  );

function findFrequency(array) {


  let tempArray = [];
  let tempArray_counts = [];
  
  for(let i = 0; i < array.length; i++){
    
    if( !tempArray.includes( array[i] ) ){
      tempArray.push( array[i] )
    }
    
  }
  
    for( let i = 0; i < tempArray.length; i++ ){  
      var count = 0;
      
      for(let z = 0; z < array.length; z++){
        if( array[z] == tempArray[i]){
          count++;
        }
        tempArray_counts[i] = count;
      }  
      
    }

  let least = tempArray_counts[0];
  let leastIndex = 0;
  let most = 0;
  let mostIndex;
  for( let y = 0; y < tempArray_counts.length; y++ ){
    if( tempArray_counts[y] > most){
      most = tempArray_counts[y]; 
      mostIndex = y;
    }
    
    if( tempArray_counts[y] < least){
      least = tempArray_counts[y]; 
      leastIndex = y;
    }
  }
  
  return  { most: tempArray[mostIndex], least: tempArray[leastIndex] }

}

// const isPalindrome = function(str) {
//   // your code here - don't forget to return a boolean!
// };

var text  = "0";

console.log( isPalindrome(text) );
function isPalindrome(str) {
  // your code here - don't forget to return a boolean!
  
  var str_size = str.length;
  var middleIndex = str_size/2
  
  if(str_size % 2 == 0){
     for(let x =0; x< str_size/2; x++){
       if( str.charAt(x )== str.charAt( str_size - 1 - x)  ){
         //good just keep going
       }
       else{
         // stop now and return false;
        return false;
       }
     }
    return true;
  }else{
    
         for(let x =0; x< Math.floor(str_size/2); x++){
       if( str.charAt(x )== str.charAt( str_size - 1 - x)  ){
         //good just keep going
       }
       else{
         // stop now and return false;
        return false;
       }
     }
        return true;
}
  
  console.log(part1)
  console.log(part2)
}



// ## Problem 4 - Worth 3 Points
// Write a function called `largestPair` that takes an array of integers and finds the pair of adjacent elements that has the largest product and return that product.
// For example:

// ```js
largestPair([5, 1, 2, 3, 1, 4]); // 6
largestPair([9, 5, 10, 2, 24, -1, -48]) // 50

 function largestPair (array) {
  // your code here - don't forget to return a number!
  let result = array[0] * array[1];
    for (let i=1; i<array.length - 1; i++) {
      let n1 = array[i];
      let n2 = array[i + 1]
      // console.log(n1, n2);
      let m = n1 * n2;
      // console.log(m);
      if(m > result) {
        result = m;
      }
    }
  console.log(result);
  return result
};

// <!-- ## Problem 5 - Worth 3 Points
// Write a function called `removeParenth` that takes one argument (a string) which has parentheses (1 open and 1 close) and returns that same string, but without the parentheses and the text inside the parentheses. You can assume that the string is one word with no spaces and only 1 set of parentheses.
// For example:


removeParenth('ido(not)liketocode'); // 'idoliketocode'
removeParenth('zido(not)liketocode'); // 'zidoliketocode'

function removeParenth(str) {
  // your code here - don't forget to return a string!
  let c = str.indexOf("(");
  let d = str.indexOf(")");
  console.log(c, d);
  // newStr = str.substr(1, str.length);

  let s1 = str.slice(0 , c)
  console.log(s1);
  let s2 = str.slice(d + 1, str.length)
  console.log(s2);
  let result = s1 + s2;
  console.log(result);
  return result;
};

const scoreScrabble = function(str) {
  let sum = 0;

  const pointValues = {
    1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
    2: ['d', 'g'],
    3: ['b', 'c', 'm', 'p'],
    4: ['f', 'h', 'v', 'w', 'y'],
    5: ['k'],
    8: ['j', 'x'],
    10: ['q', 'x'],
  };

  str.split('').forEach(function (a) {
    Object.keys(pointValues).forEach(function (b) {
      pointValues[b].forEach(function (letter) {
        if (a === letter) {
          sum += parseInt(b);
        }
      });
    });
  });
    return sum;
};


console.log(scoreScrabble('facebook'));
console.log(scoreScrabble('hellohello'));
