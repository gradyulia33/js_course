'use strict'
const object = {
	  a:'1',
    b:'2', 
    c:'3', 
    d:'4',
    e:'5'};
const word = [ 'b', 'c', 'd'];
function removeKeys1(object, word){
  for (let i in object){
    let k = word.includes(i);
    if(k){
      delete object[i];
    }
  }
   	return object;
   };


const object1 = {};
function removeKeys2(object1, word){
	return  object1 = removeKeys1(object, word);
   }

let a = 3;
let b = 7;
function absDiff(a) {
	function abs2(b){
		console.log(abs2())
	}	return b - a
	}
  console.log(absDiff(a));