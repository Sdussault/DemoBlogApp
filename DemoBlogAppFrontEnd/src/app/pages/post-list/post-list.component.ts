import { Component, OnInit } from '@angular/core';
import { Post } from 'app/models/post';
import { PostService } from 'app/services/post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
    private posts: Post[] = [];
    selectedPost: Post;
    searchTerm = '';

    constructor(private postService: PostService) {
        this.postService.posts$.subscribe(
            data => { this.posts = data; }
        );
        this.postService.getAllPosts();
    }

    selectPost(post: Post): void {
        this.selectedPost = post;
    }

    getPosts(): Post[] {
        return this.posts.filter(p => p.title.toLocaleLowerCase().includes(this.searchTerm.toLowerCase()) || p === this.selectedPost);
    }

    ngOnInit() {
    }
}
