// Manipulasi ARRAY
// Isi ARRAY
// var arr = [];
// arr[0] = "ilham";
// arr[1] = 2001;
// arr[2] = true;
// console.log(arr);

// Hapus ARRAY
// var arr = ["1", 2, 3];
// arr[1] = undefined;
// console.log(arr);

// Menampilkan Isi ARRAY
// var arr = ["1", 2, 3];
// for (i = 0; i < 3; i++) {
//   console.log(arr[i]);
// }

// Method pada ARRAY
// var arr = ["1", 2, 3];
// 1. join
// console.log(arr.join("+"));

// 2. push & pop (akhir array)
// arr.push("4", 5);
// arr.pop();

// 3. unshift & shift (awal array)
// arr.unshift("0");
// arr.shift();

// 4. splice
// splice(index awal, mau hapus berapa element setelahnya, element baru)
// arr.splice(1, 1, "4", 5);

// 5. slice
// slice(index awal, index akhir)
// var arr2 = arr.slice(0, 2);

// console.log(arr2.join("-"));

// 6. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// angka.forEach(function (a, b) {
//   console.log(a, b);
// });

// 7. map
// var angka = [2, 7, 4, 4, 5, 7, 8];
// var angka2 = angka.map(function (a) {
//   return a * 2;
// });
// console.log(angka2.join("-"));

// 8. sort
// var angka = [2, 7, 12, 4, 5, 20, 8];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join("-"));

// 9. filter
// var angka = [2, 7, 12, 4, 5, 20, 8];
// var angka2 = angka.filter(function (a) {
//   return a == 5;
// });
// console.log(angka2.join("-"));

// 10. find
// var angka = [2, 7, 12, 5, 4, 5, 20, 8];
// var angka2 = angka.find(function (a) {
//   return a == 5;
// });
// console.log(angka2);
