import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from 'app/models/post';
import { environment } from 'environments/environment';
import  'rxjs/rx';
import { Observable } from "rxjs/rx";

@Injectable()
export class PostService {
    private posts = new Subject<Post[]>();
    posts$ = this.posts.asObservable();
    private readlist = [];
    private readlistSubject = new Subject<Post[]>();
    readlist$ = this.readlistSubject.asObservable();

    constructor(private http: Http) { }

    createPost(post: Post): void {
        let body = post.toJSON();
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post(environment.apiUrl + 'posts', body, options).subscribe();
    }

    getAllPosts(): void {
        this.http.get(environment.apiUrl + 'posts').subscribe(result => {
            var receivedPosts = [];
            result.json().map(postJson => {
                receivedPosts.push(Post.fromJS(postJson));
            });
            this.posts.next(receivedPosts);
        });
    }

    getPost(id: number): Observable<Post> {
        return this.http.get(environment.apiUrl + 'posts/' + id).map(r => { return Post.fromJS(r.json()); });
    }

    addToReadlist(post: Post): void {
        if (this.readlist.filter(t => t.id === post.id).length === 0) {
            this.readlist.push(post);
        }
        this.readlistSubject.next(this.readlist);
    }

    removeFromReadingList(post: Post): void {
        this.readlist = this.readlist.filter(p => p.id !== post.id);
        this.readlistSubject.next(this.readlist);
    }
}
