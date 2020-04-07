import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers(url) {
    return this.http.get(url);
  }

  sendEmail(url, data) {
    return this.http.post(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(data)
    });
  }

  getPosts(url) {
    return this.http.get(url);
  }
}
