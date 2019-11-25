// Raamatu konstruktor
function Raamat(a, p, i){
    this.autor = a;
    this.pealkiri = p;
    this.isbn = i;
}

document.getElementById('book-form').addEventListener('submit', lisaRaamat);

function lisaRaamat(e){
    const pealkiri = document.getElementById('title').value;
    const autor = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    // loome raamatu andmete põhjal

    const raamat = new Raamat(pealkiri, autor, isbn)
    
    console.log(raamat)
    e.preventDefault();


}


