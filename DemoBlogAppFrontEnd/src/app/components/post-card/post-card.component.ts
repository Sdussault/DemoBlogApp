import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'app/models/post';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
    @Input() post: Post;
    @Input() selected: boolean;
    @Output() selectPost: EventEmitter<Post> = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

    onClick() {
        if (!this.selected) {
            this.selectPost.emit(this.post);
        } else {
            this.selectPost.emit(null);
        }

    }
}
