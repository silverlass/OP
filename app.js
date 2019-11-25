// inimese kirjeldus

let eesnimi, perenimi;
let vanus;

function taisNimi(eesnimi, perenimi){
    return `${eesnimi} ${perenimi}`;
}

function arvutaVanus(synnikuupaev){
    synnikuupaev = new Date(synnikuupaev);
    vaheSekundites =Date.now() - synnikuupaev.getTime();
    vanusDate =new Date(vaheSekundites);
    aastaDate = vanusDate.getUTCFullYear();
    vanus = aastaDate -1970;
    return `vanus ${vanus}`; 
}

console.log(taisNimi('sfdsdf', 'sfdsd'));
console.log(arvutaVanus("2014-08-21"));