'use strict'

// let btn = document.querySelector('.btn')

// function click (){
//     alert('ok');
    
// }
// btn.addEventListener('click', click)



// const About = {
//     name: 'Maksim',
// showName(){
//     console.log(this.name);
    
// }
// }
// About.showName()

// btn.addEventListener('click', About.showName.bind(About))

// =================1
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// let i = 0;
// let btn = document.querySelector('.button')
// function add (){
// i++
// btn.textContent= i;
// }
// btn.addEventListener('click', add)


// ===================2

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/


// let div = document.querySelectorAll('.expression > input')



// console.log(document.querySelector('.expression'));

// let input1 = document.querySelector('.one')
// console.log(input1.value);
// let input2 = document.querySelector('.two')
// let result = document.querySelector('.result')

// let btn = document.querySelector('button')
// console.log(result);

// console.log(input1.placeholder);

// function plus(){
// console.log('ok');

// result.textContent = Number(input1.value) + Number(input2.value)


// }


// btn.addEventListener('click', plus)

// ===========================3

/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

// let div = document.querySelectorAll('button')
// let min = div[0]
// let max = div[1]
// let result = document.querySelector('span')
// console.log(result);

// function plus(){
//     console.log('plus');
    
//     result.textContent++
    
    
//     }
//     max.addEventListener('click', plus)

//     function minus(){
//         console.log('minus');
//         result.textContent--
        
//     }
//     min.addEventListener('click', minus)
// ------------------------------
// let sub = document.querySelector('button[data-action="sub"]')
// let add = document.querySelector('button[data-action="add"]')
// let result = document.querySelector('.value')
// console.log(result);


//     class Counter {
//         constructor(onChange){
//             this.value = 0;
//             this.onChange = onChange
//             this.increment = this.increment.bind(this)
//             this.decrement = this.decrement.bind(this)
    
//         }
//     increment() {
//       this.value++;
//       this.onChange(this.value);
//     }
//     decrement() {
//       this.value--;
//       this.onChange(this.value);
//     }
//     }
    
//     function onChange(value) {
//       result.textContent = value;
      
//     }
//     let counter = new Counter(onChange)


// console.log(counter.increment);
// sub.addEventListener('click', counter.decrement);
// add.addEventListener('click', counter.increment)



// =================================4

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/
// let form = document.querySelectorAll('.question-form input')
// let text = document.querySelector('p')
// let btn = document.querySelector('button')

// function checkIt(event){
//     event.preventDefault()

// let a = form.forEach(el=> el.checked ? text.textContent = el.value : 0)


// }

// btn.addEventListener('click', checkIt)

// =========================================5



/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/


// let container = document.querySelector('.images')
// console.log(container);


// function show (event){
// console.log(event.target.src, event.target.alt);

// }
// container.addEventListener('click', show)

// ===========================================6

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

// let div = document.querySelector('.list')
// console.log(div);

// let btn = div.querySelectorAll('button[data-action = "delete"')
// console.log(btn);
// let li = div.querySelectorAll('li')
// console.log(li);

// function deleteLi(event){
// if(event.target.nodeName === 'BUTTON'){
//   event.target.parentNode.remove()
// }
// }
// div.addEventListener('click', deleteLi)

// ==============================================7

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// focusOut

// let div = document.querySelector('.input-list')
// console.log(div);

// function checkIt (event){
//   if(event.target.value.length !== Number(event.target.getAttribute('data-length'))){
//     event.target.classList.add('invalid')
    
//   } else { event.target.classList.add('valid')}
// }
  
// div.addEventListener('focusout', checkIt);

// ====================================================8

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

// let input = document.querySelector('input')
// let msg = document.querySelector('.message')
// let value = document.querySelector('.input-value')
// console.log(value);


// function render (){
//   msg.textContent = 'Input is in focus!'

// }

// function equal (){
//   value.textContent = input.value
// }
// input.addEventListener('focusin', render)
// input.addEventListener('input', equal )

// =====================================================9


/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

// let btn = document.querySelector('.btn')
// let div = document.querySelector('.js-modal-backdrop')
// let close = document.querySelector('.close-btn')
// let modal = document.querySelector('.modal')

// function activate (){
// div.classList.remove('modal-hidden')
// }

// btn.addEventListener('click', activate)

// function deactivate (ev){
//   if(ev.target === modal || ev.target === close)
//   div.classList.add('modal-hidden')

// }
// close.addEventListener('click', deactivate)
// modal.addEventListener('click', deactivate)

// ===============================================10

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/
// let li = document.querySelectorAll('.menu-item > a')
// console.log(li);
// let ul = document.querySelector('ul')


// function activate (event){
//   if(event.target.nodeName === 'A'){
// li.forEach(el => el.classList.remove('active'));
// event.target.classList.add('active')
// }}

// ul.addEventListener('click', activate)










// ===============================================HOME WORK
/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  { preview: './img/1s.jpeg', fullview: './img/1L.jpeg', alt: "alt text 1" },
  { preview: './img/2s.jpeg', fullview: './img/2L.jpeg', alt: "alt text 2" },
  { preview: './img/3s.jpeg', fullview: './img/3L.jpeg', alt: "alt text 3" },
  { preview: './img/4s.jpeg', fullview: './img/4L.jpeg', alt: "alt text 4" },
  { preview: './img/5s.jpeg', fullview: './img/5L.jpeg', alt: "alt text 5" },
  { preview: './img/6s.jpeg', fullview: './img/6L.jpeg', alt: "alt text 6" },
];
let previewIMG = galleryItems.map(a => a.preview);
let fullIMG = galleryItems.map(a => a.fullview);


let div = document.querySelector('.js-image-gallery')
let full = document.createElement('div')
let small = document.createElement('ul')
let bi = document.createElement('img')
div.prepend(full)
div.append(small)
full.prepend(bi)

full.classList.add('fullview')
small.classList.add('preview')


small.innerHTML = `<li><a><img src=${previewIMG[0]} alt=${fullIMG[0]}></a></li>
<li><a><img src=${previewIMG[1]} alt=${fullIMG[1]}></a></li>
<li><a><img src=${previewIMG[2]} alt=${fullIMG[2]}></a></li>
<li><a><img src=${previewIMG[3]} alt=${fullIMG[3]}></a></li>
<li><a><img src=${previewIMG[4]} alt=${fullIMG[4]}></a></li>
<li><a><img src=${previewIMG[5]} alt=${fullIMG[5]}></a></li>`

full.innerHTML = `<img src=${fullIMG[0]}>`

function choose(event){
  
  if( event.target.nodeName === 'IMG'){
   
    full.innerHTML = `<img src=${event.target.alt}>`
}}

div.addEventListener('click', choose)



/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
  аналогичный заданию выше.
  
  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию
    
  Тогда создание экземпляра будет выглядеть следующим образом.
*/

// new Gallery({
//   items: galleryItems,
//   parentNode: document.querySelector('.image-gallery'),
//   defaultActiveItem: 1
// });

/* Далее плагин работает в автономном режиме */






    // class Counter {
    //     constructor(){
    //         this.value = 0;
            
    
    //     }
    
    //     get increment() {
    
    //     }
    
    //     get decrement() {
    
    //     }
    // }