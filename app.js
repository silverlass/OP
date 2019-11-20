// sündmused

// bubbling

// lehe kaardi pealkiri
// document.querySelector('.card-title').addEventListener('click', function logi(e){
//    console.log('.card-title');

// });

// document.querySelector('.card-content').addEventListener('click', function(e){
//    console.log('.card-content');

// });

const kustutaYlesanne = document.querySelector('.delete-item');
kustutaYlesanne.addEventListener('click', kustuta);
function kustuta(e){
    console.log('hakkame kustutama');
    console.log(e.target.parentElement.parentElement);
    if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
}
}


console.log(kustutaYlesanne);

