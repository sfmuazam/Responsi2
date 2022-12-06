import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-pass-edit',
  templateUrl: './pass-edit.page.html',
  styleUrls: ['./pass-edit.page.scss'],
})
export class PassEditPage implements OnInit {

  id_user: any;
  pass: any;
  password_lama: any;
  password_baru: any;
  konfirmasi_password_baru: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private authService: AuthenticationService,) {
    this.route.params.subscribe((param: any) => {
      this.id_user = param.id;
      console.log(this.id_user);
      this.ambilPasswordLama(this.id_user);
    })
  }

  ngOnInit() {
  }
  ambilPasswordLama(id: any) {
    this._apiService.lihat(id, '/lihatUser.php?id_user=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let user = hasil;
        this.pass = user.password;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      }
    })
  }
  editPassword() {
    let data = {
      id_user: this.id_user,
      password_lama: this.password_lama,
      password_baru: this.password_baru,
      konfirmasi_password_baru: this.konfirmasi_password_baru,
    }
    this._apiService.edit(data, '/editPassword.php')
      .subscribe({
        next: (hasil: any) => {
          if (hasil.status == 'Password lama salah')
            this._apiService.notif('Password lama salah');
          else if (hasil.status == 'Konfirmasi password baru berbeda')
            this._apiService.notif('Konfirmasi password baru tidak sama');
          else if (hasil.status == 'Berhasil') {
            console.log(hasil);
            this.id_user = '';
            this.password_lama = '';
            this.password_baru = '';
            this.konfirmasi_password_baru = '';
            this._apiService.notif('berhasil ubah password');
            this.router.navigateByUrl('/profil');
          }
        },
        error: (err: any) => {
          console.log(err);
          console.log(data);
          this._apiService.notif('gagal edit password');
        }
      })
  }
}
