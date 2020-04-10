import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ApiService } from "../api.service";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.css"],
})
export class CreatePostComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  addForm: FormGroup;
  titleIsInvalid: Boolean;
  contentIsInvalid: Boolean;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      title: ["", Validators.required],
      content: ["", Validators.required],
    });
  }

  onSubmit() {
    this.titleIsInvalid = this.title.invalid;
    this.contentIsInvalid = this.content.invalid;

    if (this.titleIsInvalid || this.contentIsInvalid) {
      return false;
    }

    this.apiService
      .createPost("http://localhost:3001/api/posts/create", this.addForm.value)
      .subscribe((data) => {
        console.log("dataasdsd", data);
      });
  }

  get title() {
    return this.addForm.get("title");
  }

  get content() {
    return this.addForm.get("content");
  }
}
