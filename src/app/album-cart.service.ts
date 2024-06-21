import { Injectable } from '@angular/core';
import { Album } from './album-list/Album';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumCartService {

  private _shopList: Album[] = [];
  shopList: BehaviorSubject<Album[]> = new BehaviorSubject(this._shopList);

  addToCart(album: Album) {
    let item: Album | undefined = this._shopList.find((v1) => v1.nombre == album.nombre)
    if (!item) {
      this._shopList.push({... album});
    } else {
      item.cantidad += album.cantidad;
    }
    console.log(this._shopList);
    this.shopList.next(this._shopList); //emite evento
  }

  constructor() { }
}
