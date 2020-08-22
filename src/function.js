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
    
    // 5 menit pertama kecepatan di tambah 2m/s
    menit = menit + 5;
    kecepatan = kecepatanAwal + 2;
    
    // setiap 10 menit, kecepatan + 1 sampai waktuAkhir
    let jamEnd = arrWaktuAkhir[0];
    let detikBerjalan = 0;
    let menitJump = 10 * 60;
    
    for (detikBerjalan = 0; jam < jamEnd; detikBerjalan++){
        detik += 1;
        if (detik == 60){
            detik = 0;
            menit += 1;
        }
        if (detikBerjalan > 0 && detikBerjalan % menitJump == 0){
            kecepatan = kecepatan + 1;
        }
        if (menit == 60){
            menit = 0;
            jam += 1;
        }
    }
    
   return jarak = kecepatan * detikBerjalan;
}

exports.konversiToKm = (jarak) => {
    return Math.floor(jarak / 1000);
}
