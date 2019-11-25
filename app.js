// inimese kirjeldus OOP abil
// inimese konstruktor

function Isik(e, p){
    this.eesnimi = e;
    this.perenimi = p;
   
}

Isik.prototype.taisNimi = function(){
    return `${this.eesnimi} ${this.perenimi}`;
}

//kliendi konstruktor
function Klient(e,p,t,s){
    Isik.call(this, e, p);
    this.telNr = t;
    this.status = s;
}

// teiste meedotite/ konstruktoroite kasutamine

Klient.prototype = Object.create(Isik.prototype);
Klient.prototype.constructor = Klient;

// määrame taisNimi functsiooni Klient objektile

Klient.prototype.taisNimi = function(){
    return `${this.eesnimi} ${this.perenimi} - sinul on ${this.status} tase`;
}

const kadi = new Klient('kadi', 'tamm', '372552525','hõbe');

console.log(kadi.taisNimi())