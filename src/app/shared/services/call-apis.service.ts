import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CallApisService {

  constructor(private http: HttpClient) {
  }

  getAllRepos(query: any): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}search/repositories?${query}`).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      }));
  }
}
