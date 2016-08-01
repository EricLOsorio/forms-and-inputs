var validator = {

 isEmailAddress: function(input) {
                
  if(!input) throw "Missing Parameter for isEmaiAddress method: 'input'";
                
  var emailComponents=input.split("@");

  if(emailComponents.length==2) {
	var address=emailComponents[0];
	var domain=emailComponents[1];
    //domain portion could be checked here for proper domain
    //by making sure the domain string is in string.3chars format
	return true;
	}
	return false;

	}, //isEmailAddress

isPhoneNumber: function(input) {

  if(!input) throw "Missing Parameter for isPhoneNumber method: 'input'";
  
   if(input.length !== 14 && input.length !== 12){
     return false;
   }
   else {

   	if(input.length==14){
     if(!(input.charAt(0)=="(" && input.charAt(4)==")" && input.charAt(5)==" "
     	&& input.charAt(9)=="-") && !(input.charAt(0)=="1" && 
     	input.charAt(1)=="-" && input.charAt(5)=="-" && input.charAt(9)=="-")){

     	return false;
     } 

     }
   	 else {
      if(input.charAt(3)!=="-" || input.charAt(7)!=="-"){
      	return false;
      }
   	}

   }

   var phoneArr=input.split("");
   var digits=phoneArr.map(function(item){return parseInt(item)});
   var filteredDigits=digits.filter(function(item){return (item+1)});

   if(filteredDigits.length!==10 && filteredDigits.length!==11){
   	return false;
   } else return true;

  },  //isPhoneNumber


withoutSymbols: function(input) {

 if(!input) throw "Missing Parameter for withoutSymbols method: 'input'";

var splitInput = input.split("");
var newString="";

var stringArr=splitInput.filter(function(item) {
	return (item.toUpperCase()!==item.toLowerCase()) || item===" "});

   for(var i=0;i<stringArr.length;i++){
   	newString=newString+stringArr[i];
   }

   return newString;  
}, //withoutSymbols

isDate: function(input){
  if(!input) throw "Missing Parameter for isDate method: 'input'";

  var testDate=new Date(input);

  if(testDate.toString()!="Invalid Date") {
  	return true;
  } else return false;

}, //isDate

isBeforeDate: function(input, reference) {

 if(!input || !reference) 
  throw "Missing Parameters for isBeforeDate method: 'input', 'reference'"
 if(this.isDate(input) && this.isDate(reference)){
 	var testInput=new Date(input);
 	var testReference=new Date(reference);
 	if(testInput<testReference){
 		return true;
 	} else return false;
 } else return false;

}, //isBeforeDate

isAfterDate: function(input, reference) {

 if(!input || !reference) 
  throw "Missing Parameters for isAfterDate method: 'input', 'reference'"
 if(this.isDate(input) && this.isDate(reference)){
 	var testInput=new Date(input);
 	var testReference=new Date(reference);
 	if(testInput>testReference){
 		return true;
 	} else return false;
 } else return false;

},

isBeforeToday: function(input) {

 if(!input) 
  throw "Missing Parameters for isBeforeToday method: 'input', 'reference'"

 var today=new Date();

 if(this.isDate(input)){
 	var testInput=new Date(input);
 	if(today>testInput){
 		return true;
 	} else return false;
 } else return false;

},


isAfterToday: function(input) {

 if(!input) 
  throw "Missing Parameters for isAfterToday method: 'input', 'reference'"

 var today=new Date();

 if(this.isDate(input)){
 	var testInput=new Date(input);
 	if(today<testInput){
 		return true;
 	} else return false;
 } else return false;

},

isEmpty: function(input) {

 if(!input){return true;}

 var splitInput=input.split("");

 var filteredArr=splitInput.filter(function(item){
 	if(item!==" ") return item;
 });

  if(filteredArr.length==0) {
  	return true;
  } else return false;
 
}, //isEmpty
 	
contains: function(input, words) {

var stringArr = input.split("");
var word="";
var wordsArray=[];
var i=0;
var j=0;

   do {
   while((stringArr[i].toUpperCase())!==(stringArr[i].toLowerCase())) {
      word=word+stringArr[i];
     if(i==stringArr.length-1){
       stringArr.push("."); //necessary for input not ending with punctuation
      i++;
     } else i++;
   }
   if(word!=""){
   wordsArray.push(word);
   word="";
   i++;
   } else { word=""; i++}

   } while (i<stringArr.length);

i=0;

do {
 while(i<wordsArray.length){

  if(wordsArray[i].toLowerCase()===words[j].toLowerCase()){
  	return true;
  } else {
  	i++;
  }
 }
 j++;
 i=0;
} while (j<words.length);

return false;

}, //contains

lacks: function(input, words) {

var stringArr = input.split("");
var word="";
var wordsArray=[];
var i=0;
var j=0;

   do {
   while((stringArr[i].toUpperCase())!==(stringArr[i].toLowerCase())) {
      word=word+stringArr[i];
     if(i==stringArr.length-1){
       stringArr.push("."); //necessary for input not ending with punctuation
      i++;
     } else i++;
   }
   if(word!=""){
   wordsArray.push(word);
   word="";
   i++;
   } else { word=""; i++}

   } while (i<stringArr.length);

i=0;

do {
 while(i<wordsArray.length){

  if(wordsArray[i].toLowerCase()===words[j].toLowerCase()){
  	return false;
  } else {
  	i++;
  }
 }
 j++;
 i=0;
} while (j<words.length);

return true;

}, //lacks

isComposedOf: function(input, strings) {



var greatest=strings[0].length;
var greatestItem="";
var cut=[];
var sorted=[];

input=this.withoutSymbols(input); //Leave only non character strings
input=input.toLowerCase(); //Make the string Lower Case

while(strings.length!==0){ //strings will be sorted by length

for(var i=1;i<strings.length;i++){
 if(strings[i].length>greatest){
  greatest=strings[i].length;
  greatestItem=strings[i];
 }
}

cut=strings.splice(strings.indexOf(greatestItem),1);//cut is the longest compared
sorted.push(cut[0].toLowerCase()); //cut is pushed to sorted array
if(strings.length){ //Check so that we don't try to get length of empty strings array
greatest=strings[0].length;
}

} //while strings length not empty

for(i=0;i<sorted.length;i++){ //For each sorted string check if found in input
  while(input.indexOf(sorted[i])>=0) { //Keep replacing in case of repeats

     input=input.replace(sorted[i],"");
  }
}

if(this.isEmpty(input)){
	return true;
} else return false;

} ,//isComposedOf

isLength: function(input,n){

if(input.length<n){
	return true;
} else return false;

}, //isLength

isOfLength: function(input,n){

if(input.length>=n){
	return true;
} else return false;

},//isOfLength

countWords: function(input){
 
var splitInput = input.split("");
var newString="";
var lettersOnlyArr=splitInput.map(function(item) {
        if(item.toUpperCase()!==item.toLowerCase()){
          return item;
        } else return " "});
 for(var i=0;i<lettersOnlyArr.length;i++){
  newString=newString+lettersOnlyArr[i];
 }

 var wordArr=[];
 var word="";
 var i=0;

 while (i<newString.length) { 

  while(newString[i].toUpperCase()!==newString[i].toLowerCase()){
    word=word+newString[i];
    i++; 
    if(i==newString.length){newString=newString+"!"}	

  }

   if(word!==""){wordArr.push(word)};
   word="";
   i++;
   } ;

 return wordArr.length;

}, //countWords

lessWordsThan: function(input,n){

  if(this.countWords(input)<n){
  	return true;
  } else return false;

}, //lessWordsThan

moreWordsThan: function(input,n){

  if(this.countWords(input)>n){
  	return true;
  } else return false;

},//moreWordsThan


isBetween: function(input, floor, ceil) {

  if(this.countWords(input)>floor && this.countWords(input)<ceil){
  	return true;
  } else return false;	

}, //isBetween

isAlphaNumeric: function(input) { 

var splitInput = input.split("");
var i=0;

//loop will stop as soon as non-alphanumeric is found
while(i<splitInput.length && (parseInt(splitInput[i])==splitInput[i] 
	|| splitInput[i].toUpperCase()!=splitInput[i].toLowerCase())) {
  i++;
}

return i==splitInput.length;

},//isAlphaNumeric


isCreditCard: function(input) { 

var splitInput = input.split("");
var i=0;

if(splitInput.length==19){ //if length is 19 with hypens 

//loop will stop as soon as non-alphanumeric or non-hypen is found
while(i<splitInput.length && (parseInt(splitInput[i])==splitInput[i] 
	|| splitInput[i].toUpperCase()!=splitInput[i].toLowerCase()
	|| splitInput[i]=="-")) {
    if(splitInput[i]=="-" && !(i==4 || i==9 || i==14)) { 
  	return false;
    } else i++;
	
}
 if(i!==splitInput.length){
 	return false;
 } else return true;

} // if 19
else if(splitInput.length==16){
  //loop will stop as soon as non-alphanumeric is found
while(i<splitInput.length && (parseInt(splitInput[i])==splitInput[i] 
	|| splitInput[i].toUpperCase()!=splitInput[i].toLowerCase())) {
  i++;
}
 if(i!==splitInput.length){return false;} else return true;

}// else if 16

else return false;

},//isCredit

isHex: function(input){


if (input.length>1 && input.length<8){
 if(input[0]==="#"){
 	for(var i=1;i<input.length;i++){
      if(!(input.charCodeAt(i)>=65 && input.charCodeAt(i)<=70) &&
      	 !(input.charCodeAt(i)>=97 && input.charCodeAt(i)<=102) &&
      	 !(input.charCodeAt(i)>=48 && input.charCodeAt(i)<=57)){
	   return false;
	  } // if invalid chars found in input string
    }//for loop to check valid hex string characters
 } else return false; //if first character is #

} else return false;//if 1<input<8 

return true;
},//isHex

isRGB: function(input){

var start="rgb(";
var end=")";
var middle=input.replace("rgb(","");
var inputStart="";
var inputEnd="";
var colorNumbers="";
const NEEEDCOLORCODES=3;
input=input.toLowerCase();

for(var i=0; i<start.length;i++){
    inputStart=inputStart+input.charAt(i);
}
inputEnd=input.charAt(input.length-1);

if(inputStart!==start && inputEnd!==end) {
 return false;
} else {
   colorNumbers=input.replace(start,"");
   colorNumbers=colorNumbers.replace(end,"");
   colorArray=colorNumbers.split(",");
   if(colorArray.length!==NEEEDCOLORCODES) {
   	return false;
   } else {
      for(var j=0;j<colorArray.length;j++){
      	if(colorArray[j]>=0 && colorArray[j]<=255){
      	if(parseInt(colorArray[j])!=colorArray[j]){
      		return false;
      	} 
      } else return false;
      } //for loop
      return true;
   } //ELSE CONTINUE ANALYZING THE COLOR CODES


 } // ELSE CONTINUE DISSECTING STRING



}, //isRGB


isHSL: function(input){

var start="hsl(";
var end=")";
var middle=input.replace("hsl(","");
var inputStart="";
var inputEnd="";
var colorNumbers="";
const NEEDEDCOLORCODES=3;
var j=0;
input=input.toLowerCase();

for(var i=0; i<start.length;i++){
    inputStart=inputStart+input.charAt(i);
}
inputEnd=input.charAt(input.length-1);

if(inputStart!==start && inputEnd!==end) {
 return false;
} else {
   colorNumbers=input.replace(start,"");
   colorNumbers=colorNumbers.replace(end,"");
   colorArray=colorNumbers.split(",");
   if(colorArray.length!==NEEDEDCOLORCODES) {
   	return false;
   } else {
      for(var j=0;j<colorArray.length;j++){

      	if((j==0 && colorArray[j]>=0 && colorArray[j]<=360) 
      	  || (j>0 && j<NEEDEDCOLORCODES && colorArray[j]>=0 && colorArray[j]<=1)){ 
      	if(Number(colorArray[j])!=colorArray[j]){
      	  return false;
      	 } 
        } else return false;

      } //for loop 
      return true;
   } //ELSE CONTINUE ANALYZING THE COLOR CODES


 } // ELSE CONTINUE DISSECTING STRING

}, //isHSL


isColor: function(input) {

if(this.isHex(input) || this.isRGB(input) || this.isHSL(input)) {
	return true;
} else return false;


}, //isColor


isTrimmed:function(input) {

var inputArr=input.split("");

if(inputArr[0]==" " || inputArr[input.length-1]==" ") {
	return false;
} 
else {
	for(var i=0; i<(inputArr.length-1);i++) {
		if(inputArr[i]==" " && inputArr[i+1]==" ") {
			return false;
		}
	}
}
return true;

}, //isTrimmed


}



