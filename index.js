// // const title = document.getElementById("title");
// // title.innerHTML = "Hello, this is getElementById.";
// // title.style.color = "red";

// const title = document.querySelector("#title");
// title.innerHTML = "Hi, this is querySelector";
// title.style.color = "orange";
// document.title = "I own you know";

// function handleClick(){
//     // console.log("I have been resized")
//     // console.log()
//     title.style.color = "blue";
// }

// title.addEventListener("click", handleClick)

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

const age = prompt("How old are you?")

if (age >= 18 && age <= 21) {
    console.log("you can drink but you should not");
} else if (age > 21) {
    console.log("go ahead")
} else {
    console.log("too young")
}