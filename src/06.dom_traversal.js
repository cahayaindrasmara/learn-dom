// const closeElement = document.querySelector(".close");
// const card = document.querySelector(".card")
// closeElement.addEventListener("click", function () {
//     card.style.display = "none"
// })

//dom traversal
// const closeElement = document.querySelectorAll(".close")
// console.log(closeElement)
// const card = document.querySelectorAll(".card")

// for (let i = 0; i < closeElement.length; i++) {
//     closeElement[i].addEventListener("click", function (e) {
//         // alert(`tombol ke ${i}`)
//         // closeElement[i].parentElement.style.display = "none";
//         // console.log(e.target)
//         e.target.parentElement.style.display = "none";
//     })
// }

// closeElement.forEach(function (el) {
//     el.addEventListener("click", function (e) {
//         e.target.parentElement.style.display = "none"
//         e.preventDefault(); //mencegah aksi default di jalankan
//         e.stopPropagation(); //digunakan untuk menangani event bubbling
//     })
// })

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (el) {
//     el.addEventListener("click", function (e) {
//         alert("ok")
//     })
// })

// const nama = document.querySelector(".nama");

// console.log(nama.parentElement)
// console.log(nama.nextSibling)
// console.log(nama.nextElementSibling.nextElementSibling)
// console.log(nama.previousElementSibling)

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
    if (e.target.className === "close") {
        // alert("ok")
        e.target.parentElement.style.display = "none"
        e.preventDefault();
    }
})

