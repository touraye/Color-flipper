const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.getElementById('color');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
// console.log(getRandomNum());
let hexColor = '#';
for(let i = 0; i < 6; i++){
  hexColor += hex[getRandomNum()];
}
document.body.style.backgroundColor = hexColor;
color.textContent = hexColor;
});

function getRandomNum(){
  return Math.floor(Math.random() * hex.length);
}
