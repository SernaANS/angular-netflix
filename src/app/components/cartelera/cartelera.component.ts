
import { Component,  OnInit, Output,  ViewChild,EventEmitter, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit{

  ngOnInit(): void {
  }

  //LISTA DE PELICULAS
  peliculas: any[] = [
    { nombre: '13 Reason Why',link:'https://www.youtube.com/watch?v=8L9tdrYBOHY',genero:'terror',descripcion:'larga y conmuchos sustos',imagen:'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true'},
    { nombre: 'Daredevil' ,link:'https://www.youtube.com/watch?v=cDUKA6Tqiw8',genero:'terror',descripcion:'larga y conmuchos sustos, suave',imagen:'https://staticr1.blastingcdn.com/media/photogallery/2016/3/11/660x290/b_502x220/marvel-y-netflix-presentan-un-nuevo-banner_637403.jpg'},
    { nombre: 'Greys Anatomy' ,link:'https://www.youtube.com/watch?v=MfOfTMsOs24',genero:'Medicina',descripcion:'larga y conmuchos sustos',imagen:'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true'},
   
  ];

//el card que se ste mirando en ese momento
  indicado;
  //entonces la posicion abre la info del card
  visualizar(pos){
    if(pos===0){
      this.indicado=0;
    }else if(pos===1){
      this.indicado=1;
    }else if(pos===2){
      this.indicado=2;
    }else if(pos===3){
      this.indicado=3;
    }else if(pos===4){
      this.indicado=4;
    }
  }
  

//variables
  mensaje: any;
  pelicula:any;
//nose
  @Output()
  propagar = new EventEmitter<any>();
  //metodo que captura una variable del html y recorre la lista de peliculas para devolver un objeto
  onPropagar() {
    this.propagar.emit(this.mensaje);
    for (let i = 0; i < this.peliculas.length; i++) {
      if(this.mensaje===this.peliculas[i].nombre){
        this.pelicula=this.peliculas[i];
    }
  }

  }


 
  //me mira el ng-template con #nombreDe      //modal con variable
  @ViewChild("myModalInfo", {static: false}) myModalInfo: TemplateRef<any>;
  

  //el primero es del el modal, y el segundo es de la captura de la variable para poder buscar
  constructor(private modalService: NgbModal,private _sanitizer: DomSanitizer){}


  /**Llega la pelicula y cargamos unas variables
   * Abrimos la ventana modal
   */
  peliculaNombre:any;
  peliculaVideo:any;

  mostrarModalInfo(pelicula:any){
    this.peliculaNombre=pelicula.nombre;
    this.peliculaVideo=pelicula.link;
    this.modalService.open(this.myModalInfo);

  }

  /**Con esto se logra cargar un video por url 
   * La url: debe de estar cargada en una variable o llegar como parametro
   */
  getVideoIframe() {
    var video, results;
 
    if (this.peliculaVideo === null) {
        return '';
    }
    results = this.peliculaVideo.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? this.peliculaVideo : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
  }

}



