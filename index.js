// // const title = document.getElementById("title");
// // title.innerHTML = "Hello, this is getElementById.";
// // title.style.color = "red";

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// function handleClick(){
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     if (hasClass) {
//         title.classList.remove(CLICKED_CLASS);
//     } else {
//         title.classList.add(CLICKED_CLASS);
//     }
// }

function handleClick(){
   title.classList.toggle(CLICKED_CLASS);
}

function init(){
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