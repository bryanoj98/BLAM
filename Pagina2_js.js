var imagenes=[];
var fotos=[];
var velosis=[];
imagenes.push(document.getElementById('redi'),document.getElementById('nara'),document.getElementById('ama'),document.getElementById('ver'),document.getElementById('azu'),document.getElementById('blan'));
fotos.push(document.getElementById('fotoR5'),document.getElementById('fotoR4'),document.getElementById('fotoR3_5'),document.getElementById('fotoR3'),document.getElementById('fotoR2'),document.getElementById('fotoR'));
velosis.push(document.getElementById('agu'),document.getElementById('agu2'),document.getElementById('agu2_5'),document.getElementById('agu3'),document.getElementById('agu4'),document.getElementById('agu5'));

var slider = document.getElementById("motor");
var slider2 = document.getElementById("leds");
var slider3 = document.getElementById("ultraD");
var slider4 = document.getElementById("FotoD");
slider.oninput = function() {
  document.getElementById('velo').innerHTML = this.value;
  var hasta=7;
  if(Number(this.value)<=17&&Number(this.value)>=0)hasta=0;
  else if(Number(this.value)<=34&&Number(this.value)>17)hasta=1;
  else if(Number(this.value)<=51&&Number(this.value)>34)hasta=2;
  else if(Number(this.value)<=68&&Number(this.value)>51)hasta=3;
  else if(Number(this.value)<=85&&Number(this.value)>68)hasta=4;
  else if(Number(this.value)<=100&&Number(this.value)>85)hasta=5;
  else hasta=7;
  for(var i=0;i<7;i++)
  {
    if(hasta==i){velosis[i].removeAttribute("hidden");}
    else {velosis[i].setAttribute("hidden","");}
  }
}
slider2.oninput = function() {
  var hasta=7;
  document.getElementById('inte').innerHTML = this.value;
  if(Number(this.value)<=17&&Number(this.value)>1)hasta=0;
  else if(Number(this.value)<=34&&Number(this.value)>17)hasta=1;
  else if(Number(this.value)<=51&&Number(this.value)>34)hasta=2;
  else if(Number(this.value)<=68&&Number(this.value)>51)hasta=3;
  else if(Number(this.value)<=85&&Number(this.value)>68)hasta=4;
  else if(Number(this.value)<=100&&Number(this.value)>85)hasta=5;
  else hasta=7;
  for(var i=0;i<7;i++)
  {
    if(i<=hasta&&hasta<7){imagenes[i].removeAttribute("hidden");}
    else {imagenes[i].setAttribute("hidden","");}
  }
}
slider3.oninput = function() {
  document.getElementById('ultra').innerHTML = this.value;
  document.getElementById("caji").style.marginLeft= String(this.value)+"%";
}
slider4.oninput = function() {
  var hasta=7;
  document.getElementById('foto').innerHTML = this.value;
  if(Number(this.value)<=17&&Number(this.value)>=0)hasta=0;
  else if(Number(this.value)<=34&&Number(this.value)>17)hasta=1;
  else if(Number(this.value)<=51&&Number(this.value)>34)hasta=2;
  else if(Number(this.value)<=68&&Number(this.value)>51)hasta=3;
  else if(Number(this.value)<=85&&Number(this.value)>68)hasta=4;
  else if(Number(this.value)<=100&&Number(this.value)>85)hasta=5;
  else hasta=7;
  for(var i=0;i<7;i++)
  {
    if(hasta==i){fotos[i].removeAttribute("hidden");}
    else {fotos[i].setAttribute("hidden","");}
  }
}
function myFunction() {
  // Get the checkbox
  var checkBox2 = document.getElementById("rele");
  var checkBox3 = document.getElementById("presente");
  var checkBox4 = document.getElementById("llega");
  var checkBox = document.getElementById("chicha");
  if (checkBox.checked == true){
    //document.getElementById('presen').innerHTML = '1';
    document.getElementById('mute').setAttribute("hidden","");
    document.getElementById('sound').removeAttribute("hidden");

  } else {
    //document.getElementById('presen').innerHTML = '0';
    document.getElementById('sound').setAttribute("hidden","");
    document.getElementById('mute').removeAttribute("hidden");

  }
  if (checkBox2.checked == true){
    document.getElementById('banda').setAttribute("hidden","");
    document.getElementById('stop').removeAttribute("hidden");

  } else {
    document.getElementById('stop').setAttribute("hidden","");
    document.getElementById('banda').removeAttribute("hidden");
  }
  if (checkBox3.checked == true){
    document.getElementById('presen').innerHTML = '1';
    document.getElementById('fanta').removeAttribute("hidden");

  } else {
    document.getElementById('presen').innerHTML = '0';
    document.getElementById('fanta').setAttribute("hidden","");
  }
  if (checkBox4.checked == true){
    document.getElementById('finde').innerHTML = '1';
    document.getElementById('llego').removeAttribute("hidden");

  } else {
    document.getElementById('finde').innerHTML = '0';
    document.getElementById('llego').setAttribute("hidden","");
  }

}
