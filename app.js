

class Ylesanne{
    constructor(sisu){
    this.sisu = sisu;
  }
};

class KL{

    

    lisaYlesanne(){
    let todosUl = document.querySelector('ul');
    let todosLi = document.createElement('li');
    let a = document.createElement('a');
    let i = document.createElement('i');
    
    todosLi.innerHTML = document.getElementById('task').value;
    
    todosLi.className = "collection-item";
    a.className = "secondary-content delete-item";
    a.href = "#";
    i.className = "fa fa-remove";
    
    todosUl.appendChild(todosLi);
    todosLi.appendChild(a);
    a.appendChild(i);
    let as  = document.querySelectorAll('.delete-item');
    for (let element of as){
        element.addEventListener('click', function(){element.parentNode.remove();
        })
      }
    }
    
    kustutaKoik(){
      document.querySelector('.collection').innerHTML = '';
    }
}
    
      


let lisa = new KL();
let eemaldaKoik = new KL();


document.querySelector('.btn_lisaylesanne').addEventListener('click', lisa.lisaYlesanne);
document.querySelector('.clear-tasks').addEventListener('click', eemaldaKoik.kustutaKoik);



class LS{
  lisaLocalStoragisse(){
  // Plaanime luua localstoragisse lisamise  
    
    localStorage.setItem('todo',JSON.stringify(document.getElementById('task').value));
    
  }

  votaLocalStoragist(){
    // Localstoragist lugemine
    localStorage.getItem
  }

  //Localstoragist kustutamine
}
let lisaLS = new LS()
document.querySelector('.btn_lisaylesanne').addEventListener('click', lisaLS.lisaLocalStoragisse);


