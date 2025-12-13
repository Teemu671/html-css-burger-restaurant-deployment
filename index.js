function menu() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function cart() {
  var y = document.getElementById("content");
  var x = document.getElementById("cart");
  if (x.style.display === "block") {
    y.style.display = "block";
    x.style.display = "none";
  } else {
    y.style.display = "none";
    x.style.display = "block";
  }
}
function inc() {
  alert("Added to cart")
  
}
function dec() {
  alert("Removed from cart")
  
}
function nut(e) {
  var x = document.getElementById("nut"+e);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
