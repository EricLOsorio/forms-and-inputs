var shippingForm = document.getElementById('shipBill');
var fName = document.getElementById('fnameship');
var lName= document.getElementById('lnameship');
var address=document.getElementById('addressship');
var city=document.getElementById('cityship');
var zip=document.getElementById('zipship');
var state=document.getElementById('stateship');
var country=document.getElementById('countryship');
var billCheck=document.getElementById('billcheck');
var fNameBill = document.getElementById('fnamebill');
var lNameBill= document.getElementById('lnamebill');
var addressBill=document.getElementById('addressbill');
var cityBill=document.getElementById('citybill');
var zipBill=document.getElementById('zipbill');
var stateBill=document.getElementById('statebill');
var countryBill=document.getElementById('countrybill');

 

if ( window.addEventListener ) { // avoid errors in incapable browsers



shippingForm.addEventListener('submit', function (event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();
    alert("Information Will Be Submitted");

});

    fName.addEventListener('input', function(event) {

      if(validator.isLength(fName.value,2) || 
      	validator.isOfLength(fName.value,20)){ console.log("invalid");
        return  fName.setCustomValidity("Name must be between 2 and 20 characters");
     } else return  fName.setCustomValidity("");

}, false);


    lName.addEventListener('input', function(event) {

      if(validator.isLength(lName.value,2) || 
      	validator.isOfLength(lName.value,20)){ console.log("invalid");
        return  lName.setCustomValidity("Name must be between 2 and 20 characters");
     } else return  lName.setCustomValidity("");

}, false);


    address.addEventListener('input', function(event) {

      if(validator.isLength(address.value,5) || 
      	validator.isOfLength(address.value,80)){ console.log("invalid");
        return  address.setCustomValidity("Address must be between 5 and 80 characters");
     } else return  address.setCustomValidity("");

}, false);


    zip.addEventListener('input', function(event) {

      if(!validator.isAlphaNumeric(zip.value)){ console.log("invalid");
        return  zip.setCustomValidity("zip must be 5 alphanumeric");
     } else return  zip.setCustomValidity("");

}, false);


    billCheck.addEventListener('click', function(event) {
    	if(billCheck.checked) {
    		fNameBill.value=fName.value;
    		lNameBill.value=lName.value;
    		addressBill.value=address.value;
    		cityBill.value=city.value
    		zipBill.value=zip.value;
    		stateBill.value=state.value;
    		countryBill.value=country.value

    	} else
    	{
    		fNameBill.value='';
    		lNameBill.value='';
    		addressBill.value='';
    		cityBill.value='';
    		zipBill.value='';
    		stateBill.value='';
    		countryBill.value='';    		
    		alert("Input Billing Information");

    fNameBill.addEventListener('input', function(event) {

      if(validator.isLength(fNameBill.value,2) || 
      	validator.isOfLength(fNameBill.value,20)){ console.log("invalid");
        return  fNameBill.setCustomValidity("Name must be between 2 and 20 characters");
     } else return  fNameBill.setCustomValidity("");

    }, false);


    lNameBill.addEventListener('input', function(event) {

      if(validator.isLength(lNameBill.value,2) || 
      	validator.isOfLength(lNameBill.value,20)){ console.log("invalid");
        return  lNameBill.setCustomValidity("Name must be between 2 and 20 characters");
     } else return  lNameBill.setCustomValidity("");

    }, false);
  

    addressBill.addEventListener('input', function(event) {

      if(validator.isLength(addressBill.value,5) || 
      	validator.isOfLength(addressBill.value,80)){ console.log("invalid");
        return  addressBill.setCustomValidity("Address must be between 5 and 80 characters");
     } else return  addressBill.setCustomValidity("");

    }, false);


    zipBill.addEventListener('input', function(event) {

      if(!validator.isAlphaNumeric(zipBill.value)){ console.log("invalid");
        return  zipBill.setCustomValidity("zip must be 5 alphanumeric");
     } else return  zipBill.setCustomValidity("");

    }, false);


     }; //else check different shipping fields


    }, false);

}
