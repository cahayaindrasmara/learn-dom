// DOM selection
// document.getElementById()
// const titleElement = document.getElementById("judul");
// titleElement.style.color = "red"
// titleElement.style.backgroundColor = "yellow"
// titleElement.innerHTML = "Cahaya Indrasmara"

// // document getElementsByTagName()
// // -> htmlCollection
// const pElement = document.getElementsByTagName("p");
// pElement[0].style.backgroundColor = "blue"
// for (let i = 0; i < pElement.length; i++) {
//     pElement[i].style.backgroundColor = "blue"
//     pElement[i].style.color = "yellow"
// }

// const h1Element = document.getElementsByTagName("h1")[0];
// console.log(h1Element)
// h1Element.style.fontSize = "50px"

// // document.getElementsByClassName()
// // -> htmlCollection
// const p1 = document.getElementsByClassName("p1");
// console.log(p1)
// p1[0].innerHTML = "Ini diubah dari java script"

//document.querySelector()
// -> element
// const p4 = document.querySelector("#b p");
// console.log(p4)
// p4.style.color = "green"
// p4.style.fontSize = "30px"

// const li2 = document.querySelector("section#b ul li:nth-child(2)")
// console.log(li2)
// li2.style.backgroundColor = "orange"

// // document.querySelectorAll()
// // -> nodeList

// const p = document.querySelectorAll("p");
// console.log(p)
// for (let i = 0; i < p.length; i++) {
//     p[i].style.color = "red"
//     p[i].style.backgroundColor = "yellow"
// }

//cara mengubah node root
const section = document.getElementById("b");
const p4 = section.querySelector("p");
p4.style.backgroundColor = "blue"
p4.style.color = "white"