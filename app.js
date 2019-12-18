document.getElementById('btn1').addEventListener('click', getTextData);
document.getElementById('btn2').addEventListener('click', getJsonData);
document.getElementById('btn3').addEventListener('click', getJsonAPI);

function getTextData(){
  fetch('fetch.txt').then(function(res){
    return res.text();
  })
  .then(function(data) {
    console.log(data);
    document.getElementById('out').innerHTML = data;
  })
  .catch(function(error){
    console.log(error);
  })
}

function getJsonData(){
  fetch('data.json').then(function(res){
    return res.json();
  })
  .then(function(data){
    console.log(data);
    let out = '';
    data.forEach(function(timetable){
      out = out + `<li>${timetable.opetaja} - ${timetable.aine} </li>`;
    });
    document.getElementById('out').innerHTML = out;
  })
  .catch(function(error){
    console.log(error);
  })  
}

function getJsonAPI(){
  fetch('https://api.github.com/users')
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    console.log(data);
    let out = '';
    data.forEach(function(users){
      out = out + `<li>${users.login}`;
      out = out + `<img src="${users.avatar_url}" width="150px" </li>`;
    });
    document.getElementById('out').innerHTML = out;
    
  })
  .catch(function(error){
    console.log(error);
  }); 
}