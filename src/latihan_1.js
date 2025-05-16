const body = document.querySelector("body") //document.body
const tUbahWarna = document.getElementById("tUbahWarna");

tUbahWarna.addEventListener("click", function () {
    // body.style.backgroundColor = "lightblue"
    // body.setAttribute("class", "biru-muda")
    body.classList.toggle("biru-muda");
});


const tAcakWarna = document.createElement("button");
const textAcakWarna = document.createTextNode("Acak Warna");

tAcakWarna.appendChild(textAcakWarna);
tAcakWarna.setAttribute("type", "button");
// body.appendChild(tAcakWarna);
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
    const r = Math.round(Math.random() * 255 + 1);
    console.log(r)
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    body.style.backgroundColor = "rgb(" + r + ", " + g + "," + 0 + ")"
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")"
})

sHijau.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")"
})

sBiru.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")"
})

body.addEventListener("mousemove", function (event) {
    //posisi mouse
    // console.log(event.clientX)
    // ukuran browser
    // console.log(window.innerWidth)

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`
})

