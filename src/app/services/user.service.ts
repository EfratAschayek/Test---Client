import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Child from '../models/Child';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  baseRouteUrl = `${environment.baseUrl}/User`

  user: User = new User(null, null, null, null, null, null, [])
  child:Child =new Child(null, null, null)

  addUser(user: User){
    return this.http.post<User>(`${this.baseRouteUrl}`, user).pipe(catchError(this.handleError));
  }
  
  handleError(error: HttpErrorResponse) {
      return throwError(error);
  }
  
  getUserById(id: string) {
    return this.http.get<User>(`${this.baseRouteUrl}/${id}`)
  }
}
