
var surveyFormBoss=document.getElementById("surveyForm");/****************************/
var submitButton=document.getElementById("submitit");
var found_it="";



   surveyFormBoss.addEventListener('submit', function (event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();
    alert("Form will be submitted");

   });

surveyFormBoss.addEventListener("change", function() { 



  submitButton.addEventListener("click", function ()
   {
   var surveyForm=document.getElementsByName("apps");
    for(var i=0;i<surveyForm.length;i++){
        if(surveyForm[i].checked){
            found_it=surveyForm[i].value;
         };

    };
    


    if(validator.isEmpty((document.getElementById("other")).value) &&
        (found_it=="Other")){
      (document.getElementById("other")).setCustomValidity("Type your Favorite");
    } else {(document.getElementById("other")).setCustomValidity("")};


});

});
