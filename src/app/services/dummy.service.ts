import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersList, User } from '../models/user.model';
import { PostList, Post } from '../models/post.model';
import { CommentsList } from '../models/comment.model';
import { TagList } from '../models/tag.model';

@Injectable({
    providedIn: 'root'
})
export class DummyService {

    private dummyApiUrl: string = 'https://dummyapi.io/data/api';
    private apiHttpHeader: HttpHeaders = new HttpHeaders().set('app-id', 'zKWtqQRL1vvJSKnagvDZ')

    constructor(
        private http: HttpClient
    ) { }
    
    // https://dummyapi.io/documentation/static-data-api

    /**
     * Get array of users.
     */
    public getUsersList(): Observable<UsersList> {
        return this.http.get<UsersList>(`${this.dummyApiUrl}/user`, { headers: this.apiHttpHeader });
    }

    /**
     * Get full profile of user.
     * @param userId 
     */
    public getUserById(userId: string): Observable<User> {
        return this.http.get<User>(`${this.dummyApiUrl}/user/${userId}`, { headers: this.apiHttpHeader });
    }

    /**
     * Get all posts list.
     */
    public getPostsList(): Observable<PostList> {
        return this.http.get<PostList>(`${this.dummyApiUrl}/post`, { headers: this.apiHttpHeader });
    }

    /**
     * Get data of a single post.
     * @param postId 
     */
    public getSinglePostById(postId: string): Observable<Post> {
        return this.http.get<Post>(`${this.dummyApiUrl}/post/${postId}`, { headers: this.apiHttpHeader });
    }

    /**
     * Get all posts a user has made.
     * @param userId 
     */
    public getUserPosts(userId: string): Observable<PostList> {
        return this.http.get<PostList>(`${this.dummyApiUrl}/user/${userId}/post`, { headers: this.apiHttpHeader });
    }

    /**
     * Get all posts that contains the given tag.
     * @param tagTitle 
     */
    public getPostsByTag(tagTitle: string): Observable<PostList> {
        return this.http.get<PostList>(`${this.dummyApiUrl}/tag/${tagTitle}/post`, { headers: this.apiHttpHeader });
    }

    /**
     * Get all comments from a post.
     * @param postId 
     */
    public getPostComments(postId: string): Observable<CommentsList> {
        return this.http.get<CommentsList>(`${this.dummyApiUrl}/post/${postId}/comment`, { headers: this.apiHttpHeader });
    }

    /**
     * List of all the used tags.
     */
    public getTagsList(): Observable<TagList> {
        return this.http.get<TagList>(`${this.dummyApiUrl}/tag`, { headers: this.apiHttpHeader });
    }
}