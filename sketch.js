
/*let a = "12345678";
const array = [];
for (let i = 0; i < a.length; i+=2) {
  array.push(a.substr(i, 2));
  
}

console.log(array.toString());*/

const polybiusTabel = [
  [' ', '1', '2', '3', '4', '5'],
  ['1', 'a', 'b', 'c', 'd', 'e'],
  ['2', 'f', 'g', 'h', 'i', 'j'],
  ['3', 'k', 'l', 'm', 'n', 'o'],
  ['4', 'p', 'q', 'r', 's', 't'],
  ['5', 'u', 'v', 'w', 'x', 'y'],
  ['6', 'z', ' ', '!', '?', '-'],
  
];

function encrypt(){
  let input = document.getElementById("input_string").value.toLowerCase();
  let result = "";

  //encrypt each character
  for(let tempChar of input){
    for (let y = 1; y <= 6; y++){
    let index = polybiusTabel[y].indexOf(tempChar).toString();
    if (index != -1) {
       result += index + y;
      } 
    } 
  }
  
  console.log(result);
}

function decrypt() {
  let input = document.getElementById("input_string").value;

}