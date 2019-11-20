
// events

const form = document.querySelector('form');
const lisaUusYlesanne = document.getElementById('task');

const text = document.querySelector('h5');
const kaart = document.querySelector('.card');

// kustutame lisaUusYlesanne väärtus

lisaUusYlesanne.value='';


//vormi saatmine

form.addEventListener('submit', syndmus)

function syndmus(e){
    // logi sündmuse tyyp

    console.log(`sündmuse tyyp: ${e.type}`);
    // kontrollime vormi kaudu saadud väärtust
    
    console.log(lisaUusYlesanne.value);
    // väljastame ülesande html-is

    text.innerText = lisaUusYlesanne.value;
}

