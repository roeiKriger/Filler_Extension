# Filler_Extension
Chrome extension to fill faster fields in a form. For example: id, email and phone number.

In the manifest.js I created the extension name, added a logo to the extension and linked the script which will run the extension 'background.js'.
The background.js is creating the extension inside the menu of every editable field any website has. Need to use a right click on the field and the extension option will pop up.
Clicking on the extension will activate the fill.js script. In fill.js there is the function which will fill up the form field. 
The user will insert the needed input in a pop up window.
For example: 'mail', the function will return the saved email it has for this specific case and it will fill the field value with the output.
