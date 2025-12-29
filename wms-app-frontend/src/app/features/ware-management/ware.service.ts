import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Ware } from '../../core/models/ware.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WareService {
  private http = inject(HttpClient);

  getAll(): Observable<Ware[]> {
    return this.http
      .get<Ware[]>(`${environment.apiUrl}/wares`)
      .pipe(tap({ error: (error) => console.error(error) }));
    // todo self-quiz: why not catchError here?
  }

  getByBarcode(barcode: string): Observable<Ware> {
    return this.http.get<Ware>(`${environment.apiUrl}/wares/${barcode}`);
  }

  post(data: Ware): Observable<object> {
    return this.http.post(`${environment.apiUrl}/wares`, data).pipe(
      tap({
        error: (error) => console.error(error),
      }),
    );
  }

  patch(barcode: string, quantityDelta: number): Observable<object> {
    const data = { quantityDelta };
    return this.http.patch(`${environment.apiUrl}/wares/${barcode}`, data).pipe(
      tap({
        error: (error) => console.error(error),
      }),
    );
  }

  delete(barcode: string): Observable<object> {
    return this.http.delete(`${environment.apiUrl}/wares/${barcode}`).pipe(
      tap({
        error: (error) => console.error(error),
      }),
    );
  }
}
