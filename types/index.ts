import { Post, User, Comment } from "@prisma/client";

export type FullPost = Post & {
  user: User;
};

export type FullComment = Comment & {
  user: User;
};
