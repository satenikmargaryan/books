import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./posts-component/posts-component.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  { path: "contact", component: ContactComponent },
  { path: "posts", component: PostsComponent },
  { path: "create", component: CreatePostComponent },
  { path: ":id/update", component: EditPostComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
