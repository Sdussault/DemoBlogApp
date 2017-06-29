import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'app/models/post';
import { PostService } from 'app/services/post.service';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
    @Input() post: Post;
    comment: string;

    constructor(private postService: PostService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        var id = this.route.snapshot.params['id'];
        if (id) {
            this.postService.getPost(id).subscribe(data => { this.post = data; });
        }
    }

    addPostToReadlist(): void {
        this.postService.addToReadlist(this.post);
    }

    removePostFromReadingList(): void {
        this.postService.removeFromReadingList(this.post);
    }
}
