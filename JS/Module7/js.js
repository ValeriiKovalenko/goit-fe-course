'use strict'






















// ---------------------------------------------------
// let text = document.getElementsByClassName('text')
// let double = document.getElementById('double')
// double.style.color = 'red'
// let text = document.querySelector('div')
// console.log(text.textContent)
// console.log(double.textContent)

// let list = document.querySelector('.list');
// function fn (el){
//     let newMas = Array.from(el).map(el=>el.textContent);
//     return newMas
  
// }

// let copyMas =  fn(list.children);
// console.log(copyMas);

// const element = document.createElement('ul')
// const body = document.body
// body.prepend(element)
// let getli =copyMas.reduce((string, el)=> string + `<li>${el}</li>`, '')
// element.innerHTML = getli
// -------------------------------------------------------÷


// let textInput = document.querySelector('.text');
// let Input = document.querySelector('.input');
// let btn = document.querySelector('.btn');
// console.log(btn);
// btn.onclick = function(){
//     textInput.textContent = 'new'
//     textInput.textContent = Input.value
//     textInput.style.fontSize = '100px'
//     textInput.style.color = 'red'
// }

let forwardBtn = document.querySelector('.forward')
let backBtn = document.querySelector('.back')
let images = document.querySelectorAll('.images img')

console.log(images)
let i = 0
forwardBtn.onclick = function(){
images[i].className = ''
i++ 
if(i >= images.length){
    i = 0
}
setTimeout(() => {
images[i].className = 'showed'
},20)
}

backBtn.onclick = function(){
    images[i].className = ''
    i-- 
    if(i<0){
        i = images.length -1
    }
    setTimeout(() => {
    images[i].className = 'showed'
    },20)
    }


