window.onload = (function() {


var searchForm = null;
var search= null;



 window.addEventListener("DOMContentLoaded", function ()
 {     
   var searchForm = document.getElementById('searchForm');  
   var search=searchForm.search;


    search.addEventListener("input", function ()
     {
 // Only show custom form validation error message if the value matches the pattern.
   if(search.value.length>80){
	search.setCustomValidity("Name must be shorter");
   } else search.setCustomValidity("");
    
   }, false);


   searchForm.addEventListener('submit', function (event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();
    alert("Form will be submitted");

   });


 }, false);



}(window.console));




