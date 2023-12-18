import { Link } from 'react-router-dom';
import { Post } from '../../types/types';
import styles from './Post.module.scss';

const PostItem = ({ post }: { post: Post }) => {
 
  return (
    <div className={styles.post}>
      {post && 
      <div className={styles.postInfo}>
        { post.link ? (
          <Link to={post.link}>
            <h2>{post.title}<span className={styles.postUrl}>({post.link})</span></h2>
          </Link>
        ) : (
          <Link to={`/posts/${post._id}`}>
            <h2>{post.title}</h2>
          </Link>
        )}
       <p>by {post.author?.username}</p>
        { post.link && (
          <span><Link to={`/posts/${post._id}`}>Show post</Link></span>
        )}
      </div>      
      }
    </div>
  )
}

export default PostItem;
