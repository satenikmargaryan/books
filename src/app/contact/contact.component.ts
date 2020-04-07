import { Component, OnInit } from "@angular/core";

import { ApiService } from "../api.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor(private http: ApiService) {}

  ngOnInit() {}

  submitForm() {
    const options = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.http
      .sendEmail("http://localhost:3001/api/sendmail", options)
      .subscribe(data => {
        console.log("Data", data);
      });
  }
}
