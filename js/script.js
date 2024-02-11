window.addEventListener('scroll', function(){
    let winScroll = document.body.scrollTop || this.document.documentElement.scrollTop;
    let winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / winHeight) * 100;

    let progress = document.querySelector(".progress");
    progress.style.width = scrolled + "%";
});


let todoistTogle = document.querySelector('.todoistTogle');
let togleball = document.querySelector('.togleball');

todoistTogle.addEventListener("click", function(){
    togleball.classList.toggle('togleLeft');
    todoistTogle.classList.toggle('red');
    
});


let continueBtnBox = document.querySelector('.continueBtnBox');
let continueBtn = document.querySelector('.continueBtn');
continueBtnBox.addEventListener("click" , function(){
    document.body.scrollTop = 550;
    document.documentElement.scrollTop = 650;

});

// let circles = document.querySelectorAll('.circle');
// console.log(circles);
// for(let i = 0; i < circles.length; i++){
//     circles[i].addEventListener("click", function(){
//         circles[i].classList.add('checkedUp');
//         circles[i].classList.toggle('red');
//         // circles[i].style.backgroundColor = "red"
//     });

// };
// let circlesI = document.querySelectorAll('.circle i');
// for(let i = 0; i < circlesI.length; i++){
//     circlesI[i].addEventListener("click", function(){
//         circlesI[i].style.opacity = "1"
//         // circlesI[i].style.color = "#e73600"
//         circlesI[i].style.color = "#fff"
//     })
// };

let listItem = document.querySelectorAll('.stepTwoContent li');

console.log(listItem);

for(let i = 0 ; i < listItem.length ; i++){

    listItem[i].addEventListener("click" , function(){

        let circles = document.querySelectorAll('.circle');
        for(let i = 0; i < circles.length ; i++){
            // circles[i].style.backgroundColor = "red"
            circles[i].classList.add("red")
        }
        console.log(circles[i]);
    });

}