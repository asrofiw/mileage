let hitungJarak = require("./src/function")

let waktuAwal = "10:12:21";
let waktuAkhir = "12:00:00";
let kecepatanAwal = 6;
let jarakTempuh = hitungJarak.mileage(waktuAwal,waktuAkhir,kecepatanAwal);
let konversiToKm = hitungJarak.mileage(jarakTempuh);

console.log(`Jarak yang ditempuh ${jarakTempuh} m`);
console.log(`Konversi ke Km : ${konversiToKm} Km`)