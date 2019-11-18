//document meetod
// elementide loomine

const liElement = document.createElement('li');

// lisa klass

liElement.className = 'collection-item';

//lisa ID
liElement.id = 'new-item';

// lisa atribuudid

liElement.setAttribute('title','Uus element');

// lisa teksti väljund

liElement.textContent = 'Uus element';

// loome lingi elemendi

const link = document.createElement('a');

link.className = 'delete-item secondary-content';

link.innerHTML = '<i class="fa fa-remove"></i>';

// lisame lingi listi elemendi sisse
liElement.appendChild(link); 

//leaime ul elemendi DOM-is

ulElement = document.querySelector('ul.collection');

//lisa liElement ul elemendile

ulElement.appendChild(liElement);





console.log(ulElement);