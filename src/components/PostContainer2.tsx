import { postApi } from "../services/PostService.ts";
import PostItem from "./PostItem.tsx";
import type { IPost } from "../models/IPost.ts";

const PostContainer2 = () => {
  const { data: posts, isLoading, error } = postApi.useFetchAllPostsQuery(10)
  const [updatePost] = postApi.useUpdatePostMutation()
  const [deletePost] = postApi.useDeletePostMutation()

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }
  const handleRemove = (post: IPost) => {
    deletePost(post)
  }

  if (isLoading) return <p aria-busy="true">Идёт загрузка</p>;
  if (error) return <p className="error" role="alert">Не удалось загрузить посты</p>

  return (
    <div>
      {
        posts && posts.data.map((post) => (
          <PostItem
            post={post}
            key={post.id}
            remove={handleRemove}
            update={handleUpdate}
          />
        ))
      }
    </div>
  );
};

export default PostContainer2;
