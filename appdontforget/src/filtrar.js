var elements = document.getElementsByClassName("inter");
var elements2 = document.getElementsByClassName("norm");
var elements3 = document.getElementsByClassName("impor");


function importante() {
  for (var i = 0; i < elements.length; i++)
    elements[i].style.display = 'none';
  for (var i = 0; i < elements2.length; i++)
    elements2[i].style.display = 'none';
  for (var i = 0; i < elements3.length; i++)
    elements3[i].style.display = 'block';
}


function intermedio() {
  for (var i = 0; i < elements3.length; i++)
    elements3[i].style.display = 'none';
  for (var i = 0; i < elements2.length; i++)
    elements2[i].style.display = 'none';
  for (var i = 0; i < elements.length; i++)
    elements[i].style.display = 'block';
}
function normal() {
  for (var i = 0; i < elements.length; i++)
    elements[i].style.display = 'none';
  for (var i = 0; i < elements3.length; i++)
    elements3[i].style.display = 'none';
  for (var i = 0; i < elements2.length; i++)
    elements2[i].style.display = 'block';

}

function todo() {
  for (var i = 0; i < elements.length; i++)
    elements[i].style.display = 'block';
  for (var i = 0; i < elements3.length; i++)
    elements3[i].style.display = 'block';
  for (var i = 0; i < elements2.length; i++)
    elements2[i].style.display = 'block';
}

function clearAll() {
  localStorage.clear();
  window.location.reload()

}



