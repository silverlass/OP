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


document.getElementById('book-form').addEventListener('submit', lisaRaamat);

function lisaRaamat(e){
    const pealkiri = document.getElementById('title').value;
    const autor = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    // loome raamatu andmete põhjal

    const raamat = new Raamat(pealkiri, autor, isbn)
    
    console.log(raamat)
    

    const kl = new KL();
    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();
    
    e.preventDefault();

}


