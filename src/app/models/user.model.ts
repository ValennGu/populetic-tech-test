export class User {
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    picture: string;
    title: string;
}

export class UsersList {
    data: User[];
    limit: number;
    offset: number;
    page: number;
}