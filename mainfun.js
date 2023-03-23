
var x,y,z;
function randPoz() {
  x = 0;
  y =  Math.random(40) -20;
  z = 0; 
  return(x,y,z);
}

const gg = document.querySelector('#svin');
function OnClik() {
    gg.addEventListener('onclick', () => {
        gg.setAttribute("position",`{0} {y+1} {0}` )
    });
}
