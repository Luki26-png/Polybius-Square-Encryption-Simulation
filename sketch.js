
const polybiusTabel = [
  [' ', '1', '2', '3', '4', '5'],
  ['1', 'a', 'b', 'c', 'd', 'e'],
  ['2', 'f', 'g', 'h', 'i', 'j'],
  ['3', 'k', 'l', 'm', 'n', 'o'],
  ['4', 'p', 'q', 'r', 's', 't'],
  ['5', 'u', 'v', 'w', 'x', 'y'],
  ['6', 'z', ' ', '!', '?', '-'],
  
];

const encryptErrorControl = [
  'a', 'b', 'c', 'd', 'e',
  'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y',
  'z', ' ', '!', '?', '-'
]

function encrypt(){
  let input = document.getElementById("input_string").value.toLowerCase();
  let result = "";

  for(let char of input){
    if (!encryptErrorControl.includes(char)) {
        window.alert("Masukkan karakter yang terdapat pada tabel kecuali angka untuk melakukan enkripsi");
        return;
        break;
    }
}
  //encrypt each character
  for(let tempChar of input){
    for (let y = 1; y <= 6; y++){
    let index = polybiusTabel[y].indexOf(tempChar).toString();
    if (index != -1) {
       result += index + y;
      } 
    } 
  }
  
  document.getElementById('result').innerHTML = result;
}

function decrypt() {
  let input = document.getElementById("input_string").value.toLowerCase();
  let result = "";

  //ubah string angka menjadi array bilangan puluhan
  const encryptedMessage = [];
  for (let i = 0; i < input.length; i+=2) {
    encryptedMessage.push(input.substr(i, 2));
  }

  for (let i = 0; i < encryptedMessage.length; i++) {
    let x = encryptedMessage[i][0];
    let y = encryptedMessage[i][1];
    result += polybiusTabel[y][x];   
  }

  document.getElementById('result').innerHTML = result;
}