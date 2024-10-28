import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {

  totalMonto: number = 250; // Puedes calcularlo dinámicamente
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;

  ngOnInit(): void {
    this.renderPayPalButton();
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
