import { Component, OnInit, OnDestroy } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router } from '@angular/router';
import { UsersList } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
    
    public usersList: UsersList;
    private usersSub: Subscription;

    constructor(
        public dummyService: DummyService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.usersSub = this.dummyService.getUsersList()
            .subscribe((usersList: UsersList) => {
                this.usersList = usersList;
            })
    }

    public getUserData(userID: string): void {
        this.router.navigate(['/user', userID]);
    }

    ngOnDestroy() {
        this.usersSub.unsubscribe();
    }
}
