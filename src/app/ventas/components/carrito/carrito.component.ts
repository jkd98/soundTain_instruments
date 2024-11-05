import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
///
public cart:any;
public carTotal:any;

totalMonto: number = 250; // Puedes calcularlo dinámicamente
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;

///
constructor(private cartSvs:CartService){
  // asi se instancia la señal, se agregan parentesis al final para obtener el valor
  this.cart = this.cartSvs.carReadonly; 
  this.carTotal = this.cartSvs.cartTotalReadonly;
}

///
ngOnInit(): void {
this.cartSvs.initialCart();
this.renderPayPalButton();
}


// Funcion para quitar elementos del array
removeFromCart(id:any){
  console.log(`Enviando item ${id}`);
  this.cartSvs.removeFromCart(id);
}

// Funcion para incrementar en 1 la catidad de un item
increaseQuantity(id:any){
  this.cartSvs.increaseQuatity(id);
}

// Funcion para decrementar en 1 la catidad de un item
decreaseQuantity(id:any){
  this.cartSvs.decreaseQuantity(id);
}

// Funcion para limpiar el carrito
clearCart(){
  this.cartSvs.clearCart();
}
  


  renderPayPalButton() {
    (window as any).paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: this.totalMonto.toFixed(2) // Asigna el total dinámicamente
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          alert('Pago realizado con éxito por ' + details.payer.name.given_name);
          // Aquí puedes manejar el pedido en tu backend si es necesario
        });
      },
      onError: (err: any) => {
        console.error("Error en el pago:", err);
        alert("Hubo un error al procesar el pago. Intenta de nuevo.");
      }
    }).render(this.paypalElement.nativeElement);
  }
}
