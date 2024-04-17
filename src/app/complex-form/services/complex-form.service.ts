import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, catchError, delay, map, of } from 'rxjs'
import { environnement } from '../../../enviornnements/environnement'
import { ComplexFormValue } from '../models/complex-form-value.model'

@Injectable()
export class ComplexFormService {
  constructor(private http: HttpClient) {}

  saveUserInfo(formValue: ComplexFormValue): Observable<boolean> {
    return this.http
      .post<ComplexFormValue>(`${environnement.apiUrl}/users`, formValue)
      .pipe(
        map(() => true),
        delay(1000),
        catchError(() => of(false).pipe(delay(1000)))
      )
  }
}
