import { timeAgo } from '../../../utils/timeAgo';
import styles from './Comment.module.scss';

interface CommentProps {
  key: string;
  body: string;
  author: string | undefined;
  createdAt: string;
}

const Comment: React.FC<CommentProps> = ({ body, author, createdAt }) => (
  <div className={styles.comment}>
    <header>
      <p>Author: {author && author}</p>

      <p>
        <time dateTime={createdAt}>{timeAgo(createdAt)}</time>
      </p>
    </header>
    <p>{body}</p>
  </div>
);

export default Comment;
