import {PostDetailsComponent} from '../components/post-details/post-details.component';
import {PostListComponent} from 'app/pages/post-list/post-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'app/pages/home/home.component';
import { ContactComponent } from 'app/pages/contact/contact.component';
import { AddPostComponent } from "app/pages/add-post/add-post.component";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'posts', component: PostListComponent },
    { path: 'posts/:id', component: PostDetailsComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'add-post', component: AddPostComponent },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
