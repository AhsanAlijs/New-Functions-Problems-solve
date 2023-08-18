
const yourname = document.querySelector("#yourname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const login = document.querySelector("#login");

function loginUser() {
    console.log(yourname.value);
    console.log(email.value);
    console.log(password.value);
}

// Q no 2
function calculate() {
    const num1 = +document.querySelector("#num1").value;
    const num2 = +document.querySelector("#num2").value;
    const operator = document.querySelector("#operator").value;
    const result = document.querySelector("#result")
    result.style.border = "1px solid black"
    result.style.width = "30%"
    result.style.fontSize = "20px"
    // console.log(num1,num2,operator)
    switch (operator) {
        case "+":
            result.innerHTML = num1 + num2;
            break
        case "-":
            result.innerHTML = num1 - num2;
            break
        case "*":
            result.innerHTML = num1 * num2;
            break
        case "/":
            result.innerHTML = num1 / num2;
            break
        default:
            // console.log("Please Enter A Correct operator")
            result.innerHTML = "Please Enter A Correct operator"
    }
}

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
// QNo 3(02)
const monthdropdon = document.querySelector("#monthdropdown");
function genrater() {
    const slectMonths = monthdropdon.value
    const heading = document.querySelector("#head")
    switch (slectMonths) {
        case ("Jan"):
            // console.log("Season is Winter")
            heading.innerHTML = "Season is Winter"
            break;
        case ("Feb"):
            // console.log("Season is Fall")
            heading.innerHTML = "Season is Fall"

            break;
        case ("Mar"):
            heading.innerHTML = "Season is Winter"
            // console.log("Season is Winter")
            break;
        case ("Aprl"):
            heading.innerHTML = "Season is Spring"
            // console.log("Season is Spring")
            break;
        case ("May"):
            heading.innerHTML = "Season is Winter"
            // console.log("Season is Winter")
            break;
        case ("Jun"):
            heading.innerHTML = "Season is Fall"
            // console.log("Season is Fall")
            break;
        case ("July"):
            heading.innerHTML = "Season is Spring"
            // console.log("Season is Spring")
            break;
        case ("Aug"):
            heading.innerHTML = "Season is Fall"
            // console.log("Season is Fall")
            break;
        case ("Sep"):
            heading.innerHTML = "Season is Winter"
            // console.log("Season is Winter")
            break;
        case ("Oct"):
            heading.innerHTML = "Season is Spring"
            // console.log("Season is Spring")
            break;
        case ("Nove"):
            heading.innerHTML = "Season is Fall"
            // console.log("Season is Fall")
            break;
        case ("Dec"):
            heading.innerHTML = "Season is Winter"
            // console.log("Season is Winter")
            break;
        default:
            heading.innerHTML = "Pleas Chose one"
            // console.log("Pleas Chose one")
    }
}


function changer() {
    const para = document.querySelector("#paragraph")
    if (para.style.backgroundColor === "black") {
        para.style.backgroundColor = "White";
        para.style.color = "black"
    }
    else {
        para.style.backgroundColor = "black"
        para.style.color = "white"
    }
}
