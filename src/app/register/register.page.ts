import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: any;
  password: any;
  konfirmasi_password: any;
  constructor(
    private authService: AuthenticationService,
    public _apiService: ApiService,
    private router: Router,
    public menuCtrl: MenuController
  ) { }
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
  prosesRegister(): void {
    let data = {
      username: this.username,
      password: this.password,
      konfirmasi_password: this.konfirmasi_password,
    }
    this._apiService.tambah(data, '/prosesRegister.php')
      .subscribe({
        next: (hasil: any) => {
          if (hasil.status == 'Username sama')
            this._apiService.notif('Username sudah ada! Mohon ganti username yang lain');
          else if (hasil.status == 'Konfirmasi password berbeda')
            this._apiService.notif('Konfirmasi password tidak sama');
          else if (hasil.status == 'Berhasil') {
            console.log(hasil);
            this.username = '';
            this.password = '';
            this.konfirmasi_password = '';
            this._apiService.notif('Berhasil register! Silahkan login');
            this.router.navigateByUrl('/login');
          }
        },
        error: (err: any) => {
          this._apiService.notif('gagal register');
        }
      })
  }
}
