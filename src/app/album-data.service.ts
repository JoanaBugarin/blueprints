import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Album } from './album-list/Album';

const URL = 'https://6674908675872d0e0a96e242.mockapi.io/api/v1/albums';

@Injectable({
  providedIn: 'root',
})
export class AlbumDataService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Album[]> {
    return this.http
      .get<Album[]>(URL)
      .pipe(
        tap((albums: Album[]) =>
          albums.forEach((album) => (album.cantidad = 0))
        )
      );
  }
}
