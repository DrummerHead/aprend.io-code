var tbody = document.querySelector('tbody');
var tr = tbody.querySelectorAll('tr');
var inherited = [];
var notInherited = [];

for(var i = 0; i < tr.length; i++){
  var I = tr.item(i);
  var mediaGroup = I.querySelector('td:last-child').textContent;
  var isInherited = I.querySelector('td:nth-child(5)').textContent;
  I.setAttribute('class', mediaGroup)

  if(isInherited.match(/yes/)){
    inherited.push(tbody.removeChild(I))
  }
  else{
    notInherited.push(tbody.removeChild(I))
  }
}

var putBack = function(el, i, array){
  tbody.appendChild(el);
}

inherited.forEach(putBack)
notInherited.forEach(putBack)
