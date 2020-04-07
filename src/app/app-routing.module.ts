import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./posts-component/posts-component.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  { path: "contact", component: ContactComponent },
  { path: "posts", component: PostsComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
