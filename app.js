// Raamatu konstruktor
function Raamat(a, p, i){
    this.autor = a;
    this.pealkiri = p;
    this.isbn = i;
}

// Kasutajaliides - KL
// konstruktor

function KL(){

}

// KL funtsionaal
// sisendväljade puhastamine

KL.prototype.puhastaSisend = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}

//raamatu lisamine tabelisse

KL.prototype.lisaRaamatTabelisse = function(r){
    // loome tabeli rea
    const rida = document.createElement('tr');
    // täidame rea tabeli andmetega
    rida.innerHTML = `
    <td>${r.pealkiri}</td>
    <td>${r.autor}</td>
    <td>${r.isbn}</td>
    `
    ;
    //lisame rea tabeli sisse
    tabel = document.getElementById('book-list');
    tabel.appendChild(rida);
}

//teade väljastamine

KL.prototype.teade = function(s){
    //loome div, kuhu lisada teade
    const div = document.createElement('div');
    div.className ='alert';
    const tekst = document.createTextNode(s);
    //lisame sõnumi teksti div sisse
    
    div.appendChild(tekst);
    // leiame elemedid, mille suhtes tuleb lisada uus element
    const konteiner = document.querySelector('.container');
    const vorm = document.getElementById('book-form');

    konteiner.insertBefore(div,vorm);
    // kustutame teate 5 sekundi möödumisel
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },5000);

}


document.getElementById('book-form').addEventListener('submit', lisaRaamat);

function lisaRaamat(e){
    const pealkiri = document.getElementById('title').value;
    const autor = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    // loome raamatu andmete põhjal

    const raamat = new Raamat(autor, pealkiri, isbn)
    
    console.log(raamat)
    

    const kl = new KL();
    // kui andmed on puudu, anname märku

    if(pealkiri == '' | autor == '' | isbn == ''){
        kl.teade('Tuleb täita kõik väljad');
    }else{
        kl.lisaRaamatTabelisse(raamat);
        kl.teade('Raamat on lisatud');
        
    }
    //lisame sisestatud raamatu tabelisse

    kl.lisaRaamatTabelisse(raamat);
    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();
    
    e.preventDefault();

}


