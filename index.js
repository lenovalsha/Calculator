var button = document.querySelector('button');
var box = document.getElementById('box');

button.onclick = function ChangeMe(){
    console.log('clicked');
    box.style.backgroundColor = 'green';
}