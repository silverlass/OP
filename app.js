

class Ylesanne{
    constructor(y){
    this.task = y;
  }
};



class KL{
  

  addTask(y){
      const rida = document.createElement('li');
      rida.innerHTML = `
      <p>${y.task}</p>
      <a class="delete-item secondary-content"><i class="fa kustuta fa-remove"></i></a>`;

      const tabel = document.querySelector('.collection');
      tabel.appendChild(rida);
  };
  clearTask(){
    document.getElementById('task').value = '';
  };



  deleteTask(kustutaElement){
      if(kustutaElement.className === 'fa kustuta fa-remove'){
          const tabelRow = kustutaElement.parentElement.parentElement;
          tabelRow.remove();
          return true;
      }
  };

  showTasks(){
      const ls = new LS();
      const TheTasks = ls.getTasks();
      TheTasks.forEach(function(ylesanne){
          const y = new Ylesanne(ylesanne['task']);

          const kl = new KL();

          kl.addTask(y)
      })
  }
}


document.addEventListener('DOMContentLoaded', TheTasks);

function TheTasks(e){
    const kl = new KL();

    kl.showTasks();
};

document.getElementById('clear-tasks').addEventListener('click', clearTasks);

function clearTasks(e){
    const tasksList = document.querySelector('.collection');
    while(tasksList.firstChild) {
        tasksList.removeChild(tasksList.firstChild);
    }

    localStorage.clear();
    const kl = new KL();
    
}

document.getElementById('add-task').addEventListener('submit', addTheTask);

function addTheTask(e){
    const task = document.getElementById('task').value;

    const ylesanne = new Ylesanne(task);

    const kl = new KL();

    
        kl.addTask(ylesanne)

        const ls = new LS();

        ls.saveTask(ylesanne);
        
    

    kl.clearTask();
    e.preventDefault();
};

document.querySelector('.collection').addEventListener('click', deleteTheTask);

function deleteTheTask(e){
    const kl = new KL();

    const X = e.target

    task = X.parentElement.previousElementSibling.textContent;
    kl.deleteTask(X)

    const ls = new LS();

    isDeleted = ls.deleteTaskLS(task);

    if(isDeleted){
        
       }
       
       e.preventDefault();
     }
    


class LS{
  getTasks(){
      let TheTasks;

      if(localStorage.getItem('TheTasks' ) === null){
          TheTasks = [];
      } else {
          TheTasks = JSON.parse(localStorage.getItem('TheTasks'));
      }
      return TheTasks;
  };
  
  saveTask(y){
      const TheTasks = this.getTasks();
      TheTasks.push(y);

      localStorage.setItem('TheTasks', JSON.stringify(TheTasks));
  };

  deleteTaskLS(task){
      const TheTasks = this.getTasks();
      TheTasks.forEach(function(ylesanne, index){

          if(ylesanne.task === task){
              TheTasks.splice(index, 1);
          }
      });
      localStorage.setItem('TheTasks', JSON.stringify(TheTasks));
      return true;
  }
}


