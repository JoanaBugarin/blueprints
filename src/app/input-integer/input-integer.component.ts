import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Album } from '../album-list/Album';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  @Input()
  quantity : number;

  @Input()
  max: number;

  @Output()
  quantityChange:  EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached:  EventEmitter<number> = new EventEmitter<number>();

  onCambioCant($event: KeyboardEvent) {
    this.quantityChange.emit(this.quantity);
    if(this.quantity >= this.max || this.quantity <= 0)
      $event.preventDefault();
  }
  aumentar():void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit(this.max);
    }
  }
  disminuir():void {
    if(this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}
