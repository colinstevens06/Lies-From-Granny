var mainScreenDiv = $("#main-screen")
var showsContentDiv = $("#shows-content")
var showsCard = $("#showsCard")
var sectionElement = $("section")





var swup = new Swup()

// $(".nav-link").on("click", function(event) {
//    event.preventDefault();

//    const href = $(this).attr("href");
//    console.log(href);
   
//    window.history.pushState(null, null, href);

//    $.ajax({
//       url: href,
//       success: function (data) {
//          $("section").fadeOut(250, function () {
//             const newPage = $(data).filter("section").html();

//             $("section").html(newPage)
//          })
//          $("section").fadeIn(250);
//       }
//    })

// })

function showMainScreen(event) {
   event.preventDefault();
   var goToURL = $(this).attr("data-url")
   console.log(this)
   console.log(goToURL)
   console.log(sectionElement)
   sectionElement.fadeOut(500)
   setTimeout(function(){document.location.href = goToURL}, 500)
   ;


   // mainScreenDiv.css("display", "block");
   // showsContentDiv.css("display", "none");
}

function onLoad() {
   sectionElement.fadeIn(1000)
}

// function showShows() {
//    mainScreenDiv.css("display", "none");
//    showsContentDiv.css("display", "block");
// }

onLoad();


// $("#shows-nav").on("click", showShows)
$(".nav-btn").on("click", showMainScreen)
// $("#shows-card").on("click", showMainScreen)
