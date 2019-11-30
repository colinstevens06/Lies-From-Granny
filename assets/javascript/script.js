var mainScreenDiv = $("#main-screen")
var showsContentDiv = $("#shows-content")

function showMainScreen() {
   mainScreenDiv.css("display", "block");
   showsContentDiv.css("display", "none");
}

function showShows() {
   mainScreenDiv.css("display", "none");
   showsContentDiv.css("display", "block");
}

$("#shows-nav").on("click", showShows)
$("#home-nav").on("click", showMainScreen)
