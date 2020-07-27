import { User } from './user.model';
import { Tag } from './tag.model';

export class Post {
    id: string;
    image: string;
    likes: number;
    link: string;
    owner: User;
    publishDate: string;
    tags: Tag[];
    text: string;
}

export class PostList {
    data: Post[];
    limit: number;
    offset: number;
    page: number;
}