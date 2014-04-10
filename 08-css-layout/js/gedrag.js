document.addEventListener('DOMContentLoaded', function(){




// Fetch elements
var $next = document.getElementById('next');
var $previous = document.getElementById('previous');
var $emulations = document.querySelectorAll('.main-emulation');
var $innerStyle = document.querySelectorAll('[data-style]');
var selectedExample = 0;


// Evaluate inner data-style attributes and apply as style attributes
for(var i = 0; i < $innerStyle.length; i++){
  var I = $innerStyle.item(i);
  var rawStyle = I.getAttribute('data-style');
  var style = eval(rawStyle);
  I.setAttribute('style', style);
  I.removeAttribute('data-style');
}


// Function for selecting an emulation
var selectExample = function(number){
  num = ((number % $emulations.length) + $emulations.length) % $emulations.length;
  $emulations.item(selectedExample).classList.remove('current');
  $emulations.item(num).classList.add('current');
  selectedExample = num;
}


// Bind behavior to controls
$next.addEventListener('click', function(){
  selectExample(selectedExample + 1);
});
$previous.addEventListener('click', function(){
  selectExample(selectedExample - 1);
});


// Initialize, select first emulation
selectExample(0);




});
