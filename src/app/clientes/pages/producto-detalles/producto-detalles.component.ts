import { Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { Producto } from '../../../shared/interfaces/producto';
import { ProductoService } from '../../../shared/services/producto.service';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { ComentarioService } from '../../services/comentario.service';
import { Comentario } from '../../../auth/intefaces/comentario';
import { CartService } from '../../../ventas/services/cart.service';


@Component({
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalles.component.html',
  styleUrl: './producto-detalles.component.css'
})
export class ProductoDetallesComponent implements OnInit{
  
  public producto:Producto = {_id:'',nombre:'',descripcion:'',precio:0};
  public calif = 0;
  public productoIMG:Producto['imagen'] = '';
  private id:Producto['_id']='';
  @ViewChild('commentInput') commentInputRef!: ElementRef; // Referencia al textarea
  
  constructor(
    private productoService:ProductoService,
    private activatedRouter: ActivatedRoute,
    private comentarioService:ComentarioService,
    private cartService:CartService,
    private route: Router
  ){}
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.id = '';
    this.activatedRouter.params
      .subscribe(params => {
        this.id = params['ins'];
      }
    );
    //console.log(id);
    this.obtenerProducto(this.id);

  }

  obtenerProducto(id:Producto['_id']) {
    this.productoService.getDetalleProducto(id)
      .subscribe(resp => {
        console.log(resp);
        this.producto = resp.data.producto;
        this.productoIMG = resp.data.imagenURL;
      });
  }

  selectStar(num:number){
    console.log(num);
    this.calif = num;
  }

  onSubmitCmts():void {
    const commentText:Comentario['comentario'] = this.commentInputRef.nativeElement.value;
    console.log(commentText);
    let comentario:Comentario = {producto:this.id,calificacion:this.calif,comentario:commentText};
    this.comentarioService.aggComentario(comentario)
      .subscribe(resp => {
        console.log(resp);
      });
  }

  aggCart():void {
    if(window.localStorage.getItem('rol')) {
      this.cartService.addItems(this.producto);
    } else {
      let url:string = `/clientes/instrumento/${this.id}`;      
      window.localStorage.setItem('redirectUrl',url);
      this.route.navigate(['/auth/login']);

    }
  }

}
