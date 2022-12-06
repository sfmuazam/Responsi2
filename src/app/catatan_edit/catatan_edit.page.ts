
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-catatan_edit',
  templateUrl: './catatan_edit.page.html',
  styleUrls: ['./catatan_edit.page.scss'],
})
export class CatatanEditPage implements OnInit {
  id_catatan: any;
  id_user: any;
  tanggal: any;
  catatan_teks: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private authService: AuthenticationService,) {
    this.id_user = this.authService.getData('id_user');
    console.log(this.id_user);
    this.route.params.subscribe((param: any) => {
      this.id_catatan = param.id;
      console.log(this.id_catatan);
      this.ambilCatatan(this.id_catatan);
    })
  }

  ngOnInit() {
  }

  ambilCatatan(id: any) {
    this._apiService.lihat(id, '/lihatCatatan.php?id_catatan=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let catatan = hasil;
        this.id_user = catatan.id_user;
        this.tanggal = new Date();
        this.catatan_teks = catatan.catatan_teks;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      }
    })
  }

  editCatatan() {
    let data = {
      id_catatan: this.id_catatan,
      id_user: this.id_user,
      tanggal: this.tanggal,
      catatan_teks: this.catatan_teks,
    }
    this._apiService.edit(data, '/editCatatan.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id_catatan = '';
          this.id_user = '';
          this.tanggal = '';
          this.catatan_teks = '';
          this._apiService.notif('berhasil edit Catatan');
          this.router.navigateByUrl('/catatan');
        },
        error: (err: any) => {
          this._apiService.notif('gagal edit Catatan');
        }
      })
  }



}
