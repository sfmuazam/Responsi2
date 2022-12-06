<?php
require 'koneksi.php';
$data = [];
!$id_user = $_GET['id_user'];

$urutan_list = 1;
$query = mysqli_query($koneksi,"select * from catatan where id_user='$id_user'");
while ($row = mysqli_fetch_object($query)) {
    $row->urutan_list = $urutan_list++;
	$data[] = $row;

}

echo json_encode($data);
echo mysqli_error($koneksi);
