<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$id_catatan=trim($data['id_catatan']);
$id_user=trim($data['id_user']);
$tanggal=trim($data['tanggal']);
$catatan_teks=trim($data['catatan_teks']);

if($id_user!='' and $tanggal!='' and $catatan_teks!=''){
$query = mysqli_query($koneksi,"update catatan set id_user='$id_user',tanggal='$tanggal',catatan_teks='$catatan_teks' where id_catatan='$id_catatan'");
}
echo json_encode($pesan);
echo mysqli_error($koneksi);
