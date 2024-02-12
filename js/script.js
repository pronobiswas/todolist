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



// =========^^^^^^^^^counter function aand set interval ==================
// =========counter function aand set interval starat here ==================
let counterResult = document.querySelectorAll(".countResult");
let myArray = Array.from(counterResult);

// myArray.map((item)=>{

//     console.log(item.dataset.count);
//     let count = 0;
//     function counterUp(){
//         count++
//         item.innerHTML = count + "+";
//         if(item.dataset.count == count){
//             clearInterval(stop)
//         }
//     };
//     let stop = setInterval(
//         function(){
//             counterUp()
//         }, 300/item.dataset.speed
//     )
// });

// ===========IntersectionObserver===========
let mysection = document.getElementById("theCounter");
console.log(mysection);

// ======observer function======
let myobserver = new IntersectionObserver((item)=>{
    // console.log("hello world");
    if (item.isIntersecting) {
        console.log("hi this is work");
        
    }else{
        myArray.map((item)=>{

            console.log(item.dataset.count);
            let count = 0;
            function counterUp(){
                count++
                item.innerHTML = count + "+";
                if(item.dataset.count == count){
                    clearInterval(stop)
                }
            };
            let stop = setInterval(
                function(){
                    counterUp()
                }, 300/item.dataset.speed
            )
        });
    }
});

myobserver.observe(mysection);

// =========^^^^^^^^^counter function aand set interval ==================
// =========counter function aand set interval end here ==================
