import { Post, User } from "@prisma/client";

export type FullPost = Post & {
  user: User;
};
