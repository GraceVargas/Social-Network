import { Post } from "@types";
import { createContext, FC, ReactNode, useState } from "react";

type PostsContextType = {
  posts?: Post[];
  loadPosts: (post: Post[]) => void;
};

const PostsContext = createContext<PostsContextType>({
  posts: [],
  loadPosts: () => {},
});

type Props = {
  children: ReactNode;
};

const PostsProvider: FC<Props> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>();
  const loadPosts = (post: Post[]) => {
    setPosts(post);
  };

  return (
    <PostsContext.Provider value={{ posts, loadPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export { PostsContext, PostsProvider };
