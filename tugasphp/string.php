<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,
initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>String PHP</title>
</head>
<body>
<h1>Berlatih String PHP</h1>
<?php
echo "<h3> Soal No 1</h3>";
/*
SOAL NO 1
Tunjukan dengan menggunakan echo berapa panjang dari
string yang diberikan berikut! Tunjukkan juga jumlah kata di dalam
kalimat tersebut!
Contoh:
$string = "PHP is never old";
Output:
Panjang string: 16,
Jumlah kata: 4
*/

// echo "<label> PHP is never old </label> <br>";
// $string = "PHP is never old";
// echo "<label> Panjang String : </label>"; 
// echo strlen($string);
// echo "<br> <label> Jumlah Kata : </label>"; 
// $hasil = str_word_count($string);
// echo $hasil;


echo "<br> <br> <label> Hello PHP! </label> <br>";
$first_sentence = "Hello PHP!" ; // Panjang string 10, jumlah kata =  2;
echo "<label> Panjang String : </label>"; 
echo strlen($first_sentence);
echo "<br> <label> Jumlah Kata : </label>"; 
$hasill = str_word_count($first_sentence);
echo $hasill;


echo "<br> <br> <label> I'm ready for the challenges </label> <br>";
$second_sentence = "I'm ready for the challenges"; // Panjang string =  28 jumlah_kata= 5
echo "<label> Panjang String : </label>"; 
echo strlen($second_sentence);
echo "<br> <label> Jumlah Kata : </label>"; 
$hasilll = str_word_count($second_sentence);
echo $hasilll;


echo "<h3> Soal No 2</h3>";
/*
SOAL NO 2
Mengambil kata pada string dan karakter-karakter yang ada
di dalamnya.
*/
$string2 = "I love PHP";
echo "<label>String: </label> \"$string2\" <br>";
echo "Kata pertama: " . substr($string2, 0, 1) . "<br>" ;
// Lanjutkan di bawah ini
echo "Kata kedua: " . substr($string2, -8, 4) ;
echo "<br> Kata Ketiga: " . substr($string2, -3, 3) ;
echo "<h3> Soal No 3 </h3>";
/*
SOAL NO 3
Mengubah karakter atau kata yang ada di dalam sebuah
string.
*/
$string3 = "PHP is old but sexy!";
echo "String: \"$string3\" ";
echo "<br> Output : " . str_replace("sexy", "awesome", $string3) . "<br>";
// OUTPUT : "PHP is old but awesome"
?>
</body>
</html>