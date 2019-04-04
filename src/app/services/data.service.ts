import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppError } from './../errors/app-error';
import { NotFoundError } from './../errors/not-found-error';
import { BadRequestError } from './../errors/bad-request-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: Response) {
    // If bad request
    if (error.status === 400) {
      return throwError(new BadRequestError());
    }
    // If not found
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    // Else
    return throwError(new AppError());
  }
}
