import {ReadingListComponent} from 'app/components/reading-list/reading-list.component';
import {PostDetailsComponent} from 'app/components/post-details/post-details.component';
import {PostCardComponent} from 'app/components/post-card/post-card.component';
import {PostService} from 'app/services/post.service';
import {HttpModule} from '@angular/http';
import { PostListComponent } from './post-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms/';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [PostListComponent, PostCardComponent, PostDetailsComponent, ReadingListComponent],
    exports: [PostListComponent, PostCardComponent, PostDetailsComponent, ReadingListComponent],
    providers: [PostService]
})
export class PostListModule { }
