import {
  PiArrowFatLineDownDuotone,
  PiArrowFatLineUpFill,
} from 'react-icons/pi';
import styles from './Reply.module.scss';

type ReplyTypes = {
  reply: string;
  author: { username: string };
  createdAt: string;
  upvote: number;
  downvote: number;
  id: string;
  parentCommentId: string;
};

const Reply = ({
  reply,
  author,
  createdAt,
  upvote = 5,
  downvote = 3,
}: ReplyTypes) => {
  return (
    <div className={styles.reply}>
      <header>
      <h4>{author.username}</h4>
      <time dateTime={createdAt}>{createdAt}</time>
      </header>
      <p>{reply}</p>
      <footer>
        <PiArrowFatLineUpFill />
        <span>{upvote}</span>
        <PiArrowFatLineDownDuotone />
        <span>{downvote}</span>
      </footer>
    </div>
  );
};

export default Reply;
