import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ApiService } from "../api.service";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"],
})
export class EditPostComponent implements OnInit {
  editForm: FormGroup;
  private postId: String;
  titleIsInvalid: Boolean;
  contentIsInvalid: Boolean;

  constructor(
    private route: ActivatedRoute,
    private http: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postId = params["id"];
    });
    console.log("sdsdg");
    this.http
      .getSinglePost(`http://localhost:3001/api/posts/${this.postId}`)
      .subscribe((post) => {
        this.editForm = this.formBuilder.group({
          id: [],
          title: [post["title"], Validators.required],
          content: [post["content"], Validators.required],
        });
      });
  }

  onSubmit() {
    this.titleIsInvalid = this.title.invalid;
    this.contentIsInvalid = this.content.invalid;

    this.http
      .updatePost(
        `http://localhost:3001/api/posts/${this.postId}/update`,
        this.editForm.value
      )
      .subscribe((data) => {
        console.log("dataasdsd", data);
      });
  }

  get title() {
    return this.editForm.get("title");
  }

  get content() {
    return this.editForm.get("content");
  }
}
