// document

let sisu;

sisu = document; //sisu html-is
sisu = document.all; // html tagid kasutamise järjekorras

sisu = document.all[2]; // konkreetne html tag
sisu = document.all.length; // kui palju on html tagi

//document properties 
sisu = document.head; // head isu
sisu = document.body; // body sisu
sisu = document.doctype; // doctype
sisu = document.domain; // domeen
sisu = document.URL; //URL
sisu = document.characterSet;
sisu = document.contentType;

// formi andmed
sisu = document.forms; // kõik vormid
sisu = document.forms[0]; //esimene form
sisu = document.forms[0].id; // esimese vormi ID
sisu = document.forms[0].method; // vormi töötlus
sisu = document.forms[0].action;

//linkide andmed
sisu = document.links; // kõik lingid
sisu = document.links[0]; // esimene link
sisu = document.links[0].className; // lingi klassid
sisu = document.links[0].classList[0]; // klasside massiiv ja sealt elementide lugemine

//pildid

sisu = document.images;

// skriptid

sisu = document.scripts;
sisu = document.scripts[1].getAttribute('src'); // lokaalne skript
sisu = document.scripts[0].getAttribute('src'); // materialize skript


console.log(sisu);