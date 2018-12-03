<?php
$myFile = "cart.txt";

$fh = fopen($myFile, 'a') or die("can't open file");
$stringData = $_POST["name"] . "-";
fwrite($fh, $stringData);
$stringData = $_POST["size"] . "-";
fwrite($fh, $stringData);
$stringData = $_POST["price"];
fwrite($fh, $stringData);
$stringData = "\r\n";
fwrite($fh, $stringData);
fclose($fh);
?>  