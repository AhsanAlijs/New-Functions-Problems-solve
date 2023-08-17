
// const yourname = document.querySelector("#yourname");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const login = document.querySelector("#login");

// function loginUser(){
//     console.log(yourname.value);
//     console.log(email.value);
//     console.log(password.value);
// }

// Q no 2
function calculate (){
    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;
    const operator = document.querySelector("#operator").value;
    // console.log(num1,num2,operator)
    switch(operator){
        case "+":
            console.log(num1 + num2)
            break
        case "-":
            console.log(num1 - num2)
            break
        case "*":
            console.log(num1 * num2)
            break
        case "/":
            console.log(num1 / num2)
            break
        default:
            console.log("Please Enter A Correct operator")
    }
}