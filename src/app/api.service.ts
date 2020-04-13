import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
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
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
  }

  getPosts(url): Observable<any> {
    return this.http.get(url);
  }

  getSinglePost(url) {
    return this.http.get(url);
  }

  createPost(url, body) {
    return this.http.post(url, body);
  }

  updatePost(url, body) {
    return this.http.put(url, body);
  }
}
