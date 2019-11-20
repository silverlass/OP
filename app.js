
// events

const kustutaKoik = document.querySelector('.clear-tasks');

const text = document.querySelector('h5');
const kaart = document.querySelector('.card');

//kustutaKoik.addEventListener('click', syndmus);
//kustutaKoik.addEventListener('dblclick', syndmus);
//kustutaKoik.addEventListener('mousedown', syndmus);
//kaart.addEventListener('mouseleave', syndmus);
//kaart.addEventListener('mouseneter', syndmus);
//kaart.addEventListener('mouseover', syndmus);
//kaart.addEventListener('mouseleave', syndmus);

function syndmus(e){
    // logi sündmuse tyyp

    console.log(`sündmuse tyyp: ${e.type}`);

    // muuda text sisu: Hiirx kooridnaat, HiirY koordinaat

    text.textContent = "HiirX: " + e.offsetX + " HiirY: " + e.offsetY + ' Jüri IQ on:  ' + e.offsetX;

    // body värv

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}

