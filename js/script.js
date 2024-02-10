let todoistTogle = document.querySelector('.todoistTogle');
let togleball = document.querySelector('.togleball');

todoistTogle.addEventListener("click", function(){
    togleball.classList.add('togleLeft');
    todoistTogle.style.backgroundColor = "red"
});

console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(screen.width);
console.log(screen.height);