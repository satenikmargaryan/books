import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-posts-component",
  templateUrl: "./posts-component.component.html",
  styleUrls: ["./posts-component.component.css"],
})
export class PostsComponent implements OnInit {
  constructor(private http: ApiService) {}

  ngOnInit() {
    this.http
      .getPosts("http://localhost:3001/api/posts/5e8b47985a3152340439731d")
      .subscribe((data) => {
        console.log("data", data);
      });
  }
}
