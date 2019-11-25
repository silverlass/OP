// inimese kirjeldus OOP abil
// inimese konstruktor

function Isik(e, p, skp){
    this.eesnimi = e;
    this.perenimi = p;
    this.synnikuupaev = new Date(skp);
}

Isik.prototype.taisNimi = function(){
    return `${this.eesnimi} ${this.perenimi}`;
}

// arvuta vanus
Isik.prototype.arvutaVanus = function(){
const vaheSekundites =Date.now() - this.synnikuupaev.getTime();
const vanusDateKujul = new Date(vaheSekundites);
const taisAasta = vanusDateKujul.getUTCFullYear();
const vanus = taisAasta -1970;
return vanus;

}
//objektid
const silver = new Isik('silver', 'Lass' ,'11-30-1984');
const kadi = new Isik('kadi', 'tamm', '11-30-1999');

console.log(silver);
