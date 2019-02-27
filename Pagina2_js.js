var slider = document.getElementById("motor");
var slider2 = document.getElementById("leds");
var slider3 = document.getElementById("ultraD");
var slider4 = document.getElementById("FotoD");
slider.oninput = function() {
  document.getElementById('velo').innerHTML = this.value;
}
slider2.oninput = function() {
  document.getElementById('inte').innerHTML = this.value;
}
slider3.oninput = function() {
  document.getElementById('ultra').innerHTML = this.value;
  //document.getElementById("caji").style.marginLeft;
  document.getElementById("caji").style.marginLeft= String(this.value)+"%";
}
slider4.oninput = function() {
  document.getElementById('foto').innerHTML = this.value;
}
function myFunction() {
  // Get the checkbox
  var checkBox2 = document.getElementById("rele");

  var checkBox = document.getElementById("chicha");
  if (checkBox.checked == true){
    document.getElementById('presen').innerHTML = '1';

  } else {
    document.getElementById('presen').innerHTML = '0';
  }
  if (checkBox2.checked == true){
    document.getElementById('finde').innerHTML = '1';

  } else {
    document.getElementById('finde').innerHTML = '0';
  }
}
