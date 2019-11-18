


const liElemendid = document.querySelectorAll('li');

// kustuta konkreetne element

liElemendid[2].remove();

// leia antud DOMis ul element

const ulElement = document.querySelector('ul');

//kustuta antud elemendist li
// li on ul child element

ulElement.removeChild(liElemendid[1]);

console.log(ulElement);

