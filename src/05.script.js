function getPilihanComputer() {
    var tanya = true;
    while (tanya) {
        const comp = Math.random();

        if (comp < 0.34) return 'gajah';
        if (comp >= 0.34 && comp < 0.67) return 'orang';
        return 'semut';
    }
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG!';
}


function putar() {
    const imgComputer = document.querySelector(".img-komputer")
    const gambar = ["gajah", "semut", "orang"];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute("src", `img-suwit-jawa/img/${gambar[i++]}.png`)
        if (i === gambar.length) i = 0;
    }, 100)
}

const pilihan = document.querySelectorAll("li img");
// console.log(pilihan)
pilihan.forEach(function (pil) {
    // console.log(pil)
    pil.addEventListener("click", function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer)
        // console.log("comp:", pilihanComputer)
        // console.log("player:", pilihanPlayer)
        // console.log("hasil:", hasil)
        putar()

        setTimeout(function () {
            const imgComputer = document.querySelector(".img-komputer");
            imgComputer.setAttribute("src", `img-suwit-jawa/img/${pilihanComputer}.png`)

            const info = document.querySelector(".info");
            info.innerHTML = hasil;
        }, 1000)
    })
})

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//     // alert("ok")
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
//     // console.log("comp:", pilihanComputer)
//     // console.log("player:", pilihanPlayer)
//     // console.log("hasil:", hasil)

//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src", `img-suwit-jawa/img/${pilihanComputer}.png`)

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//     // alert("ok")
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
//     // console.log("comp:", pilihanComputer)
//     // console.log("player:", pilihanPlayer)
//     // console.log("hasil:", hasil)

//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src", `img-suwit-jawa/img/${pilihanComputer}.png`)

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//     // alert("ok")
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
//     // console.log("comp:", pilihanComputer)
//     // console.log("player:", pilihanPlayer)
//     // console.log("hasil:", hasil)

//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src", `img-suwit-jawa/img/${pilihanComputer}.png`)

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });