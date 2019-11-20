// // storage

// // salvesta väärtus

// localStorage.setItem('nimi', 'Silver');
// localStorage.setItem('perenimi', 'Lass');

// // väärtuse eemaldamine

// //localStorage.removeItem('nimi', 'Silver');

// // väärtuste lugemine
// const nimi = localStorage.getItem('nimi');
// console.log(nimi);

// // eemalda kõik väärtused

// localStorage.clear();

document.querySelector('form').addEventListener('submit', salvesta);

function salvesta(e){
    const uusYlesanne = document.getElementById('task').value;
    localStorage.setItem('tasks', uusYlesanne);

    let ylesanded;
    if (localStorage.getItem('tasks') === null){
        ylesanded = [];
        console.log(ylesanded);
    }else{
        console.log('olemas')
        
    }



    localStorage.setItem('tasks', uusYlesanne);
}