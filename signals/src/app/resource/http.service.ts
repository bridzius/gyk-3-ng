import { Injectable, resource } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  #url = 'https://randomuser.me/api';

  async fetchUsers() {
    const response = await fetch(this.#url);
    const json = await response.json();
    return json.results;
  }
}
