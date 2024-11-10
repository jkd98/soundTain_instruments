import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RespuestaProducto } from '../../../shared/interfaces/respuestaProducto';
import { Producto } from '../../../shared/interfaces/producto';
import { Carrito } from '../../intefaces/carrito';
import { Order } from '../../intefaces/orden';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  ///
  public cart: Carrito['productos'] = [];
  public carTotal: Carrito['total'];

  totalMonto: number = 250; // Puedes calcularlo dinámicamente
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;

  ///
  constructor(private cartSvs: CartService) {
    // asi se instancia la señal, se agregan parentesis al final para obtener el valor
    //this.cart = this.cartSvs.carReadonly; 
    this.carTotal = 0;
  }

  ///
  ngOnInit(): void {
    this.cartSvs.fetchCart()
      .subscribe(
        resp => {
          this.cart = resp.data.productos;
          this.carTotal = resp.data.total
          console.log(resp);
        }
      );
      
      this.renderPayPalButton();
  }


  // Funcion para quitar elementos del array
  removeFromCart(id: any) {
    console.log(`Enviando item ${id}`);
    //this.cartSvs.removeFromCart(id);
    this.cartSvs.removeFromCartB(id)
      .subscribe(
        resp => {
          console.log(resp);
        }
      );
  }

  // Funcion para incrementar en 1 la catidad de un item
  increaseQuantity(id: any) {
    //this.cartSvs.increaseQuatity(id);
    this.cartSvs.increaseQuantityB(id)
      .subscribe(
        resp => {
          console.log(resp);
        }
      );
  }

  // Funcion para decrementar en 1 la catidad de un item
  decreaseQuantity(id: Producto['_id']) {
    //this.cartSvs.decreaseQuantity(id);
    this.cartSvs.decreaseQuantityB(id!)
      .subscribe(
        resp => {
          console.log(resp);
        }
      );
  }

  // Funcion para limpiar el carrito
  clearCart() {
    this.cartSvs.borrarTodo().subscribe(resp => console.log(resp));
  }



  renderPayPalButton() {
    (window as any).paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: this.carTotal.toFixed(2) // Asigna el total dinámicamente
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          alert('Pago realizado con éxito por ' + details.payer.name.given_name);
          // Aquí puedes manejar el pedido en tu backend si es necesario
          this.detalleVenta();

        });
      },
      onError: (err: any) => {
        console.error("Error en el pago:", err);
        alert("Hubo un error al procesar el pago. Intenta de nuevo.");
      }
    }).render(this.paypalElement.nativeElement);
  }

  detalleVenta() {

    let orden: Order = {
      productos: this.cart.map(prod => {
        return {
          productoId: prod.producto._id,
          cantidad: prod.cantidad,
          precio: prod.precio,
          nombre: prod.producto.nombre,
          descripcion: prod.producto.descripcion,
          imagen: prod.producto.imagen
        }
      }),
      total: this.carTotal,
      estado: 'procesando'
    };

    this.cartSvs.realizarCompra(orden)
      .subscribe(resp => {
        console.log(resp);
      });
    
    this.cartSvs.borrarTodo()
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
