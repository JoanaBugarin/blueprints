import { Component } from '@angular/core';
import { Album } from './Album';
import { AlbumCartService } from '../album-cart.service';
import { AlbumDataService } from '../album-data.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.scss',
})
export class AlbumListComponent {
  constructor(
    private cart: AlbumCartService,
    private albumsDataService: AlbumDataService
  ) {}
  addToCart(album: Album): void {
    this.cart.addToCart(album);
    album.stock -= album.cantidad;
    album.cantidad = 0;
  }
  maxReached($event: number) {
    console.log('Se alcanzó el límite');
  }

  albums: Album[] = [];

  ngOnInit(): void {
    this.albumsDataService
      .getAll()
      .subscribe((albums) => (this.albums = albums));
  }
}
