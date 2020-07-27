import { User } from './user.model';

export class Comment {
    id: string;
    message: string;
    owner: User;
    publishDate: string;
}

export class CommentsList {
    data: Comment[];
    limit: number;
    offset: number;
    page: number;
}