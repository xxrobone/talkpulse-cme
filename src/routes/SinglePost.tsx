import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import styles from './SinglePost.module.scss';
import { Post } from '../types/types';

export const loader = async (args: LoaderFunctionArgs) => {
  const { id } = args.params;
  
  console.log(args)
    
    console.log(id)

  const response = await fetch(
    import.meta.env.VITE_SERVER_URL + '/posts/' + id,
    {
        headers: {
            Accepts: 'application/json',
          },
        method: 'GET',
    }
  );

  const posts = await response.json();
  console.log(response.json())
  return posts;
};

const SinglePost = () => {
  const post = useLoaderData() as Post;
console.log(post)
  return (
    <div>
      <>
        {post && (
          <div className={styles.post}>
            <div className={styles.postInfo}>
              {post.link ? (
                <Link to={post.link}>
                  <h2>
                    {post.title}
                    <span className={styles.postUrl}>{post.link}</span>
                  </h2>
                </Link>
              ) : (
                <h2>{post.title}</h2>
              )}
              <p>by {post.author.username}</p>
              {post.content && (
                <div className={styles['post-info']}>
                  <p>{post.content}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default SinglePost;
