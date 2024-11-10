import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from '../../../auth/intefaces/comentario';
import { Producto } from '../../interfaces/producto';
import { ComentarioService } from '../../../clientes/services/comentario.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrl: './comentario.component.css'
})
export class ComentarioComponent implements OnInit{
  
  @Input('producto') prod:Producto['_id'] = '';
  public allComents:Comentario[] = [];
  public coments:Comentario[]=[];
  public iniciales:number = 2;
  public siguientes:number = 2;
  public actuales:number = 0;

  constructor(
    private comentarioService: ComentarioService,
  ){}

  ngOnInit(): void {
    this.comentariosProducto(this.prod);  
  }

  comentariosProducto(prod:Producto['_id']):void{
    this.comentarioService.comentariosPRoducts(prod)
      .subscribe(resp => {
        this.allComents = resp.data;
        this.comentsIniciales();
        console.log(this.coments);
        console.log(this.coments[0].usuario?.nombre);
        
      });
  }

  comentsIniciales(){
    let i = 0;
    for(i;i<=this.iniciales;i++){
      this.coments.push(this.allComents[i]);
    }
    this.actuales = i;
  }

  masComents(){
    console.log(this.actuales);
    console.log(this.actuales+this.siguientes);
    console.log(this.coments);
    let i = this.actuales;
    for(i;i<=(this.actuales+this.siguientes);i++){
      this.coments.push(this.allComents[i]);
    }
    console.log(this.coments);
  
    this.actuales = i;
  }



}
