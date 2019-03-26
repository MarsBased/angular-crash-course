import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html'
})
export class PostListComponent {
  postList: Post[];

  constructor(private postsService: PostsService) {
    // startLoading
    this.postsService
      .getPosts()
      .subscribe(posts => this.successfulPosts(posts));
  }

  private successfulPosts(posts: Post[]): void {
    // stopLoading
    this.postList = posts;
  }
}
