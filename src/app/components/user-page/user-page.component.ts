import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { PostList } from 'src/app/models/post.model';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {
    
    public user: User;
    public postsList: PostList;

    private userSub: Subscription;
    private postsSub: Subscription;

    constructor(
        private dummyService: DummyService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.userSub = this.dummyService.getUserById(this.route.snapshot.params.id)
            .subscribe((user: User) => {
                this.user = user;
            });

        this.postsSub = this.dummyService.getUserPosts(this.route.snapshot.params.id)
            .subscribe((postsList: PostList) => {
                this.postsList = postsList;
                console.log(postsList);
            })
    }

    public goHome(): void {
        this.router.navigate(['/']);
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
        this.postsSub.unsubscribe();
    }
}
