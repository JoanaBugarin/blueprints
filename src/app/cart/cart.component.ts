import { Component } from '@angular/core';
import { AlbumCartService } from '../album-cart.service';
import { Observable } from 'rxjs';
import { Album } from '../album-list/Album';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  shopList$: Observable<Album[]>;
  constructor(private cart: AlbumCartService) {
    this.shopList$ = cart.shopList.asObservable();
  };
}
