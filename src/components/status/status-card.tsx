import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@app/components/ui/card";

import { StatusProps } from "@app/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { ChartNoAxesColumn, Heart, MessageCircle, Repeat2, Share } from "lucide-react";
import Link from "next/link";

export function StatusCard({
  id,
  content,
  author_id,
  created_at,
  likes,
  comments,
  views,
}: StatusProps) {

  const date = new Date(created_at).toLocaleDateString();
  return (
    <div
    className={`flex flex-col items-center justify-center min-h-screen bg-background text-foreground`}
  >
    <div className="w-full max-w-md space-y-4">
      <div className="flex items-center justify-between">

      </div>
      <Card>
        <CardHeader className="flex flex-row space-x-4 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@username" />
            <AvatarFallback>d</AvatarFallback>
          </Avatar>
          <div>
            <span className="font-bold">{author_id.name} · </span>
            <span className="text-sm text-muted-foreground">@{author_id.username}</span>
          </div>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter className="flex justify-between">

            <Link href={`/status/${id}`}> 
          <Button variant="ghost" size="sm">
            <MessageCircle className="w-4 h-4 mr-2" />
            {comments}
          </Button>
          </Link>

          <Button variant="ghost" size="sm">
            <Heart className="w-4 h-4 mr-2" />
            {likes}
          </Button> 
          <Button variant="ghost" size="sm">
            <ChartNoAxesColumn className="w-4 h-4 mr-2" />
            {views}
          </Button>
          <Button variant="ghost" size="sm">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
  );
}
