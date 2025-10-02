import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { addContactUrl, baseUrl } from '../../app.urls';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private httpClient: HttpClient = inject(HttpClient);

  addContact(data: any) {
    return this.httpClient.post(baseUrl + addContactUrl, data);
  }
}
