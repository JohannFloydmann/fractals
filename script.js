
var pal;
var A,B,h;

function onGo() {  
  get('message').innerHTML = "working...";
  setTimeout(redraw,1);
}
  
function redraw() {  
  A = +get("cx").value;
  B = +get("cy").value;
  h = +get("h").value || 3;
  pal = +get("pal").value || 15;
  
  var f = 300/h;
  var s = 1/f;
  
  for (var x = A-h; x < A+h; x+=s) {
     for (var y = B-h; y < B+h; y+=s) {       
        plot(mandel(x,y),s*f,(x-A+h)*f,(y-B+h)*f); 
     }
  }  
  // Draw palette on top line
  for (var x = 0; x < 255; ++x) {
     plot(x,6,2*x,0);
  }
  get('message').innerHTML = '';
}

onGo();

    function mandel(x,y) {
      var a=0; var b=0;
      for (i = 0; i<250; ++i) {
        // Complex z = z^2 + c
        var t = a*a - b*b;
        b = 2*a*b;
        a = t;
        a = a + x;
        b = b + y;
        var m = a*a + b*b;
        if (m > 10)  return i;
      }
      return 250;
    }

function plot(n,s,x1,y1) {
  var g = get("myCanvas").getContext("2d");
  g.beginPath();
  g.fillStyle = rainbow(n);
  g.fillRect(x1, y1, s, s);
  g.stroke();
}

function gray(n) {
  var n2 = Math.trunc(n).toString(16);
  if (n2.length < 2) n2 = "0" + n2;
  return '#' + n2 + n2 + n2;
}

function get(s) {
  return document.getElementById(s);
}

function rainbow(n) {
  return RGB2Color(wave(n),wave(n+85),wave(n+170));
}

function wave(n,a) {
   return 125*Math.sin(n/pal)+126;
}

function RGB2Color(r,g,b)
{
   return 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';
}

function onCenter(e) {
  //alert(e.clientX + ' ' + e.clientY); 
  
  get("cx").value = A+(e.clientX-300)*h/300;
  get("cy").value = B+(e.clientY-300)*h/300;
  onGo();
}