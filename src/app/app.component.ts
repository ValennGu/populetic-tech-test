import { Component, OnInit } from '@angular/core';
import { DummyService } from './services/dummy.service';
import { UsersList } from './models/user.model';
import { PostList, Post } from './models/post.model';
import { CommentsList } from './models/comment.model';
import { TagList } from './models/tag.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'populetic-tech-test';
  public usersList: UsersList;

  constructor( public dummyService: DummyService ) {}

  ngOnInit() {
    
    this.dummyService.getUsersList()
        .subscribe((usersList: UsersList) => {
            this.usersList = usersList;
        })
    
    this.dummyService.getPostsList()
        .subscribe((posts: PostList) => {
            console.log('Post List: ', posts);
        })
    
    this.dummyService.getSinglePostById('05NLrrJwaGiM5JIrUnsS')
        .subscribe((post: Post) => {
            console.log('Single Post: ', post);
        })
    
    this.dummyService.getUserPosts('uABrZcuHGJnanoxlt53c')
        .subscribe((posts: PostList) => {
            console.log('User Posts: ', posts);
        })

    this.dummyService.getPostsByTag('human')
        .subscribe((posts: PostList) => {
            console.log('Posts by Tag: ', posts);
        })
    
    this.dummyService.getPostComments('uABrZcuHGJnanoxlt53c')
        .subscribe((comments: CommentsList) => {
            console.log('Comments: ', comments);
        })

    this.dummyService.getTagsList()
        .subscribe((tags: TagList) => {
            console.log('Tags: ', tags);
            console.log('test tag: ', tags.data[0]);
        })
  }

  public getData(userId: string) {
    this.dummyService.getUserById(userId)
        .subscribe((user: any) => {
            console.log(user);
        })
  }
}