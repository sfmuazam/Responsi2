
<?php
require 'koneksi.php';
$data = [];
$id_user = $_GET['id_user'];
$query = mysqli_query($koneksi,"select * from user where id_user ='$id_user'");
$jumlah = mysqli_num_rows($query);
if ($jumlah == 1) {
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
