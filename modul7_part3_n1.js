function keyValue(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}, ${obj[key]}`);
    }   
 
  }
} 
 


let word = {
 abc: "123"
}

let char = Object.create(word);
char.a = 1;
char.b = 2;
char.c = 3;

keyValue(char);