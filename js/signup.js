
// retrieve the form element

window.onload = (function() {


var signupForm = null;
var first= null;
var last= null;
var date= null;
var email= null;
var pwd = null;
var confirmPwd=null;


  window.addEventListener("DOMContentLoaded", function ()
  {     
   var signupForm = document.getElementById('signupForm');  
   var first=signupForm.fName;
   var last=signupForm.lName;
   var date=signupForm.birthDate;
   var email=signupForm.email;
   var pwd=signupForm.pwd;
   var confirmPwd=signupForm.confirmPwd;





    first.addEventListener("input", function ()
     {
 // Only show custom form validation error message if the value matches the pattern.
  if(first.value.length<2){
	first.setCustomValidity("Name must be 2 or more characters");
  } else first.setCustomValidity("");
    
  }, false);


    last.addEventListener("input", function ()
     {
  if(last.value.length<2){
	last.setCustomValidity("Last Name must be 2 or more characters");
  } else last.setCustomValidity("");
 
  }, false);

    date.addEventListener("input", function ()
     { 
  if(validator.isEmpty(date.value) || 
    !validator.isBeforeDate(date.value, "1/1/2003")){
	date.setCustomValidity("Birthdate must be before 2003");  	
  } else date.setCustomValidity("");

  }, false);

    email.addEventListener("input", function ()
     { 
  if(!validator.isEmailAddress(email.value)) {
    email.setCustomValidity("Correct eMail address format expected user@domain.com");
  } else email.setCustomValidity("");

    }, false);

    pwd.addEventListener("input", function ()
     { 
  if(!validator.isOfLength(pwd.value,6) ||
     !validator.isLength(pwd.value,9)) {
  	 pwd.setCustomValidity("Password must be between 6 and 8 characters long");
  } else pwd.setCustomValidity("");

    }, false);

    confirmPwd.addEventListener("input", function ()
     { 
  if(confirmPwd.value!==pwd.value){
  	 confirmPwd.setCustomValidity("Password and Confirm Password must match");  	
  } else confirmPwd.setCustomValidity("");
    }, false);


signupForm.addEventListener('submit', function (event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();
    alert("Form will be submitted");

});


  }, false);



}(window.console));




