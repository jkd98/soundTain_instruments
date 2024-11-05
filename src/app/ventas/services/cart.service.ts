import { Injectable, computed, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  ///
  private  carSignal = signal<any>([]); // definiendo una signal privada para el carrito de compras
  public carReadonly = this.carSignal.asReadonly();  // definiendo una signal de solo lectura para imprimir la carSignal
  
  private cartTotalSignal = signal<number>(0);
  public cartTotalReadonly = this.cartTotalSignal.asReadonly();

  private maxIems = 5;
  private minItems = 1;
  ///
  constructor() {
    // Cuando alguna señal cambie, se hace las sentencias indicadas
      // Aqui solo se le da la instruccion de almacenar en localStrorage
      // No se permite la escritura a signals
    effect(()=>this.saveLocalStorage());
   }
  ///

  // Funcion para añadir elementos a la signal
  addItems(item:any){
    const itemExists = this.carReadonly().findIndex((guitar:any)=>guitar._id===item._id); // devuelve el index si encontro el elemento 
    if(itemExists === -1){ // si no encuentra el elemento en el array
      item.quantity = 1; // agrego una unidad a la cantidad
      this.carSignal.update((value)=>[...value,item]); // actualizo el array pasando una copia de sus elementos mas el nuevo item
      console.log(this.carReadonly());
    }else{ // si ya existe el elemento dentro del array
      
      // Validacion para que la cantidad no rebase el limite
      if(this.carSignal()[itemExists].quantity >= this.maxIems) return;

      const updatedCart = [...this.carReadonly()]; // crea una copia para no mutar el original
      // busco el elemento en el array con el index recuperado por findIndex(()=>{})
      updatedCart[itemExists].quantity++; // una vez localizado, se aumenta en una unidad, a la catidad ya existente 
      //item.quantity++;
      this.carSignal.set(updatedCart); // se actuzliza la signal con los cambios
      console.log('Existe :'+itemExists);
      console.log(this.carReadonly());

    }
    // Guardar en localStorage
    this.saveLocalStorage();
    // Calcular el total
    this.cartTotal();
  }

  //Funcion para calcular el total a pagar
  cartTotal(){
    const total = this.carReadonly().reduce((total:any,item:any)=> total + (item.quantity*item.precio),0);
    this.cartTotalSignal.set(total);
  }

  //Funcion para remover elementos del carrito
  removeFromCart(id:any){
    const updatedCart = this.carReadonly().filter((item:any) => item.id !== id ) //recupero los elementos a conservar
    console.log(updatedCart);
    this.carSignal.set(updatedCart);
    this.cartTotal();
  }

  //Funcion para incrementar cantidad de un elemnto del carrito
  increaseQuatity(id:any){
    const updatedCart = this.carReadonly().map((item:any)=>{
      // si el elemento a modificar existe y que la catidad no rebase el limite
      if(item.id===id && item.quantity < this.maxIems){
        // crea una copia del item y la cantidad aumenta en 1
        return{
          ...item,
          quantity:item.quantity+1
        }
      }
      // si el valor no se encuentra, se pasan los items como estan
      return item;
    });
    this.carSignal.set(updatedCart);
    this.cartTotal(); // recalcular
    //console.log('Incrementando...elemnto'+id);
  }

  //Funcion para decrementar la cantidad de un elemento del carrito de compras
  decreaseQuantity(id:any){
    const updatedCart = this.carReadonly().map((item:any)=>{
      if(item.id === id && item.quantity > this.minItems ){
        return{
          ...item,
          quantity:item.quantity-1
        }
      }
      return item;
    });
    this.carSignal.set(updatedCart);
    this.cartTotal();
  }

  // Funcion para limpiar el carrito de compras
  clearCart(){
    this.carSignal.set([]);
    this.cartTotal();
  }

  // Funcion que guarda el estdo del carrito de compras en localStorage
  saveLocalStorage(){
    window.localStorage.setItem('cart',JSON.stringify(this.carReadonly()));
  }  
  
  // Funcion para eliminar elementos del localstorage
  deleteLocalStorage(){
    const itemsSaved = window.localStorage.getItem('cart');
    if(itemsSaved !== null){
      window.localStorage.removeItem('cart');
    }
  }

  initialCart(){
    const itemsSaved = window.localStorage.getItem('cart');
    if(itemsSaved!==null){
      this.carSignal.set(JSON.parse(itemsSaved));
      this.cartTotal();
    }
  }
}
