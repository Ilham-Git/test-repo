// membuat object
// object literal
var mhs1 = {
  nama: "ILHAM",
  umur: 20,
  jurusan: "Teknik Informatika",
  lulus: true,
  IPSemester: [2.9, 3.1, 3.25, 2.88, 3.04],
  IPKumulatif: function () {
    var total = 0;
    var ips = this.IPSemester;
    for (var i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    return total / ips.length;
  },
};
var mhs2 = {
  nama: "NoobGaming",
  umur: 20,
  jurusan: "Teknik Gaming",
  lulus: false,
  IPSemester: [2, 3, 3, 2, 3],
  IPKumulatif: function () {
    var total = 0;
    var ips = this.IPSemester;
    for (var i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    return total / ips.length;
  },
};

// function declaration
function buatObjectMahasiswa(nama, umur, jurusan, lulus, IPSemester) {
  var mhs = {};
  mhs.nama = nama;
  mhs.umur = umur;
  mhs.jurusan = jurusan;
  mhs.lulus = lulus;
  mhs.IPSemester = IPSemester;
  return mhs;
}
var mhs3 = buatObjectMahasiswa("ilham", 20, "Kedokteran", true, [1, 2, 3, 4, 5]);

// Constructor
function Mahasiswa(nama, umur, jurusan, lulus, IPSemester) {
  this.nama = nama;
  this.umur = umur;
  this.jurusan = jurusan;
  this.lulus = lulus;
  this.IPSemester = IPSemester;
}
var mhs4 = new Mahasiswa("yusuf", 20, "Teknik Elektro", false, [5, 4, 3, 2, 1]);
