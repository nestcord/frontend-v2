import { Card, CardContent, CardFooter, CardHeader } from "@app/components/ui/card"
import type { StatusProps } from "@app/lib/types"
import { Avatar, AvatarFallback, AvatarImage } from "@app/components/ui/avatar"
import { Button } from "@app/components/ui/button"
import { BarChartIcon as ChartNoAxesColumn, Heart, MessageCircle, Share } from "lucide-react"
import Link from "next/link"
import Markdown from "react-markdown"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

export function StatusCard({ id, content, author_id, created_at, likes, comments, views }: StatusProps) {
  const createdAt = dayjs(created_at).fromNow()

  return (
    <div className="flex justify-center w-full px-4 py-6 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl bg-white dark:bg-transparent/15 shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="p-4 sm:p-6">
          <Link href={`/${author_id.username}`}>
          <div className="flex items-center space-x-4">
          <Avatar className="h-10 w-10 sm:h-10 sm:w-10 relative group overflow-hidden rounded-full">
  <AvatarImage 
    src={author_id.avatar_url} 
    alt={`@${author_id.username}`} 
    className="transition duration-200 ease-in-out group-hover:brightness-75"
  />
  <AvatarFallback className="text-lg sm:text-xl font-semibold">
    {author_id.username.charAt(0).toUpperCase()}
  </AvatarFallback>
</Avatar>

            <div>
            <div className="text-base sm:text-base font-bold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
  <span className="hover:underline">{author_id.name}</span>
  <span className="text-sm sm:text-sm text-gray-500 dark:text-indigo-300">
    @{author_id.username}
  </span>
  <span className="text-gray-500 dark:text-gray-400">·</span>
  <span className="text-sm sm:text-sm hover:underline">{createdAt}</span>
</div>

            </div>
          </div>
          </Link>
        </CardHeader>
        <CardContent className="px-4 sm:px-6 py-2 sm:py-4">
          <div className="prose dark:prose-invert max-w-none">
            <Markdown>{content}</Markdown>
          </div>
        </CardContent>
        <CardFooter className="px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap justify-between items-center gap-2">
          <Link href={`/status/${id}`} className="flex-grow sm:flex-grow-0">
            <Button variant="ghost" size="sm" className="w-full sm:w-auto">
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="sm:ml-2">{comments}</span>
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="flex-grow sm:flex-grow-0">
            <Heart className="w-4 h-4 mr-2" />
            <span className="sm:ml-2">{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex-grow sm:flex-grow-0">
            <ChartNoAxesColumn className="w-4 h-4 mr-2" />
            <span className="sm:ml-2">{views}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex-grow sm:flex-grow-0">
            <Share className="w-4 h-4 mr-2" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

