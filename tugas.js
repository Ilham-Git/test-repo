// var random = (min = 1, max = 10) => {
//   return Math.ceil(Math.random() * max);
// };

// var num = random(1, 10);
// alert("SELAMAT DATANG\nTebak angka dari 1-10\nKamu punya 3 kesempatan");
// for (let i = 2; i >= 0; i--) {
//   var tebak = parseInt(prompt("Masukkan angka tebakan"));

//   if (tebak == num) {
//     alert("Anda benar!!!\nAngka yang dicari adalah " + num);
//     break;
//   } else if (i == 0) {
//     alert("Anda gagal\nKesempatan anda sudah habis");
//     break;
//   } else if (tebak > 10 || tebak < 1) {
//     alert("Anda harus memasukkan angka dari 1-10\nKamu punya " + i + " kesempatan");
//   } else if (tebak > num) {
//     alert("Terlalu TINGGI!!!\nKamu punya " + i + " kesempatan");
//   } else if (tebak < num) {
//     alert("Terlalu RENDAH!!!\nKamu punya " + i + " kesempatan");
//   } else {
//     alert("Anda harus memasukkan angka dari 1-10\nKamu punya " + i + " kesempatan");
//   }
// }
// alert("TERIMA KASIH");
