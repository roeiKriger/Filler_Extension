/*  The functing gets a letter/word and it returns the wanted string */
function getOutput(myInput){  
    if(myInput == "id" || myInput == "i")      
		return "123456789";
	if(myInput == "mail" || myInput == "m")
		return "roi@gmail.com";
	if(myInput == "phone" || myInput == "p")
		return "0522222222";
}
/* After clicking on the extension it opens a pop up window offering the options I set in the funcion above */
/* Then I send the user input to the getOutput function, set the value of the selceted input to the output of the function */
var myInput = window.prompt("What info would you like to fill?", "id/mail/phone");
var myOutput = getOutput(myInput);
document.activeElement.value = myOutput;