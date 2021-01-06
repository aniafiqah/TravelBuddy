function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("sideBtn").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("sideBtn").style.marginLeft= "0";
}

function myFunction() {
  location.href = "eventpage.html";
}

var mybutton = document.getElementById("TopMenu");
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
