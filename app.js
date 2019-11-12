// single element selector

sisu = document.getElementById('title');

id = document.getElementById('title').id; // id
klass = document.getElementById('title').className;


document.getElementById('title').style.background = '#333';

sisu.style.color = '#fff';
sisu.style.padding = '5ps';
sisu.textContent = 'Minu ülesanded';
sisu.innerText = 'Ainult minu ülesanded';
sisu.innerHTML = '<span style="color:green">Vabad ülesanded</span>';



console.log(sisu);