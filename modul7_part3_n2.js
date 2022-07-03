function strInObj(str, obj) {
  if (str in obj){
    return true;
  }
  else {
    return false;
  }
} 
 


let char = {};
char.a = 1;
char.b = 2;
char.c = 3;

console.log(strInObj('a', char));