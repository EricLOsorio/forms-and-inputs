(function(window){

var utilities = {
//Returns true if the object is an array
isArray: Array.isArray || function(arr) {
	return  Object.prototype.toString.call(arr)==='[object Array]';
}, //isArray function

//goes through a list by the interval specified and applies the callback
//function to those elements only
by: function(list,n,callback) {
      var result=[];
      for(var i=n-1;i<list.length;i+=n) {
      	if(callback(list[i])){
      		result.push(list[i]);
      	};
      };
      return result;
},//by function

//returns an array of all the keys of an object
keys: function(object){
    
    var result=[];
    for (p in object){
    	result.push(p);
    };
    return result;
},//keys function

//returns an array of all the values of an object
values: function(object) {
	var result=[];
	for(p in object) {
		result.push(object[p]);
	};
	return result;
}, //values function

//returns an arrayof key:value pairs of an object
pairs: function(object){
    var result=[];

    for(p in object) {
    	result.push(p);
    	result.push(object[p]);
    };
    return result;

},//pairs function

//returns a randomly re-arranged copy of an array
shuffle: function(array) {
    var result=[];
    var temp=[];
    var tempElement=null;
    while(arr.length){
	    temp=arr.splice((Math.ceil(Math.random()*(arr.length-1))),1);
	    tempElement=temp[0];
	    result.push(tempElement);
    }
    return result;


},//shuffle function

//returns either the word if its first parameter is 1
// or its plural by adding s to the word if the first parameter is greater than 1
// and the pluralWord parameter is not passed
// or, if first parameter is greater than 1 and the pluralWord argument has been
// passed, it returs that pluralWord argument
pluralize: function(n,word,pluralWord){

  var plural="";
  if(n<1){return console.log("first parameter must be 1 or greater")};

  if(n==1){
  	return word;
  } else {
  	 if(arguments.length==3){
  	 	return arguments[2];
  	 } else return (word+"s");
  };

  
},//pluralize function

//converts a camelCase string into a string where each word is separated by
//a dash
toDash: function(str){

   var lettArr=str.split("");
   var pointerArr=[];
   var underWord=[];
   var word="";
   var finalWord="";

for(var i=0;i<lettArr.length;i++){
   if((lettArr[i])!==(lettArr[i].toLowerCase())){
      pointerArr.push(i);
   }
}
   for(var j=0;j<pointerArr[0];j++) {
       word=word+lettArr[j].toLowerCase();
 }

underWord.push(word);
word="";

for(var i=1; i<pointerArr.length;i++){
   for(var j=pointerArr[i-1]; j<pointerArr[i];j++) {
            word=word+lettArr[j].toLowerCase();
         }
        underWord.push(word);
        word="";
      }

word="";

for(var j=pointerArr[pointerArr.length-1];j<lettArr.length;j++) {
     word=word+lettArr[j].toLowerCase();
}

underWord.push(word);

for(var i=0;i<underWord.length;i++){
   if(i!=underWord.length-1){
    finalWord=finalWord+underWord[i]+"-";
   } else finalWord=finalWord+underWord[i];
}
return finalWord;

},//toDash function

//converts a dashed string into a camelString
toCamel: function(string){

var stringArr = string.split("");
var word="";
var wordsArray=[];
var camelWord="";
var camelString="";
var i=0;


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

  camelString=camelString+wordsArray[0];

   for(var j=1; j<wordsArray.length;j++) {
      camelWord=(wordsArray[j].charAt(0)).toUpperCase()+wordsArray[j].slice(1);
      camelString=camelString+camelWord;      
    }

return camelString;  

},//toCamel function

//takes an object and a search parameter, returning true
//if the search parameter is a value of the object or returning false
//if otherwise
has: function(obj, search){
 
 var allValues=this.values(obj);

 for(var i=0;i<allValues.length;i++){
  if(allValues[i]==search){
    return true;
  };
 };
 return false;
},//has function

//returns an array of key value pairs of an object based on an array of keys
//passed through the keys parameter
pick: function(obj, keys){

 var result=[];

 for(p in obj){
   if(keys.indexOf(p)>=0){
    result.push(p);
    result.push(obj[p]);
   };

 }//for loop
     return result;
},//pick function

};//utilities

})(window);