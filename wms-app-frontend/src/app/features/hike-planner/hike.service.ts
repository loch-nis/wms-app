import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Hike } from './models/hike.model';

@Injectable({
  providedIn: 'root',
})
export class HikeService {
  private http = inject(HttpClient);

  getMyHikes() {
    return this.http.get<Hike[]>(`${environment.apiUrl}/hikes`);
  }
}
