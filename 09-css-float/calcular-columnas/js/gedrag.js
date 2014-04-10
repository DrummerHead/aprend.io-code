(function(document){

'use strict';




var form = document.getElementById('calculate');
var colNum = document.getElementById('colNum');
var colGap = document.getElementById('colGap');
var code = document.getElementById('code');
var useCase = document.getElementById('use-case');
var head = document.querySelector('head');

form.addEventListener('submit', function(e){
  e.preventDefault();
  var colNumVal = parseInt(colNum.value, 10);
  var colGapVal = parseFloat(colGap.value);
  createCss(colNumVal, colGapVal);
  createUseCase(colNumVal);
}, false);

var createCss = function(colNum, colGap){
  code.innerHTML = '';
  code.insertAdjacentHTML('afterBegin', '<textarea id="css-output"></textearea>');
  var cssOutput = document.getElementById('css-output');
  var cssResult =
    ".row {\n" +
    "  margin: 0 -" + colGap + "em;\n" +
    "  -webkit-box-sizing: border-box;\n" +
    "     -moz-box-sizing: border-box;\n" +
    "          box-sizing: border-box;\n" +
    "}\n" +
    ".row:before,\n" +
    ".row:after {\n" +
    "  content: '';\n" +
    "  display: table;\n" +
    "}\n" +
    ".row:after {\n" +
    "  clear: both;\n" +
    "}\n";

  for(var i = 1, floatClasses = '', widthClasses = ''; i <= colNum; i++){
    floatClasses += ".col-" + i + ",\n";
    widthClasses +=
      ".col-" + i + " {\n" +
      "  width: " + ((i * 100) / colNum) + "%;\n" +
      "}\n";

    if(i == colNum){
      floatClasses = floatClasses.slice(0, -2);
      floatClasses +=
        " {\n" +
        "  float: left;\n" +
        "  padding: 0 " + colGap + "em;\n" +
        "  -webkit-box-sizing: border-box;\n" +
        "     -moz-box-sizing: border-box;\n" +
        "          box-sizing: border-box;\n" +
        "}\n";
      cssResult += floatClasses;
      cssResult += widthClasses;
    }
  }

  cssOutput.value = cssResult;
  head.insertAdjacentHTML('beforeEnd', '<style>' + cssResult + '</style>');
};

var createUseCase = function(colNum){
  var useCaseHtml = '';

  for(var i = 2; i <= colNum; i++){
    if(colNum % i === 0){
      useCaseHtml += "<div class='row'>\n";
      for(var j = 1, classNumber = colNum / i; j <= i; j++){
        useCaseHtml +=
          "  <div class='col-" + classNumber + "'>\n" +
          "    .col-" + classNumber + "\n" +
          "  </div>\n";
      }
      useCaseHtml += "</div>\n";
    }
  }

  for(var i = 1; i < colNum; i++){
    useCaseHtml +=
      "<div class='row'>\n" +
      "  <div class='col-" + i + "'>\n" +
      "    .col-" + i + "\n" +
      "  </div>\n" +
      "  <div class='col-" + (colNum - i) + "'>\n" +
      "    .col-" + (colNum - i) + "\n" +
      "  </div>\n" +
      "</div>\n";
  }

  useCase.innerHTML = '';
  useCase.insertAdjacentHTML('afterBegin', useCaseHtml);
};




})(document);
