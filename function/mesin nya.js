var namapro = document.getElementById("txt_namaproduk").value
if (namapro == "") {
    document.getElementById("button1").style.display = "inline"
    document.getElementById("button2").style.display = "none"
    document.getElementById("button").style.display = "none"
}

    var kodeproduk = ['MB-001']
    var namaproduk = ['Indomie']
    var hargaproduk = ['2000']
    var satuan = ['Bungkus']
    var kategori = ['Makanan Berat']
    var pembayaran = ['3000']
    var gambarproduk = ['file:///D:/xampp/htdocs/Tugas-Sekolah-TB/function/gambar%20nya/indomie.png']
    var stokawal = ['6']

    var tampil = document.getElementById('tampildata')

    function showData() {
      tampil.innerHTML = ""

      for (i = 0; i <kodeproduk.length; i++) {
        var nodata = i + 1
        const matauang='RP.'
        const nomor=i+1
        kode="MD-0" + Number(i+1)

        var txt_stokawal = Number(stokawal[i])
        if (txt_stokawal < 5){
          var bg = "bg-danger"
        }else{
          var bg = ""
        }

        var txt_stokawal = Number(stokawal[i])
        if (txt_stokawal > 5){
          var Total = Number(hargaproduk[i]) * Number(0.50) //kembalian
                var kembalian = Number(pembayaran[i]) - Number(Total) //total/diskon
        }else{
          var Total = Number(hargaproduk[i]) //kembalian
                var kembalian = Number(pembayaran[i]) - Number(Total) //total
        }
        


        tampil.innerHTML += "<tr>" +
          "<th>" + nodata + "</th>" +
          "<td>" + kodeproduk[i] + "</td>" +
          "<td>" + namaproduk[i] + "</td>" +
          "<td>" + matauang + hargaproduk[i] + "</td>" +
          "<td>" + satuan[i] + "</td>" +
          "<td>" + kategori[i] + "</td>" +
          "<td>" + matauang + pembayaran[i] + "</td>" +
          "<td>" + matauang + kembalian + "</td>" + //isi kembalian
          "<td>" + matauang + Total + "</td>" + //isi total
          "<td>" + "<img src ='" + gambarproduk[i] +"' style='width: 50px; height: 50px;'alt=gambar>" + "</td>"+
          "<td class="+bg+">" + stokawal[i] + "</td>" +
          "<td>" +
          "<button class='btn btn-warning mt-2 mr-1'onclick='editdata(" + i +
          ")'>Edit</button>" +
          "<button class='btn btn-danger mt-2 mr-1'' href='#' onclick='hapusdata(" + i + ")'>Hapus</button>" +
          "<button class='btn btn-primary mt-2 mr-1' data-toggle='modal' data-target='#modal' onclick='detaildata(" + i +
                  ")'>Detail</button>" +
          "</td>" +
          "</tr>"

      }
    }      
    showData()
    function batal() {
    document.getElementById('txt_kodeproduk').value = ""
    document.getElementById('txt_namaproduk').value = ""
    document.getElementById('txt_hargaproduk').value = ""
    document.getElementById('txt_satuan').value = ""
    document.getElementById('txt_kategori').value = ""
    document.getElementById('txt_pembayaran').value = ""
    document.getElementById('url_gambar').value = ""
    document.getElementById('txt_stokawal').value = ""

     document.getElementById("button1").style.display = "inline"
     document.getElementById("button2").style.display = "none"
     document.getElementById("button").style.display = "none"
    }
    function add() {
      var produkbaru = document.getElementById('txt_kodeproduk').value
      var namabaru = document.getElementById('txt_namaproduk').value
      var hargabaru = document.getElementById('txt_hargaproduk').value
      var satuanbaru = document.getElementById('txt_satuan').value
      var kategoribaru = document.getElementById('txt_kategori').value
      var pembayaranbaru = document.getElementById('txt_pembayaran').value
      var gambarbaru = document.getElementById('url_gambar').value
      var stokbaru = document.getElementById('txt_stokawal').value

      if (namabaru == '') {
        alert('anda belum memasukan data')
      }else{
        kodeproduk.push(produkbaru)
        namaproduk.push(namabaru)
        hargaproduk.push(hargabaru)
        satuan.push(satuanbaru)
        kategori.push(kategoribaru)
        pembayaran.push(pembayaranbaru)
        gambarproduk.push(gambarbaru)
        stokawal.push(stokbaru)
        showData()
        document.getElementById('txt_kodeproduk').value = ""
        document.getElementById('txt_namaproduk').value = ""
        document.getElementById('txt_hargaproduk').value = ""
        document.getElementById('txt_satuan').value = ""
        document.getElementById('txt_kategori').value = ""
        document.getElementById('txt_pembayaran').value = ""
        document.getElementById('url_gambar').value = ""
        document.getElementById('txt_stokawal').value = ""

      }
    }

    function hapusdata(i) {
      kodeproduk.splice(i, 1);
      namaproduk.splice(i, 1);
      hargaproduk.splice(i, 1);
      satuan.splice(i, 1);
      kategori.splice(i, 1);
      pembayaran.splice(i, 1);
      gambarproduk.splice(i,1)
      stokawal.splice(i, 1);
      showData()
    }

var index = []

function editdata(i) {
document.getElementById('txt_kodeproduk').value = kodeproduk[i]
document.getElementById('txt_namaproduk').value = namaproduk[i]
document.getElementById('txt_hargaproduk').value = hargaproduk[i]
document.getElementById('txt_satuan').value = satuan[i]
document.getElementById('txt_kategori').value = kategori[i]
document.getElementById('txt_pembayaran').value = pembayaran[i]
document.getElementById('url_gambar').value = gambarproduk[i]
document.getElementById('txt_stokawal').value = stokawal[i]

document.getElementById("button1").style.display = "none"
document.getElementById("button2").style.display = "inline"
document.getElementById("button").style.display = "inline"
index.push(i)
}

function  editsimpan() {
var simpanproduk = document.getElementById('txt_kodeproduk').value
var simpannama = document.getElementById('txt_namaproduk').value
var simpanharga = document.getElementById('txt_hargaproduk').value
var simpansatuan = document.getElementById('txt_satuan').value
var simpankategori = document.getElementById('txt_kategori').value
var simpanpembayaran = document.getElementById('txt_pembayaran').value
var simpanurl_gambar = document.getElementById('url_gambar').value
var simpanstok = document.getElementById('txt_stokawal').value

document.getElementById("button1").style.display = "inline"
document.getElementById("button2").style.display = "none"
document.getElementById("button").style.display = "none"


if (simpannama == '') {
alert('anda belum memasukan data')
}else{
kodeproduk[index] = simpanproduk
namaproduk[index] = simpannama
hargaproduk[index] = simpanharga
satuan[index] = simpansatuan
kategori[index] = simpankategori
pembayaran[index] = simpanpembayaran
gambarproduk[index] = simpanurl_gambar
stokawal[index] = simpanstok

showData()
index.pop()

document.getElementById('txt_kodeproduk').value = ""
document.getElementById('txt_namaproduk').value = ""
document.getElementById('txt_hargaproduk').value = ""
document.getElementById('txt_satuan').value = ""
document.getElementById('txt_kategori').value = ""
document.getElementById('txt_pembayaran').value = ""
document.getElementById('url_gambar').value = ""
document.getElementById('txt_stokawal').value = ""

}

}function kodepro(value) {
var idkode = []
var kodekatagori = value.split(" ").filter(function (e) {
return e.trim().length > 0;
});
for (i = 0; i < kodekatagori.length; i++) {
if (kodekatagori.length == 1) {
    var code = kodekatagori[i].slice(0, 2)
} else {
    var code = kodekatagori[i].slice(0, 1)
}
idkode.push(code)
}
var kodepr = idkode.join("")
kodepr = kodepr.toUpperCase()
if (idkode.length == 0) {
document.getElementById("txt_kodeproduk").value = ''
} else {
var count = 1;
for (i = 0; i < kategori.length; ++i) {
    if (kategori[i].toLowerCase() == value.toLowerCase()) {
        count++;
    }
}
if (count < 10) {
    document.getElementById("txt_kodeproduk").value = kodepr + '-00' + count
} else if (count < 100) {
    document.getElementById("txt_kodeproduk").value = kodepr + '-0' + count
} else {
    document.getElementById("txt_kodeproduk").value = kodepr + '-' + count
}
}
}

var index = []

function detaildata(i) {
  document.getElementById('modalproduk').value = kodeproduk[i]
  document.getElementById('modalnama').value = namaproduk[i]
  document.getElementById('modalharga').value = hargaproduk[i]
  document.getElementById('modalsatuan').value = satuan[i]
  document.getElementById('modalkategori').value = kategori[i]
  document.getElementById('modalstok').value = stokawal[i]

  index.push(i)
}

function datasimpandetail() {
  var simpanproduk =  document.getElementById('modalproduk').value
  var simpannama = document.getElementById('modalnama').value
  var simpanharga = document.getElementById('modalharga').value
  var simpansatuan = document.getElementById('modalsatuan').value
  var simpankategori = document.getElementById('modalkategori').value
  var simpanstok = document.getElementById('modalstok').value

  kodeproduk[index] = simpanproduk
  namaproduk[index] = simpannama
  hargaproduk[index] = simpanharga
  satuan[index] = simpansatuan
  kategori[index] = simpankategori
  stokawal[index] = simpanstok

  showData()
  index.pop()
}