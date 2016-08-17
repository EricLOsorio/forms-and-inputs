var ccForm=document.getElementById("ccform");
var typeOfCard=document.getElementById("typeofcard");
var cardNumbers=document.getElementById("cardnumbers");
var cvvInput=document.getElementById("cvvinput");
var year=document.getElementById("year");
var month=document.getElementById("month");
var nameOnCard=document.getElementById("nameoncard");

if(window.addEventListener) {

ccForm.addEventListener('submit',function(event){
	event.preventDefault();
	alert("Information will be submitted");
});

cardNumbers.addEventListener('input',function(event) {

  if(!validator.isCreditCard(cardNumbers.value)){
  	return cardNumbers.setCustomValidity("Credit Card Number format xxxx-xxxx-xxxx-xxxx");
  } else return cardNumbers.setCustomValidity("");

}, false);

cvvInput.addEventListener('input',function(event) {
	if(validator.isLength(cvvInput.value,3)) {
		return cvvInput.setCustomValidity("Please input a Valid CVV number");
	} else return cvvInput.setCustomValidity("");
},false);

nameOnCard.addEventListener('input', function(event) {

      if(validator.isLength(nameOnCard.value,2) || 
      	validator.isOfLength(nameOnCard.value,30)){ console.log("invalid");
        return  nameOnCard.setCustomValidity("Name must be between 2 and 30 characters");
     } else return  nameOnCard.setCustomValidity("");

    }, false);


}//if window.addEventListener
