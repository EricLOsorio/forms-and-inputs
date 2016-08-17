var loginForm = document.getElementById('loginForm');
var userName = loginForm.username;
var pwd=loginForm.pwd;




if ( window.addEventListener ) { // avoid errors in incapable browsers



loginForm.addEventListener('submit', function (event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();
    alert("Information Will Be Submitted");

});

    userName.addEventListener('input', function(event) {

      if(validator.isOfLength(userName.value,20) ||
         validator.isLength(userName.value,2)){ console.log("Invalid");
        return  userName.setCustomValidity("Username is not valid");
     } else return  userName.setCustomValidity("");

 
}, false);

    pwd.addEventListener("input", function ()
     { 
  if(!validator.isOfLength(pwd.value,6) ||
     !validator.isLength(pwd.value,9)) {
     pwd.setCustomValidity("Password must be between 6 and 8 characters long");
  } else pwd.setCustomValidity("");

    }, false);


}

