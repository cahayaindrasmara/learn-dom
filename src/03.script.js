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


const p2 = document.querySelector(".p2");
p2.classList.add("label")
p2.classList.remove("label")
p2.classList.toggle("label") //jika kelas label belum ada maka akan dibuatkan class baru, jika sudah ada akan menghapus kelas label
p2.classList.toggle("label")

p2.classList.add("satu")
p2.classList.add("dua")
p2.classList.add("tiga")

p2.classList.item(2) //mencari urutan dari kelas sesuai dengan inputan
p2.classList.contains("dua") // mengecek apakah kelas tersebut ada berisi sesuai dengan innput
p2.classList.replace("tiga", "empat") //mengganti kelas dengan nama kelas baru

