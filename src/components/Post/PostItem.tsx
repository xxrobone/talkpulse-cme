import { Link } from 'react-router-dom';
import { Post } from '../../types/types';
import styles from './Post.module.scss';
import { timeAgo } from '../../utils/timeAgo';

const PostItem = ({ post }: { post: Post }) => {
  return (
    <div className={styles.post}>
      <header>
        <p>
          <span>Author:</span> {post.author?.username}
        </p>
        <time dateTime={post.createdAt}>{timeAgo(post.createdAt)}</time>
      </header>
      {post && (
        <div className={styles['post-info']}>
          {post.link ? (
            <Link to={post.link}>
              <h2>
                {post.title}
                <br/>
                <span className={styles.postUrl}>({post.link})</span>
              </h2>
            </Link>
          ) : (
            <Link to={`/posts/${post._id}`}>
              <h2>{post.title}</h2>
            </Link>
          )}
          <section>{post.body}</section>
        </div>
      )}
       {post.link && (
            <span className={styles.link}>
              <Link to={`/posts/${post._id}`}>View full post</Link>
            </span>
          )}
    </div>
  );
};

export default PostItem;
