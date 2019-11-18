// lea vana element h5

const vanaPealkiri = document.querySelector('h5');

// leia kaart, kus antud pealkiri on

const divCardAction = document.querySelector('.card-action');

// loo uus pealkiri

const uusPealkiri = document.createElement('h3');

uusPealkiri.id = 'new-title';

// lisa sisu

uusPealkiri.textContent = 'Uued ülesanded';

//uusPealkiri.appendChild(document.createTextNode('Uued ülesanded'));

// asenda vana pealkiri uuega

divCardAction.replaceChild(uusPealkiri, vanaPealkiri);


console.log(uusPealkiri);


const vana = document.querySelector('span');

console.log(vana);

const divVana = document.querySelector('.card-title');

const uus = document.createElement('h3');

uus.textContent = "Ülesanded";

divVana.replaceChild(uus, vana);

