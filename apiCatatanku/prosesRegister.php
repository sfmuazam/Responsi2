<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$username = trim($data['username']);
$password = trim($data['password']);
$konfirmasi_password = trim($data['konfirmasi_password']);

$query1 = mysqli_query($koneksi,"select * from user where username ='$username'");
$jumlah = mysqli_num_rows($query1);
if ($jumlah >= 1) {
	$pesan['status'] = 'Username sama';
}else if($password!=$konfirmasi_password){
  $pesan['status'] = 'Konfirmasi password berbeda';
}else{
  $pesan['status'] = 'Berhasil';
  $query = mysqli_query($koneksi,"insert into user(username,password) values('$username','$password')");
}

echo json_encode($pesan);
echo mysqli_error($koneksi);
