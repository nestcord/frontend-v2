export interface StatusProps {
    id: string;
    author_id: string;
    content?: string;
    attachment?: string;
    comments: number;
    likes: number;
    views: number;
    created_at: string;
    updated_at?: string;
}