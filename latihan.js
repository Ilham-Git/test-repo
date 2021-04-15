// var noAngkot = 1,
//   jmlAngkot = 10,
//   angkotBeroprasi = 6;
// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot == 5 || noAngkot == 8 || noAngkot == 10) {
//     console.log("Angkot No." + noAngkot + " sedang lembur.");
//   } else if (noAngkot <= angkotBeroprasi) {
//     console.log("Angkot No." + noAngkot + " beroprasi dengan baik.");
//   } else {
//     console.log("Angkot No." + noAngkot + " sedang tidak beroprasi.");
//   }
// }

// var angka = parseInt(prompt("masukkan angka"));
// switch (angka) {
//   case 1:
//     alert("anda memasukkan angka 1");
//     break;
//   case 2:
//     alert("anda memasukkan angka 2");
//     break;
//   default:
//     alert("angka yang anda masukkan salah");
// }

// var item = prompt("Masukkan nama makanan atau minuman : \n(contoh : nasi, daging, susu, burger, softdrink)");
// switch (item) {
//   case "nasi":
//   case "daging":
//   case "susu":
//     alert("anda memilih makanan yang sehat!!!");
//     break;
//   case "burger":
//   case "softdrink":
//     alert("anda memilih makanan yang tidak sehat!!!");
//     break;
//   default:
//     alert("anda memasukkan makanan atau minuman yang salah!!!");
// }

// var s = "\n";
// var nilai;
// function segitiga(x) {
//   for (let i = 0; i < x; i++) {
//     for (let j = x; j > i; j--) {
//       s += " ";
//     }
//     for (let k = 0; k <= i; k++) {
//       s += " *";
//     }
//     s += "\n";
//   }
//   return s;
// }
// console.log(s);

// tanya = true;
// while (tanya) {
//   var hasil = "";
//   var p = prompt("pilih : batu/gunting/kertas");
//   var com = Math.random();
//   if (com < 0.33) {
//     com = "batu";
//   } else if (com > 0.33 && com < 0.66) {
//     com = "gunting";
//   } else {
//     com = "kertas";
//   }

//   if (p == com) {
//     hasil = "seri";
//   } else if (p == "batu") {
//     hasil = com == "gunting" ? "kamu menang!!!" : "kamu kalah!!!";
//   } else if (p == "gunting") {
//     hasil = com == "kertas" ? "kamu menang!!!" : "kamu kalah!!!";
//   } else if (p == "kertas") {
//     hasil = com == "batu" ? "kamu menang!!!" : "kamu kalah!!!";
//   } else {
//     hasil = "pilihan anda salah";
//   }
//   alert("kamu\t= " + p + "\ncom\t= " + com + "\n" + hasil);
//   tanya = confirm("ulang?");
// }
// alert("TERIMA KASIH!!!");

// var jumlah = (sisiA, sisiB) => {
//   var volumeA = sisiA * sisiA * sisiA;
//   var volumeB = sisiB * sisiB * sisiB;
//   var total = volumeA + volumeB;
//   return total;
// };

// var sisiA = parseInt(prompt("Masukkan sisi kotak A"));
// var sisiB = parseInt(prompt("Masukkan sisi kotak B"));

// alert(jumlah(sisiA, sisiB));

// Pengelolaan Penumpang angkot
// var penumpang = [];

// var tambahPenumpang = (namaPenumpang, penumpang) => {
//   // jika angkot kosong
//   if (penumpang.length == 0) {
//     // tambah penumpang diawal array
//     // kembalikan isi array & keluar dari function
//     penumpang.push(namaPenumpang);
//     return penumpang;
//   }
//   // else
//   else {
//     // telusuri seluruh kursi dari awal
//     for (var i = 0; i < penumpang.length; i++) {
//       // jika ada kursi kosong
//       if (penumpang[i] == undefined) {
//         // tambah penumpang di kursi tersebut
//         penumpang[i] = namaPenumpang;
//         // kembalikan isi array & keluar dari function
//         return penumpang;
//       }
//       // jika sudah ada nama yang sama
//       else if (penumpang[i] == namaPenumpang) {
//         // tampilkan pesan kesalahannya
//         console.log(namaPenumpang + " sudah ada dalam angkot");
//         // kembalikan isi array & keluar dari function
//         return penumpang;
//       }
//       // jika seluruh kursi terisi
//       else if (i == penumpang.length - 1) {
//         // tambah penumpang di akhir array
//         penumpang.push(namaPenumpang);
//         // kembalikan isi array & keluar dari function
//         return penumpang;
//       }
//     }
//   }
// };
// var hapusPenumpang = (namaPenumpang, penumpang) => {
//   // jika angkot kosong
//   if (penumpang.length == 0) {
//     // tampilkan pesan bahwa angkot kosong
//     console.log("angkot masih kosong");
//     // kembalikan isi array & keluar dari function
//     return penumpang;
//   }
//   // else
//   else {
//     // telusuri semua kursi dari awal
//     for (var i = 0; i < penumpang.length; i++) {
//       // jika nama penumpang sesuai
//       if (penumpang[i] == namaPenumpang) {
//         // ubah nama penumpang menjadi undefined
//         penumpang[i] = undefined;
//         // kembalikan isi array & keluar dari function
//         return penumpang;
//       }
//       // jika tidak ada nama yang sesuai
//       else if (i == penumpang.length - 1) {
//         // tampilkan pesan kesalahannya
//         console.log(namaPenumpang + " tidak ada dalam angkot");
//         // kembalikan isi array & keluar dari function
//         return penumpang;
//       }
//     }
//   }
// };

// membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      alert("angkot masih kosong");
      return false;
    }
    for (var i = 0; i < penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      } else if (this.penumpang[i] != namaPenumpang) {
        alert(this.penumpang[i] + " tidak ada dalam angkot ini");
      }
    }
  };
}
var angkot1 = new Angkot("ilham", ["mamuju", "kalukku"], [], 0);
var angkot2 = new Angkot("sandika", ["bakengkeng", "tasiu"], [], 0);
