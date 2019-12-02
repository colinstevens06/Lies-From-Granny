var mainScreenDiv = $("#main-screen")
var showsContentDiv = $("#shows-content")
var showsCard = $("#showsCard")

$(".nav-link").on("click", function(event) {
   event.preventDefault();

   const href = $(this).attr("href");
   console.log(href);
   
   window.history.pushState(null, null, href);



   $.ajax({
      url: href,
      success: function (data) {
         $("section").fadeOut(250, function () {
            const newPage = $(data).filter("section").html();

            $("section").html(newPage)
         })
         $("section").fadeIn(250);
      }
   })

})

// function showMainScreen() {
//    mainScreenDiv.css("display", "block");
//    showsContentDiv.css("display", "none");
// }

// function showShows() {
//    mainScreenDiv.css("display", "none");
//    showsContentDiv.css("display", "block");
// }


// $("#shows-nav").on("click", showShows)
// $("#home-nav").on("click", showMainScreen)
// $("#shows-card").on("click", showShows)
