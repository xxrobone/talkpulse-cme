import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Post, User } from '../types/types';
import styles from './SinglePost.module.scss';
import Comment from '../components/Comments/Comment/Comment';
import { HiOutlineChatBubbleLeftRight, HiPencilSquare } from 'react-icons/hi2';
import { timeAgo } from '../utils/timeAgo';
import auth from '../lib/auth';

export const loader = async (args: LoaderFunctionArgs) => {
  const { id } = args.params;

  const postResponse = await fetch(
    import.meta.env.VITE_SERVER_URL + '/posts/' + id,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const userResponse = await fetch(import.meta.env.VITE_SERVER_URL + '/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getJWT()}`,
    },
  });

  const [postData, userData] = await Promise.all([
    postResponse.json(),
    userResponse.json(),
  ]);

  console.log(userData);

  return { post: postData, user: userData };
};

const SinglePost = () => {
  const { post, user } = useLoaderData() as { post: Post; user: User };
  const isAuthor =
    auth.isSignedIn() && user && post.author?.username === user.username;
  console.log(isAuthor);

  console.log(post);
  console.log(user);
  return (
    <>
      <div className={styles.post}>
        <header className={styles['post-header']}>
          <p>
            <span>Author:</span> {post.author?.username}
          </p>
          <p>
            {isAuthor && (
              <span className={styles.icon}>
                <HiPencilSquare />
              </span>
            )}
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
