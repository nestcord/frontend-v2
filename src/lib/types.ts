export interface StatusProps {
  id: string;
  author_id: {
    name: string;
    username: string;
    id: string;
    avatar_url: string;
    created_at: string;
  };
  content?: string;
  attachment?: string;
  comments: number;
  likes: number;
  views: number;
  created_at: string;
  updated_at?: string;
}
