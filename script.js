 

//  let number =1;
//  let interval = setInterval(() => {
//         document.querySelector("#h1").textContent = number;
//         number++;

//         if(number>15){
//             clearInterval(interval);
//         }
//  }, 45);



let number=1;

let interval = setInterval(() => {
        document.querySelector("#h1").textContent = number;
        number++;

        

        if(number>15){
            clearInterval(interval);
        }
}, 63);


let number2 = 1;

let interval2 = setInterval(() => {
        document.querySelector("#h1-2").textContent =number2;
        number2++;

        if(number2>250){
            clearInterval(interval2);
        }
},3);

let number3 = 1;
let interval3 = setInterval(() => {
        document.querySelector("#h1-3").textContent = number3;
        number3++;


        if(number3>27){
            clearInterval(interval3);
        }
}, 38);