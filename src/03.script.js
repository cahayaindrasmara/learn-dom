// const h1Element = document.getElementById("judul");
// h1Element.innerHTML = "Cahaya Indrasmara"

// const sectioanA = document.querySelector("section#a")
// sectioanA.innerHTML = "Hello World"

// const judul = document.querySelector("#judul");
// judul.style.color = "lightBlue"
// judul.style.backgroundColor = "salmon"

// const judul = document.getElementsByTagName("h1")[0];
// // judul.setAttribute("name", "cahaya");
// const a = document.querySelector("section#a a");
// a.setAttribute("id", "link");

// a.getAttribute("href") akan memunculkan value dari attribute yang dipanggil

//a.removeAttribute("href")


// const p2 = document.querySelector(".p2");
// p2.classList.add("label")
// p2.classList.remove("label")
// p2.classList.toggle("label") //jika kelas label belum ada maka akan dibuatkan class baru, jika sudah ada akan menghapus kelas label
// p2.classList.toggle("label")

// p2.classList.add("satu")
// p2.classList.add("dua")
// p2.classList.add("tiga")

// p2.classList.item(2) //mencari urutan dari kelas sesuai dengan inputan
// p2.classList.contains("dua") // mengecek apakah kelas tersebut ada berisi sesuai dengan innput
// p2.classList.replace("tiga", "empat") //mengganti kelas dengan nama kelas baru

// dom manipulation 2
// make new element

const pBaru = document.createElement("p");
const textPBaru = document.createTextNode("paragraf baru");
// simpan tulisan ke dalam paragraf
pBaru.appendChild(textPBaru);

// simpan pBaru di akhir section A
const sectioanA = document.querySelector("section#a")
sectioanA.appendChild(pBaru)

const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("item baru")
liBaru.appendChild(textLiBaru)

const list = document.querySelector("section#b ul");
const list2 = list.querySelector("li:nth-child(2)")

list.insertBefore(liBaru, list2)

// hapus node
const link = document.getElementsByTagName("a")[0]
sectioanA.removeChild(link);

// ganti dengan node baru

const sectionB = document.querySelector("section#b");
const p4 = sectionB.querySelector("p")

const h2 = document.createElement("h2");
const textH2 = document.createTextNode("judul baru")
h2.appendChild(textH2)

sectionB.replaceChild(h2, p4)

pBaru.style.backgroundColor = "lightgreen"
liBaru.style.backgroundColor = "lightgreen"
h2.style.backgroundColor = "lightgreen"

