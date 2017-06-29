import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';
import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
    addForm: FormGroup;
    body: FormControl;
    author: FormControl;
    title: FormControl;

    constructor(private formBuilder: FormBuilder, private router: Router, private postService: PostService) { }

    ngOnInit() {
        this.title = new FormControl('', [Validators.required]);
        this.author = new FormControl('', [Validators.required]);
        this.body = new FormControl('', [Validators.minLength(10), Validators.maxLength(50), Validators.required]);

        this.addForm = this.formBuilder.group({
            'title': this.title,
            'author': this.author,
            'body': this.body
        });
    }

    onSubmit(): void {
        var post = new Post();
        post.author = this.author.value;
        post.title = this.title.value;
        post.body = this.body.value;
        post.creationDate = new Date().toISOString().substring(0, 10);
        post.views = 0;
        this.postService.createPost(post);
        this.addForm.reset();
    }
}
