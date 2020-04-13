import { Component, OnInit } from "@angular/core";

import { ApiService } from "../api.service";
import { Post } from "../../models/post.model";

@Component({
  selector: "app-posts-component",
  templateUrl: "./posts-component.component.html",
  styleUrls: ["./posts-component.component.css"],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private http: ApiService) {}

  ngOnInit() {
    this.http.getPosts("http://localhost:3001/api/posts").subscribe((data) => {
      this.posts = data;
    });
  }
}
