exports.mileage = (waktuAwal, waktuAkhir, kecepatanAwal) => {    
    let jarak = 0;
    let kecepatan = 0;
    let arrWaktuAwal = [];
    let tempWaktuAwal = "";
    let arrWaktuAkhir = [];
    let tempWaktuAkhir = "";

    // mengubah waktu awal dan akhir ke dalam array
    let formatWaktu = "jj:mm:dd";
    let i,j = 0;
    for ( i = 0; i <= formatWaktu.length; i++){
        if ( waktuAwal[i] == ":" || i == waktuAwal.length){
            arrWaktuAwal[j] = parseInt(tempWaktuAwal);
            tempWaktuAwal = "";
        } else {
            tempWaktuAwal = tempWaktuAwal + waktuAwal[i];
        }
        if ( waktuAkhir[i] == ":" || i == waktuAkhir.length){
            arrWaktuAkhir[j] = parseInt(tempWaktuAkhir);
            tempWaktuAkhir = "";
            j++;
        } else {
            tempWaktuAkhir = tempWaktuAkhir + waktuAkhir[i];
        }
    }
    
    let jam = arrWaktuAwal[0];
    let menit = arrWaktuAwal[1];
    let detik = arrWaktuAwal[2];

    let jamEnd = arrWaktuAkhir[0];
    let menitEnd = arrWaktuAkhir[1];
    let detikEnd = arrWaktuAkhir[2];

    let secondAwal = (jam * 3600) + (menit * 60) + (detik);
    let secondEnd = (jamEnd * 3600) + (menitEnd * 60) + (detikEnd);
    
    // 5 menit pertama kecepatan di tambah 2m/s
    // 5 menit = 5 * 60 = 300 detik
    secondAwal = secondAwal + (5 * 60);
    kecepatan = kecepatanAwal + 2;
    
    // setiap 10 menit, kecepatan + 1 sampai waktuAkhir
    // 10 menit = 10 * 60 = 600 detik
    let second = secondEnd - secondAwal;
    let menitJump = 10 * 60;

    for ( let x = 0; x < second; x++ ){
        if ( x > 0 && x % menitJump == 0 ){
            kecepatan = kecepatan + 1;
        }
    }
    
   return jarak = kecepatan * second;
}

exports.konversiToKm = (jarak) => {
    return Math.floor(jarak / 1000);
}
