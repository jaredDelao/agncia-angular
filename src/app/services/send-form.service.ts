import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendFormService {

  dev: string = 'http://localhost:3000/mail';
  prod: string = 'https://mailer-js.herokuapp.com/mail';

  constructor(private http: HttpClient) { }

  enviarForm(value) {
    return this.http.post(this.dev, value);
  }
}
