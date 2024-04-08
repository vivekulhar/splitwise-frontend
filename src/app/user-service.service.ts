import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  

  constructor(
    private _http : HttpClient
  ) { }

  registerUser(payload: any) {
    return this._http.post(`http://localhost:8083/api/user/create`, payload);
  }
}
