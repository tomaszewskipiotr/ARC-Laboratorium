import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hat} from '../classes/hat';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IHat} from '../ihat';

@Injectable({
  providedIn: 'root'
})
export class HatService {

  constructor(private http: HttpClient) {
  }
  sendHat( hat: Hat): Observable<Hat> {
      return this.http.post<Hat>(`/add-hat`, hat);
  }
  getAllHats(): Observable<Hat[]> {
    return this.http.get('/getAllHats').pipe(
      map((n: IHat) => {
        return [new Hat(n.company, n.material, n.price, n.type, n.size)];
      })
    );
  }
}



