'use strict'

const $ = document.querySelector.bind(document);

function createNewTodo(){
    var d = document.createElement('div'); // create div, d
    $('.items').appendChild( d );
d.innerHTML = $('.newtodo').value; // add text to d
$('.newtodo').value= '';
// add onclick functionality to d
d.onclick = function(){
 d.className = 'done'; // change d class
};
}
