import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private http: HttpClient) {

  }

  inputFilaChange(event){

  if (event.target.files && event.target.files[0]){
          const foto = event.target.files[0];
          const formData = new FormData();
          formData.append('foto', foto);

          this.http.post('http://localhost:8082/fotos', formData)
          .subscribe(reposta=> console.log('Upload ok.'));
    
  }

  }

}
