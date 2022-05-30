var main = document.getElementById("body"),
  display = document.getElementById("time"),
  hex = document.getElementById("hex"),
  color
var update = ()=>{
/*
  date = new Date();
  if (date.getSeconds() < 10) {
    sec = "0" + date.getSeconds();
  } else {
    sec = date.getSeconds();
  }
  if (date.getMinutes() < 10) {
    min = "0" + date.getMinutes();
  } else {
    min = date.getMinutes();
  }
  if (date.getHours() < 10) {
    hour = "0" + date.getHours();
  } else {
    hour = date.getHours();
  }
*/

  //display.innerHTML = hour + " : " + min + " : " + sec;


  color = Math.round(Math.random()*255*255*255)
  color=color.toString(16)
  while (color.length<5) {
    color='0'+color;
  }
  //display.innerHTML=color
  main.style = "background-color:#" + color;
  hex.innerHTML = '#' + color;
}
update()
