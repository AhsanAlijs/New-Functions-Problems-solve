
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
// function calculate (){
//     const num1 = +document.querySelector("#num1").value;
//     const num2 = +document.querySelector("#num2").value;
//     const operator = document.querySelector("#operator").value;
//     // console.log(num1,num2,operator)
//     switch(operator){
//         case "+":
//             console.log(num1 + num2)
//             break
//         case "-":
//             console.log(num1 - num2)
//             break
//         case "*":
//             console.log(num1 * num2)
//             break
//         case "/":
//             console.log(num1 / num2)
//             break
//         default:
//             console.log("Please Enter A Correct operator")
//     }
// }

// Q No 3
// function genrate() {
//     const month = document.querySelector("#monthdropdown").value
//     if (month === "Dec" || month === "Jan" || month === "Feb") {
//         console.log("Season is Winter");

//     } else if (month === "Mar" || month === "Aprl" || month === "May") {
//         console.log("Season is Spring")
//     }else{
//         console.log("Season is Fall")
//     }

// }
const monthdropdon = document.querySelector("#monthdropdown")
function genrater(){
    const slectMonths = monthdropdon.value
    switch(slectMonths){
        case("Jan"):
        console.log("Season is Winter")
        break;
        case("Feb"):
        console.log("Season is Fall")
        break;
        case("Mar"):
        console.log("Season is Winter")
        break;
        case("Aprl"):
        console.log("Season is Spring")
        break;
        case("May"):
        console.log("Season is Winter")
        break;
        case("Jun"):
        console.log("Season is Fall")
        break;
        case("July"):
        console.log("Season is Spring")
        break;
        case("Aug"):
        console.log("Season is Fall")
        break;
        case("Sep"):
        console.log("Season is Winter")
        break;
        case("Oct"):
        console.log("Season is Spring")
        break;
        case("Nove"):
        console.log("Season is Fall")
        break;
        case("Dec"):
        console.log("Season is Winter")
        break;
        default:
            console.log("Pleas Chose one")
    }
}
