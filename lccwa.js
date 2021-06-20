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

function displayed()
{
  document.getElementById("enginf").style.display = "block";
  document.getElementById("bio").style.display = "none";
  document.getElementById("arr").style.display = "none";
  document.getElementById("arr2").style.display = "none";
  document.getElementById("arr3").style.display = "none";
  document.getElementById("med").style.display = "none";
  document.getElementById("how").style.display = "none";
}
