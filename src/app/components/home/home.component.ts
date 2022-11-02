import { Component, Inject, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  ngOnInit(): void {
  }

  pos=1;
  cambio="https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/49045.jpg";
    cambiar( numero):any{
        if(numero===1){
          this.pos=1;
          this.cambio="https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/49045.jpg";
        }else if(numero===2){
          this.pos=2;
          this.cambio="http://cinemamegahd.260mb.net/images/Thor-Ragnarok-Banner.jpg";
        }else if(numero===3){
          this.pos=3;
          this.cambio="https://blogdesuperheroes.es/imagen-noti/bds_first-class_poster-091.jpg";
        }
    }
  
    mayor(){
      if(this.pos===3){
          this.pos=1;
          this.cambiar(this.pos);
      }else{
        this.pos=+1;
        this.cambiar(this.pos);
      }
    }
  
    menor(){
      if(this.pos===1){
        this.pos=3;
        this.cambiar(this.pos);
      }else{
        this.pos=-1;
        this.cambiar(this.pos);
      }
    }
}
