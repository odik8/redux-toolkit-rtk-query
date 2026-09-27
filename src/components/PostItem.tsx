import type { FC } from "react";
import type { IPost } from "../models/IPost.ts";

interface PostItemProps {
  post: IPost
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {

  const handleUpdate = () => {
    const title = prompt('Новый заголовок', post.title ?? '')
    if (!title) return
    update({ ...post, title })
  }

  return (
    <article className="post-card">
      <header>
        <strong>{post.title || <em>без заголовка</em>}</strong>
        <br />
        <small>id: {post.id}</small>
      </header>
      <footer>
        <button
          className="secondary"
          onClick={handleUpdate}
        >Изменить
        </button>
        <button
          className="secondary outline"
          onClick={() => remove(post)}
        >Удалить
        </button>
      </footer>
    </article>
  );
};

export default PostItem;
