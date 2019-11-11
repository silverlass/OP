// window objects / methods / properties

// alert
// window.alert('Tere hommikust'); //
// alert('Tere hommikust'); //

// prompt

// const sisend = prompt('Sisesta oma nimi');
// alert('Tere hommikust ' + sisend)

// confirm

// if(confirm('Kas oled nõus?')){
    // console.log('jah');
// }else{
//    console.log('ei');
// }

let valiKorgus = window.outerHeight;

console.log(valiKorgus)

let valiLaius = window.outerWidth;

console.log(valiLaius)

let siseKorgus = window.innerHeight;
let siseLaius = window.innerWidth;

console.log(siseKorgus, siseLaius)

// scroll

scrolY = window.scrollY;
console.log(scrolY)

// location object

let objekt = window.location;
let hostname = window.location.hostname;
console.log(hostname);

let port = window.location.port;
console.log(port);

let href = window.location.href;
console.log(href);

let search = window.location.search;
console.log(search);

// redirect

window.location.href = 'https://khk.ee';

//reload

window.location.reload();