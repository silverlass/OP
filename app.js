// node omadused ja meetodid

let nimekiri = document.querySelectorAll('ul.collection');
let nimekirjaElement = document.querySelectorAll('li.collection-item');

console.log(nimekiri);
console.log(nimekirjaElement);

nimekiri = document.querySelector('ul.collection');
console.log(nimekiri);

//sisu = nimekiri.childNodes[0];

sisu = nimekiri.children;
sisu = nimekiri.children[1];
nimekiri.children[1].textContent = 'Õpi rohkem JS';
nimekiri.children[2].children[0].id = 'katse';

console.log(sisu);
console.log(nimekiri.children[2].children[0]);

sisu = nimekiri.firstChild; //node type
sisu = nimekiri.firstElementChild; // value

sisu = nimekiri.lastChild; //node type
sisu = nimekiri.lastElementChild; // value

sisu = nimekiri.childElementcount;

nimekirjaElement = document.querySelector('li.collection-item');

sisu=nimekirjaElement.nextSibling; //nodetype
sisu=nimekirjaElement.nextElementSibling; //nodetype value
sisu=nimekirjaElement.previousSibling; //nodetype
sisu=nimekirjaElement.previousElementSibling; //nodetype value



console.log(sisu);
/*
1 - element
2 - atribuut
3 - text
8 - kommentaar
9 - dokument ise
10 - doctype
*/