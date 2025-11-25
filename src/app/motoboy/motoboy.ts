import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-motoboy',
  templateUrl: './delivery-motoboy.component.html',
  styleUrls: ['./delivery-motoboy.component.scss'],
})
export class DeliveryMotoboyComponent {

  aceitarCorrida() {
    alert("Corrida aceita! Vá até o restaurante para retirar o pedido.");
  }

}


