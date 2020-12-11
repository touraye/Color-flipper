const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const color = document.getElementById('color');
const btn = document.getElementById('btn');


btn.addEventListener('click', () => {
  // console.log(randomColor());
  document.body.style.backgroundColor = colors[randomColor()];
  color.textContent = colors[randomColor()];
});

// get random colors
function randomColor(){
  return Math.floor(Math.random() * colors.length)
}
