// // const title = document.getElementById("title");
// // title.innerHTML = "Hello, this is getElementById.";
// // title.style.color = "red";

const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8fa6";

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick)
}
init();

// function handelOffline(){
//     console.log('Bye~!~!')
// }

// function handelOnline(){
//     console.log('Welcome back!')
// }

// window.addEventListener("offline", handelOffline);
// window.addEventListener("online", handelOnline);


// if("juno" === "junho"){
//     console.log("hi");
// } else if("juno" === "juno") {
//     console.log("fuck")
// } else {
//     console.log("ho");
// };
// && : and
// // || : or
// if (20 > 5 || "juno" === "junho") {
//     console.log("yes");
// } else {
//     console.log("no");
// }

// const age = prompt("How old are you?")

// if (age >= 18 && age <= 21) {
//     console.log("you can drink but you should not");
// } else if (age > 21) {
//     console.log("go ahead")
// } else {
//     console.log("too young")
// }