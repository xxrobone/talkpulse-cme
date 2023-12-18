import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Post } from '../types/types';
import styles from './SinglePost.module.scss';
import Comment from '../components/Comments/Comment/Comment';
import { HiOutlineChatBubbleLeftRight, HiPencilSquare } from 'react-icons/hi2';
import { timeAgo } from '../utils/timeAgo';
import auth from '../lib/auth'

export const loader = async (args: LoaderFunctionArgs) => {
  const { id } = args.params;

  const response = await fetch(
    import.meta.env.VITE_SERVER_URL + '/posts/' + id,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  
  const posts = await response.json();

  return posts;
};

const SinglePost = () => {
  const post = useLoaderData() as Post;

  console.log(post);
  return (
    <>
      <div className={styles.post}>
        <header className={styles['post-header']}>
          <p>
            <span>Author:</span> {post.author?.username}
          </p>
          <p>
            {auth.isSignedIn() && 
            <span className={styles.icon}>
              <HiPencilSquare />
            </span>            
            }
            <time dateTime={post.createdAt}>{timeAgo(post.createdAt)}</time>
          </p>
        </header>
        <div className={styles['post-info']}>
          {post.link ? (
            <Link to={post.link}>
              <h2>
                {post.title}
                <br />
                <span className={styles['post-link']}>({post.link})</span>
              </h2>
            </Link>
          ) : (
            <h2>{post.title}</h2>
          )}
          {post.body && (
            <section className={styles.postBody}>
              <p>{post.body}</p>
            </section>
          )}
        </div>
        <section className={styles.comments}>
          <h2>
            <HiOutlineChatBubbleLeftRight /> Comments:
          </h2>
          {post.comments?.map((comment) => (
            <Comment
              key={comment._id}
              body={comment.body}
              author={comment?.author?.username}
              createdAt={comment.createdAt}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default SinglePost;

/* 
 <p key={comment._id} className={styles.comment}>
              {comment.body} - {comment?.author?.username}
            </p> 
*/
