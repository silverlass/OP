//multiple elemendid

// klassinime j'rgi
let sisu = document.getElementsByClassName('collection-item');


console.log(sisu);
console.log(sisu[0]);

sisu[0].style.color = 'orange';
sisu[2].innerHTML = 'Õpi arvutivõrgud';


// queryselector + klassnime järgi
//const nimekirjaElemendid = document.querySelector('ul').getElementsByClassName('collection-item');

let nimekirjaElemendid = document.getElementsByTagName('li');

// teisendame HTMLcollection massiiviks (Array)

nimekirjaElemendid = Array.from(nimekirjaElemendid);
nimekirjaElemendid.reverse();


console.log(nimekirjaElemendid)