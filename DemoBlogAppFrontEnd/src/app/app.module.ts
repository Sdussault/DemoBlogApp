import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PostListModule } from 'app/pages/post-list/post-list.module';
import { AppRoutingModule } from 'app/routing/router.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeModule } from 'app/pages/home/home.module';
import { ContactModule } from 'app/pages/contact/contact.module';
import { AddPostComponent } from 'app/pages/add-post/add-post.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AddPostComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpModule,
        NgbModule.forRoot(),
        PostListModule,
        HomeModule,
        ContactModule
    ],
    bootstrap: [AppComponent],
    providers: [FormBuilder]
})
export class AppModule { }
