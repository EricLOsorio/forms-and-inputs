var scheduleForm = document.getElementById('scheduleform');
var dateField= document.getElementById('datefield');
var contactField = document.getElementById('contactfield');
var emailField = document.getElementById('emailfield');
var textArea = document.getElementById('textarea');

 /* userName.setCustomValidity("Name cannot be empty");*/

if ( window.addEventListener ) { // avoid errors in incapable browsers


scheduleForm.addEventListener('submit', function (event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();
    alert("Information Will Be Submitted");

});

    dateField.addEventListener('input', function(event) {
          if(validator.isBeforeToday(dateField.value)){ console.log("invalid");
        return  dateField.setCustomValidity("Enter Date after Today");
     } else return  dateField.setCustomValidity("");

}, false);


    contactField.addEventListener('input', function(event) {
          if(!validator.isPhoneNumber(contactField.value)){ console.log("invalid");
        return  contactField.setCustomValidity("Please Enter Phone Number");
     } else return  contactField.setCustomValidity("");

}, false);


    emailField.addEventListener('input', function(event) {

      if(!validator.isEmailAddress(emailField.value)){ console.log("invalid");
        return  emailField.setCustomValidity("Please enter valid email address");
     } else return  emailField.setCustomValidity("");

}, false);


    textArea.addEventListener('input', function(event) {

      if(validator.isOfLength(textArea.value,450)){ console.log("invalid");
        return  textArea.setCustomValidity("Must be less than 450 characters");
     } else return  textArea.setCustomValidity("");

}, false);



}
