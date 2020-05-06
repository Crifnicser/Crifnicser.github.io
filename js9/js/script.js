//1
// let btn = document.querySelector(".sbm");
// btn.addEventListener('click', function(event){
//     event.preventDefault();
//     alert('ти натиснув на кнопку');
// });

//2
// let btn = document.querySelector(".toogle"),
//     img = document.querySelector(".Minecraft");
// btn.addEventListener('click', function(){
//     if (img.classList.contains("hide")) {
//         img.classList.remove("hide");
//     } else {
//         img.classList.add("hide");
//     }
// });

//3
// let input = document.querySelector(".phone");
// input.addEventListener('input', function(){
//     console.log(input.value);
// });

//4
// let input = document.querySelector(".phone");
// input.addEventListener('change', function(){
//     console.log(input.value);
// });

//5
// document.addEventListener('DOMContentLoaded', function() {
//     console.log("сторінка завантажена");
// });

//6
// let btn = document.querySelector(".sbm"),
//     inputs = document.getElementsByClassName("input"),
//     obj = {};
// document.addEventListener('DOMContentLoaded', loadFunc());
// function loadFunc() {
//     btn.addEventListener('click', function() {
//         obj = {
//             name:inputs[0].value,
//             number:inputs[1].value 
//         };
//         console.log(obj);
//     });
// }

//7
// let img = document.querySelector(".shavuha");
// img.addEventListener('mouseover', function() {
//     alert(img.src);
// });

//8
let btn = document.querySelector(".sbm"),
    name = document.querySelector(".name");
btn.addEventListener('click', function() {
    if (name.value === 'Сергій') {
        alert('You Winner!');
        name.value = '';
    } else {
        name.value = '';
    }
});
