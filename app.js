


const liElemendid = document.querySelectorAll('li');

// kustuta konkreetne element

liElemendid[2].remove();

// leia antud DOMis ul element

const ulElement = document.querySelector('ul');

//kustuta antud elemendist li
// li on ul child element

ulElement.removeChild(liElemendid[1]);

const liElement = liElemendid[0];
const link = liElement.children[0];

// class ja attribute  - kustutamine
let sisu = link.className;
sisu = link.classList;
sisu = link.classList[1];

link.classList.remove('secondary-content');

//atribuut

sisu = link.getAttribute('href');
link.setAttribute('href', 'https://google.com');

link.setAttribute('title','Google');
link.removeAttribute('title');

sisu = link;
console.log(sisu);

