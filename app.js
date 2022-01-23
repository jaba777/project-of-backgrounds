const hex = ['red','green','cyan','yellow','black','blue'];
const BTN = document.getElementById('btn');
const Color = document.querySelector('.color');

function GetCount(){
    const Randomnumber=getColor();
    let hexColor=hex[Randomnumber];
  Color.textContent = hexColor;
  Color.style.color=hexColor;
  if(hexColor==='black'){
    Color.style.color='white';
  }
  document.body.style.background = hexColor;
}

function getColor(){
  return Math.floor(Math.random() * hex.length);
}

BTN.addEventListener('click', GetCount);
