let input=prompt("Input a character","r");
let conversion=input.charCodeAt(0);
if (conversion>=65 && conversion<=90) {
    alert ('upper case true');
   }
  else if (conversion>=97 && conversion<=122){
    alert ('lower case true');
   }
   else{
    alert ('Number');
   }