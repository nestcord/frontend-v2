'use client'
import { Button } from "@app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@app/components/ui/dialog";
import { useUser } from "@app/context/UserContext";

import { ImageIcon, SendHorizontal, SmileIcon, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@app/components/ui/avatar";
import { useRef, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "@app/components/ui/label";
import { Separator } from "@app/components/ui/separator";

import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@app/components/ui/tooltip";
import { CreatePost } from "../actions/create-post";
import { DialogClose } from "@radix-ui/react-dialog";

import dynamic from "next/dynamic";
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
import rehypeSanitize from "rehype-sanitize";

export default function SidebarPost() {
  const { user } = useUser();
  const [content, setContent] = useState("");
  const [displayEmojiTab, setDisplayEmojiTab] = useState(false);
  const [attachment, setAttachment] = useState<string | null>(null);

  const FormRef = useRef<HTMLFormElement>(null);

  const handleEmojiInput = (emoji: { native: string }) => {
    setContent((prevContent) => prevContent + emoji.native);
    setDisplayEmojiTab(false);
  };

  return (
    <>
      <Dialog>
        <TooltipProvider>
          <DialogTrigger asChild>
            <Button
              variant="default"
              className="w-full justify-center text-white bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 rounded-full space-x-2 py-6 hidden md:flex"
            >
              <SendHorizontal className="h-6 w-6" />
              <span className="text-xl font-bold">Post</span>
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Create a post</DialogTitle>
              <DialogDescription>Share your thoughts with the world</DialogDescription>
            </DialogHeader>
            <Separator className="my-4" />
            <form
              ref={FormRef}
              action={async (formData) => {
                await CreatePost(formData, attachment, user);
                setContent("");
                FormRef.current?.reset();
              }}
              className="space-y-4"
            >
              <div className="flex items-start space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage
                    src={user?.avatar_url || ""}
                    alt={`${user?.username}'s avatar` || "Avatar"}
                  />
                  <AvatarFallback>{user?.username?.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="post-content" className="sr-only">
                    Your post
                  </Label>
                  <MDEditor
                    value={content}
                    onChange={(value) => setContent(value || "")}
                    height={200}
                    textareaProps={{
                      placeholder: "What's on your mind?",
                      maxLength: 240,
                    }}
                    previewOptions={{
                      rehypePlugins: [[rehypeSanitize]],
                    }}
                  />
                  {attachment && (
                    <div className="relative inline-block">
                      <img
                        src={attachment || "/placeholder.svg"}
                        alt="Attached image"
                        className="max-w-full h-auto rounded-lg"
                      />
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => setAttachment(null)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => document.getElementById("file-upload")?.click()}
                      >
                        <ImageIcon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Add Image</TooltipContent>
                  </Tooltip>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => setAttachment(e.target?.result as string);
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setDisplayEmojiTab(!displayEmojiTab)}
                      >
                        <SmileIcon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Add Emoji</TooltipContent>
                  </Tooltip>
                </div>
                <DialogClose asChild>
                  <Button type="submit" className="px-8">
                    Post
                  </Button>
                </DialogClose>
              </div>
            </form>
            {displayEmojiTab && (
              <div className="absolute bottom-16 right-4 z-20">
                <Picker data={data} onEmojiSelect={handleEmojiInput} theme="light" set="twitter" />
              </div>
            )}
          </DialogContent>
        </TooltipProvider>
      </Dialog>
    </>
  );
}
