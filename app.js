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


document.getElementById('book-form').addEventListener('submit', lisaRaamat);

function lisaRaamat(e){
    const pealkiri = document.getElementById('title').value;
    const autor = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    // loome raamatu andmete põhjal

    const raamat = new Raamat(autor, pealkiri, isbn)
    
    console.log(raamat)
    

    const kl = new KL();

    //lisame sisestatud raamatu tabelisse

    kl.lisaRaamatTabelisse(raamat);
    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();
    
    e.preventDefault();

}


