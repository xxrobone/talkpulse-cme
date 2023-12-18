export type ActionData = { message: string } | undefined

export interface Post {
    _id: string;
    title: string;
    link?: string;
    content?: string;
    author: {
        _id: string;
        username: string
    }
}