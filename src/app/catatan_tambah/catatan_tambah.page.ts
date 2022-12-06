
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-catatan_tambah',
  templateUrl: './catatan_tambah.page.html',
  styleUrls: ['./catatan_tambah.page.scss'],
})
export class CatatanTambahPage implements OnInit {
  id_catatan: any;

  id_user: any;
  tanggal: any = new Date();
  catatan_teks: any;
  constructor(
    private router: Router,
    public _apiService: ApiService,
    private authService: AuthenticationService,) {
    this.id_user = this.authService.getData('id_user');
    console.log(this.id_user);
  }

  ngOnInit() {
  }

  addCatatan() {
    let data = {
      id_user: this.id_user,
      tanggal: this.tanggal,
      catatan_teks: this.catatan_teks,
    }
    this._apiService.tambah(data, '/tambahCatatan.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id_catatan = '';
          this.id_user = '';
          this.tanggal = '';
          this.catatan_teks = '';
          this._apiService.notif('berhasil input Catatan');
          this.router.navigateByUrl('/catatan');
        },
        error: (err: any) => {
          this._apiService.notif('gagal input Catatan');
        }
      })
  }

}
