//multiple elemendid

// klassinime j'rgi
let sisu = document.getElementsByClassName('collection-item');


console.log(sisu);
console.log(sisu[0]);

sisu[0].style.color = 'red';



// queryselector + klassnime järgi
//const nimekirjaElemendid = document.querySelector('ul').getElementsByClassName('collection-item');

let nimekirjaElemendid = document.getElementsByTagName('li');

// teisendame HTMLcollection massiiviks (Array)

nimekirjaElemendid = Array.from(nimekirjaElemendid);
//nimekirjaElemendid.reverse();

// massiivi läbimine tüskliga

for(let i=0;i<nimekirjaElemendid.length;i++){
    nimekirjaElemendid[i].style.background = 'blue';
    nimekirjaElemendid[1].style.background = 'black';
    nimekirjaElemendid[2].style.background = 'white';
    
    nimekirjaElemendid[i].style.color = 'pink';
}
//for each

/*
nimekirjaElemendid.forEach(function(element){
  console.log(element);
  element.style.background = "#ddd"
})


console.log(nimekirjaElemendid)
*/

let nimekiriPaaritu = document.querySelectorAll('li:nth-child(even');
console.log(nimekiriPaaritu);