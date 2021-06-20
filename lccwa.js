function prev(){
  document.getElementById('slider-container').scrollLeft -= 270;
}

function next()
{
  document.getElementById('slider-container').scrollLeft += 270;
}


$(".slide img").on("click" , function(){
$(this).toggleClass('zoomed');
$(".overlay").toggleClass('active');
})


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
});
}

$('.collapse').collapse()

var x = true;
var y = true;
var z = true;
var a = true;

function displayed()
{
  if (x === true) {
    document.getElementById("arr2").style.display = "inline";
    document.getElementById("arr3").style.display = "inline";
    document.getElementById("med").style.display = "inline";
    document.getElementById("how").style.display = "inline";
    document.getElementById("enginf").style.display = "none";
    document.getElementById("enginfo").style.display = "none";
    document.getElementById("bot").style.display = "block";
    x = false;
  }
  else {
    document.getElementById("arr2").style.display = "none";
    document.getElementById("arr3").style.display = "none";
    document.getElementById("med").style.display = "none";
    document.getElementById("how").style.display = "none";
    document.getElementById("mediainf").style.display = "none";
    document.getElementById("enginf").style.display = "block";
    document.getElementById("bioinf").style.display = "none";
    document.getElementById("howt").style.display = "none";
    document.getElementById("enginfo").style.display = "block";
    document.getElementById("bot").style.display = "none";
    x = true;
  }
}

function biodisplayed()
{
  if (y === true) {
    document.getElementById("eng").style.display = "inline";
    document.getElementById("arr1").style.display = "inline";
    document.getElementById("arr2").style.display = "inline";
    document.getElementById("arr3").style.display = "inline";
    document.getElementById("med").style.display = "inline";
    document.getElementById("how").style.display = "inline";
    document.getElementById("bioinf").style.display = "none";
    document.getElementById("bot").style.display = "block";
    y = false;
  }
  else {
    document.getElementById("eng").style.display = "none";
    document.getElementById("arr1").style.display = "none";
    document.getElementById("arr2").style.display = "none";
    document.getElementById("arr3").style.display = "none";
    document.getElementById("med").style.display = "none";
    document.getElementById("how").style.display = "none";
    document.getElementById("mediainf").style.display = "none";
    document.getElementById("enginf").style.display = "none";
    document.getElementById("bioinf").style.display = "block";
    document.getElementById("enginfo").style.display = "none";
    document.getElementById("howt").style.display = "none";
    document.getElementById("bot").style.display = "block"; //change to none when more is added
    y = true;
  }
}

function mediadisplayed()
{
  if (z === true) {
    document.getElementById("arr3").style.display = "inline";
    document.getElementById("how").style.display = "inline";
    document.getElementById("mediainf").style.display = "none";
    document.getElementById("bot").style.display = "block";
    z = false;
  }
  else {
    document.getElementById("arr3").style.display = "none";
    document.getElementById("how").style.display = "none";
    document.getElementById("bioinf").style.display = "none";
    document.getElementById("enginf").style.display = "none";
    document.getElementById("mediainf").style.display = "block";
    document.getElementById("howt").style.display = "none";
    document.getElementById("enginfo").style.display = "none";
    document.getElementById("bot").style.display = "none";
    z = true;
  }
}

function howdisplayed()
{
  if (a === true) {
    document.getElementById("howt").style.display = "none";
    document.getElementById("bot").style.display = "block";
    a = false;
  }
  else {
    document.getElementById("howt").style.display = "inline";
    document.getElementById("bioinf").style.display = "none";
    document.getElementById("enginf").style.display = "none";
    document.getElementById("mediainf").style.display = "none";
    document.getElementById("enginfo").style.display = "none";
    document.getElementById("bot").style.display = "none";
    a = true;
  }
}
