import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'app/models/post';
import { PostService } from 'app/services/post.service';

@Component({
    selector: 'app-reading-list',
    templateUrl: './reading-list.component.html',
    styleUrls: ['./reading-list.component.css']
})
export class ReadingListComponent implements OnInit {
    posts: Post[];
    constructor(private postService: PostService) {
        this.postService.readlist$.subscribe(
            data => { this.posts = data; }
        );
    }

    ngOnInit() {
    }
}
