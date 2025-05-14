// const p3 = document.querySelector(".p3");
// function ubahWarnaP3() { //menggunakan inline di html
//     p3.style.backgroundColor = "lightblue"
// }

// function ubahWarnaP2() { //menggunakan inline di html
//     p2.style.backgroundColor = "lightblue"
// }

// const p2 = document.querySelector(".p2");
// p2.onclick = ubahWarnaP2 // menggunakan method

// //addEventListener
// const p4 = document.querySelector("section#b p")
// p4.addEventListener("click", function () {
//     p4.style.backgroundColor = "lightgreen"

//     const ul = document.querySelector("section#b ul");
//     const liBaru = document.createElement("li");
//     const liText = document.createTextNode("item baru");
//     liBaru.appendChild(liText)

//     ul.appendChild(liBaru)
// })


//perbedaan event handler dan event listener
const p3 = document.querySelector(".p3");
// p3.onclick = function () {
//     p3.style.backgroundColor = "lightblue"
// }

// p3.onclick = function () {
//     p3.style.color = "red"
// }

p3.addEventListener("click", function () {
    p3.style.backgroundColor = "lightblue"
})

p3.addEventListener("click", function () {
    p3.style.color = "red"
})

