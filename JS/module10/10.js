'use strict'

// let PrivatApiJSON;
// const about = {
//     name : 'Maksim',
//     isActive : true,
//     hobby : {
//         run : true,
//         jump : false,
//     }
// }

// const jasonAbout = JSON.stringify(about)
// console.log(jasonAbout);

// const parseAbout = JSON.parse(jasonAbout)
// console.log(parseAbout);
// ________________________________________________________

// function getPost(posts){

//     return fetch(`https://jsonplaceholder.typicode.com/posts/${posts}`)
//     .then(response => response.json())
// }
// getPost(5).then(data => console.log(data))


// -------------------------------------------

// const newObj = {
//     name : 'Bond',
//     number : '007',
//     car : {
//         first : 'Jaguar',
//         second : 'Aston',
//         third : 'Lada'
//     },
//     ableToKill : true,
// }

// const url = 'https://jsonplaceholder.typicode.com/posts';
// const settings = {
//     method : 'POST',
//     body : JSON.stringify(newObj),
//     headers : {
// 'Content-type' : 'application/json'
//     }
// }

// fetch(url, settings).then(response=> response.json()).then(data => console.log(data))

// ++++++++++++++++++++++++++++++++++++++++++++


// const url = 'https://jsonplaceholder.typicode.com/posts/3';
// const putObj = {
//     title : 'happy title'
// }

// const putSettings = {
//     method : 'PUT',
//     body : JSON.stringify(putObj),
//     headers : {'Content-type' : 'application/json'} }


//     fetch(url, {method: 'DELETE'}).then(response=> response.json()).then(data => console.log('del'))


// ==========================================LOCAL STORAGE


// let obj = {
//     name : 'Valerii',
//     job : 'hakerman'
// }
// localStorage.setItem('about', JSON.stringify(obj))
// let result = JSON.parse(localStorage.getItem('about'));
// // console.log(result);


// ====================================================ПАФОСНАЯ ТЕМА!!
// let inp = document.querySelector('input')
// let btn = document.querySelector('button')
//  let txt = document.querySelector('p')


//  function writeLocal(){
//      localStorage.setItem('about', inp.value)
//      getLocal()
//     }

//     function getLocal(){

//         txt.textContent = localStorage.getItem('about', '')

//  }

//  getLocal()
// btn.addEventListener('click', writeLocal )

// =================================================================HOME WORK


/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "https://restcountries.eu/rest/v2/name/";

// function fetchCountryData(evt) {
//    evt.preventDefault()

//     fetch(API_URL + input.value)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//      data.forEach(el => 
//         result.innerHTML = `
//         <p>${el.name}</p>
//         <p>${el.capital}</p>
//         <img src="${el.flag}"> 
//         <p>${el.currencies[0].name}</p>


//         `,
//     )})

// form.addEventListener("submit", fetchCountryData);
// }
// ===================================2



/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "https://api.github.com/users/";






// function fetchUserData(evt) {
//     evt.preventDefault()


//     fetch(API_URL + input.value)
//     .then(response => response.json())
//     .then(data => result.innerHTML =` ${data['login']}<img src=${data.avatar_url}> 
//     <p>Username${data.name}</p> <p>CREATED${data.created_at}</p> <p>Public Repos${data.public_repos}</p>`)
    
    
// }
// form.addEventListener("submit", fetchUserData);

// =====================================================3

/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/

// const form = document.querySelector(".search-form");
// const userTable = document.querySelector(".users-table");
// let btn = document.querySelector('.mdc-btn')

// function fetchUsers(evt) {
//     evt.preventDefault()

//     fetch('https://jsonplaceholder.typicode.com/users/').then(reject => reject.json()).then(data => {

        
//             console.log('/NAME/   ', data[0].name, '        /MAIL/   ', data[0].email, '      /CITY/    ', data[0].address.city, '        /WEBSITE/   ', data[0].website, '      /COMPANY/   ', data[0].company.name);
//             console.log('/NAME/   ', data[1].name, '        /MAIL/   ', data[1].email, '      /CITY/    ', data[1].address.city, '        /WEBSITE/   ', data[1].website, '      /COMPANY/   ', data[1].company.name);
//             console.log('/NAME/   ', data[2].name, '        /MAIL/   ', data[2].email, '      /CITY/    ', data[2].address.city, '        /WEBSITE/   ', data[2].website, '      /COMPANY/   ', data[2].company.name);
//             console.log('/NAME/   ', data[3].name, '        /MAIL/   ', data[3].email, '      /CITY/    ', data[3].address.city, '        /WEBSITE/   ', data[3].website, '      /COMPANY/   ', data[3].company.name);
//             console.log('/NAME/   ', data[4].name, '        /MAIL/   ', data[4].email, '      /CITY/    ', data[4].address.city, '        /WEBSITE/   ', data[4].website, '      /COMPANY/   ', data[4].company.name);
//             console.log('/NAME/   ', data[5].name, '        /MAIL/   ', data[5].email, '      /CITY/    ', data[5].address.city, '        /WEBSITE/   ', data[5].website, '      /COMPANY/   ', data[5].company.name);
//             console.log('/NAME/   ', data[6].name, '        /MAIL/   ', data[6].email, '      /CITY/    ', data[6].address.city, '        /WEBSITE/   ', data[6].website, '      /COMPANY/   ', data[6].company.name);
//             console.log('/NAME/   ', data[7].name, '        /MAIL/   ', data[7].email, '      /CITY/    ', data[7].address.city, '        /WEBSITE/   ', data[7].website, '      /COMPANY/   ', data[7].company.name);
//             console.log('/NAME/   ', data[8].name, '        /MAIL/   ', data[8].email, '      /CITY/    ', data[8].address.city, '        /WEBSITE/   ', data[8].website, '      /COMPANY/   ', data[8].company.name);
//             console.log('/NAME/   ', data[9].name, '        /MAIL/   ', data[9].email, '      /CITY/    ', data[9].address.city, '        /WEBSITE/   ', data[9].website, '      /COMPANY/   ', data[9].company.name);


//             userTable.innerHTML = `<ul>
//             <li>/NAME/  ${data[0].name}________/MAIL/   ${data[0].email}________/CITY/  ${data[0].address.city}________/WEBSITE/  ${data[0].website},____________/COMPANY/  ${data[0].company.name}</li>
//             <li>/NAME/  ${data[1].name}________/MAIL/   ${data[1].email}________/CITY/  ${data[1].address.city}________/WEBSITE/  ${data[1].website},____________/COMPANY/  ${data[1].company.name}</li>            </li>
//             <li>/NAME/  ${data[2].name}________/MAIL/   ${data[2].email}________/CITY/  ${data[2].address.city}________/WEBSITE/  ${data[2].website},____________/COMPANY/  ${data[2].company.name}</li>            </li>
//             <li>/NAME/  ${data[3].name}________/MAIL/   ${data[3].email}________/CITY/  ${data[3].address.city}________/WEBSITE/  ${data[3].website},____________/COMPANY/  ${data[3].company.name}</li>            </li>
//             <li>/NAME/  ${data[4].name}________/MAIL/   ${data[4].email}________/CITY/  ${data[4].address.city}________/WEBSITE/  ${data[4].website},____________/COMPANY/  ${data[4].company.name}</li>            </li>
//             <li>/NAME/  ${data[5].name}________/MAIL/   ${data[5].email}________/CITY/  ${data[5].address.city}________/WEBSITE/  ${data[5].website},____________/COMPANY/  ${data[5].company.name}</li>            </li>
//             <li>/NAME/  ${data[6].name}________/MAIL/   ${data[6].email}________/CITY/  ${data[6].address.city}________/WEBSITE/  ${data[6].website},____________/COMPANY/  ${data[6].company.name}</li>            </li>
//             <li>/NAME/  ${data[7].name}________/MAIL/   ${data[7].email}________/CITY/  ${data[7].address.city}________/WEBSITE/  ${data[7].website},____________/COMPANY/  ${data[7].company.name}</li>            </li>
//             <li>/NAME/  ${data[8].name}________/MAIL/   ${data[8].email}________/CITY/  ${data[8].address.city}________/WEBSITE/  ${data[8].website},____________/COMPANY/  ${data[8].company.name}</li>            </li>
//             <li>/NAME/  ${data[9].name}________/MAIL/   ${data[9].email}________/CITY/  ${data[9].address.city}________/WEBSITE/  ${data[9].website},____________/COMPANY/  ${data[9].company.name}</li>            </li>
//             </ul>`

        
//     })


// }

// btn.addEventListener("click", fetchUsers);








// =====================================================4?????????????

/*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос 
  на получение информации о пользоватеьте с id (число) введенным в input. 
  Не забывайте что значение input это строка.
 
  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

//   
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// let API_URL = 'https://jsonplaceholder.typicode.com/users/';
// let input = document.querySelector('input')
// form.addEventListener("submit", getUserById);

// function getUserById(evt) {
//     evt.preventDefault()


//         fetch(API_URL + input.value)
//         .then(response => {
//             if(response.ok) return response.json()

//                 throw new Error(result.innerHTML ='Ошибка! Пользователя с таким id не существуе')

//         })
//         .then(data =>  result.innerHTML = `${data['name']}, ${data['email']}, ${data['phone']}, ${data['website']}`)
       
          
   
       
        
// }
// // ===============================================HOMETASK

// /*
//   Написать приложение для работы с REST сервисом, 
//   все функции делают запрос и возвращают Promise 
//   с которым потом можно работать. 
  
//   Реализовать следующий функционал:
//   - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
//   - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
//   - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
//   - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
//   - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
//     user это объект с новыми полями name и age.
//   Документацию по бэкенду и пример использования прочитайте 
//   в документации https://github.com/trostinsky/users-api#users-api.
//   Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
//   А так же панелью для вывода результатов операций с бэкендом.
// */

// let result = document.querySelector('.result')
// let input = document.querySelector('input')
// const form = document.querySelector(".search-form");
// let btnAll = document.querySelector('.mdc-btn')
// let btnId = document.querySelector('.getbyid')
// let btnAdd = document.querySelector('.add')
// let btnRmv = document.querySelector('.remove')
// let btnUpd = document.querySelector('.upd')

// btnAll.addEventListener("click", getAllUsers);
// btnId.addEventListener("click", getUserById);
// btnAdd.addEventListener("click", addUser);
// btnRmv.addEventListener("click", removeUser);
// btnUpd.addEventListener("click", updateUser);

// let API_URL = 'https://test-users-api.herokuapp.com/users/';

// // __________________________________________________________

// function getAllUsers(evt){
// evt.preventDefault()
// fetch(API_URL).then(response=>{if(response.ok) return response.json() 
//     throw new Error(result.innerHTML ='Ошибка! Пользователя с таким id не существуе') })
//     .then(data => {
//         data.data.forEach(el => {
//             result.innerHTML += `<p>${el.name} | ${el.age} | ${el.id}</p>`
//         })
//     })


// }

// // ______________________________________________________

// function getUserById(evt){
//     evt.preventDefault()
//     fetch(API_URL+input.value).then(response => {if(response.ok) return response.json()
//     throw new Error(result.innerHTML ='Ошибка! Пользователя с таким id не существуе')})
//     .then(data=> result.innerHTML = `<p>${data.data.name} | ${data.data.age} | ${data.data.id}</p>`)

// }

// // _____________________________________________________

// function addUser(evt){
// evt.preventDefault()

// const newObj = {
//         name : 'Bond',
//         age : '71',
//         id : '1234',
//     }




//     const settings = {
//             method : 'POST',
//             body : JSON.stringify(newObj),
//             headers : {
//         'Content-type' : 'application/json'
//             }
//         }

//         fetch(API_URL, settings).then(response=> response.json()).then(data => result.innerHTML = `<p>${data.data.name} | ${data.data.age} | </p>`)


// }

// // ____________________________________

// function removeUser(evt){
//     evt.preventDefault()
    
    
    
    
   
//     fetch(API_URL + input.value, {method: 'DELETE'}).then(() => console.log('delete DONE')
//     )

// }

// // _______________________________________________

// function updateUser(evt){
// evt.preventDefault()


// let a1 = {
//     name : 'Valerii',
//     age : 23,
// }

// fetch(API_URL+input.value, {method: 'PUT', body: JSON.stringify(a1), headers : {'Content-type' : 'application/json'}})
// .then(reject => reject.json())
// .then(data=> console.log(data)
// )

// }