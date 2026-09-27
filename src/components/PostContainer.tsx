import { postApi } from "../services/PostService.ts";
import PostItem from "./PostItem.tsx";
import { useState } from "react";
import type { IPost } from "../models/IPost.ts";

const PostContainer = () => {

  const [limit] = useState(5)

  const {
    data: posts,
    isLoading,
    error,
  } = postApi.useFetchAllPostsQuery(limit)
  const [createPost] = postApi.useCreatePostMutation()
  const [updatePost] = postApi.useUpdatePostMutation()
  const [deletePost] = postApi.useDeletePostMutation()

  // Опрос из урока: вернуть setLimit в useState и useEffect в импорты
  // useEffect(() => {
  //   setInterval(() => setLimit(5), 2000)
  // }, []);

  const handleCreate = async () => {
    const title = prompt('Заголовок нового поста')
    if (!title) return
    await createPost({ title, body: title })
  }
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
      <button
        className="outline post-add"
        onClick={handleCreate}
      >Добавить пост
      </button>
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

export default PostContainer;
