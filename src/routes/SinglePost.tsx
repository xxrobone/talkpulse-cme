import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Post } from '../types/types';
import styles from './SinglePost.module.scss';
import Comment from '../components/Comments/Comment/Comment';
import {HiOutlineChatBubbleLeftRight} from 'react-icons/hi2'

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
console.log(post)
  return (
    <>
      <div className={styles.post}>
        <div className={styles.postInfo}>
          {post.link ? (
            <Link to={post.link}>
              <h2>
                {post.title}
                <span className={styles.postUrl}>({post.link})</span>
              </h2>
            </Link>
          ) : (
            <h2>{post.title}</h2>
          )}
          <p>by {post.author.username}</p>
          {post.body && (
            <div className={styles.postBody}>
              <p>{post.body}</p>
            </div>
          )}
        </div>
        <section className={styles.comments}>
          <h2><HiOutlineChatBubbleLeftRight/> Comments:</h2>
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