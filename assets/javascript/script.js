$(document).ready(function () {

   // **************** DECLARING VARIABLES HERE ****************
   var sectionElement = $("section")
   var windowWidth = window.innerWidth


   console.log(windowWidth);


   // **************** WRITING FUNCTIONS HERE ****************
   function showMainScreen(event) {
      event.preventDefault();
      var goToURL = $(this).attr("data-url")

      sectionElement.fadeOut(500)
      setTimeout(function () { document.location.href = goToURL }, 500)
         ;

   }

      function onLoad() {
         sectionElement.fadeIn(1000)

         if (windowWidth <= 400) {
            switch ($(".main-image").attr("data-main-img")) {
               case "shows":
                  $(".main-image").attr("src", "./assets/images/home/Lies-From-Granny-Shows-Mobile.jpg");
               break;
               case "home":
                     $(".main-image").attr("src", "./assets/images/home/Lies-From-Granny-Mobile.jpg");
            }
         }

      }

      // **************** RUNNING FUNCTIONS HERE ****************
      onLoad();

      // **************** EVENT LISTENERS HERE ****************
      $(".nav-btn").on("click", showMainScreen)

      // closes out the document.ready
   }); 
