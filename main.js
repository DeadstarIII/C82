var mouseevent = "empty";
var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 1;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;
  mouseevent = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  current_position_of_mouse_y = e.clientY - canvas.offsetTop;
  if (mouseevent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    console.log("Last position of x is = " + last_position_of_x + ", last position of y is = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x is = " + current_position_of_mouse_x + ", current position of y is = " + current_position_of_mouse_y);

    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);

    ctx.stroke();
    
}
last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}

function clearArea () {
    ctx.clearRect(0,0, canvas.width, canvas.height);
}