import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Post } from '../types/types';
import styles from './SinglePost.module.scss';

export const loader = async (args: LoaderFunctionArgs) => {
  try {
    const { id } = await args.params;

    const response = await fetch(
      import.meta.env.VITE_SERVER_URL + '/posts/' + id,
      {
        headers: {
          Accept: 'application/json',
        },
        method: 'GET',
      }
    );

    const posts = await response.json();
    console.log(posts);

    return posts;
  } catch (error) {
    console.error('Error fetching post:', error);
    return { error: 'Error fetching post' };
  }
};

const ShowPost = () => {
  const post = useLoaderData() as Post;

  return (
    <>
      <div className={styles.post}>
        <div className={styles.postInfo}>
          {post?.link ? (
            <Link to={post?.link}>
              <h2>
                {post?.title}
                <span className={styles.postUrl}>({post?.link})</span>
              </h2>
              <p>by {post?.author?.username}</p>
            </Link>
          ) : (
            <h2>{post?.title}</h2>
          )}
          <p>by {post.author?.username}</p>
          {post?.content && (
            <div className={styles.postBody}>
              <p>{post?.content}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowPost;
