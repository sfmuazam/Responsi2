
<?php
require 'koneksi.php';
$data = [];
$id_catatan = $_GET['id_catatan'];
$query = mysqli_query($koneksi,"select * from catatan where id_catatan ='$id_catatan'");
$jumlah = mysqli_num_rows($query);
if ($jumlah == 1) {
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
