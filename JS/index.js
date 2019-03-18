// scrole bar target
// below is the code for the side menu
/* side menu animation*/ 
function myFunction() { 
  document.getElementById('bars').classList.toggle("change");
  document.getElementById('by').classList.toggle("stop");
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}

// below is the code used for the cookie.

$(document).ready(function(){
  if (typeof(Storage) !== "undefined") {
    let tess = sessionStorage.getItem("cookie")
    if (!tess) {
      $('#1').append("<div id='cookie'> This site uses cookies. By continuing to browse the sight you are agreeing to our use of cookies. <button id=cookies>Continue <i class='fas fa-caret-right'></i> </button> <div>"); ;
    } else {
      document.getElementById("1")
    }
  }
})
$(document).ready(function(){
  $("#cookies").click(function(){
    sessionStorage.setItem("cookie", "true")
    $("#cookie").remove();
  });
});

// below is the java script plugins
$(document).ready(function(){
    $('.slick').slick({
    //   setting-name: setting-value
    dots: true,
    arrows: false,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnDotsHover: true,
    });
  });
