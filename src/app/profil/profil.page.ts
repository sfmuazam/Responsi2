import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {


  id_user: any;
  username: any;
  password: any;
  user: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private authService: AuthenticationService,) {
    this.id_user = this.authService.getData('id_user');
    console.log(this.id_user);
    this.ambilUser(this.id_user);
  }

  ngOnInit() {
  }

  ambilUser(id: any) {
    this._apiService.lihat(id, '/lihatUser.php?id_user=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let user = hasil;
        this.username = user.username;
        this.password = user.password;
      },
      error: (error: any) => {
        this._apiService.notif('gagal ambil data');
      }
    })
  }

}
