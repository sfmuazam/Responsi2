<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$id_user=trim($data['id_user']);
$tanggal=trim($data['tanggal']);
$catatan_teks=trim($data['catatan_teks']);

if($id_user!='' and $tanggal!='' and $catatan_teks!=''){
$query = mysqli_query($koneksi,"insert into catatan(id_user,tanggal,catatan_teks) values('$id_user','$tanggal','$catatan_teks')");

}

echo json_encode($pesan);
echo mysqli_error($koneksi);
