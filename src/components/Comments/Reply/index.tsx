import {
  PiArrowFatLineDownDuotone,
  PiArrowFatLineUpFill,
} from 'react-icons/pi';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

import styles from './Reply.module.scss';
import { timeAgo } from '../../../utils/timeAgo';

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
    <div className={styles['reply-wrapper']}>
      <header className={styles['comment-header']}>
        <p>Author: {author && author.username}</p>

        <p>
          <time dateTime={createdAt}>{timeAgo(createdAt)}</time>
        </p>
      </header>
      <p className={styles.text}>{reply}</p>
      <footer>
        <PiArrowFatLineUpFill />
        <span>{upvote}</span>
        <PiArrowFatLineDownDuotone />
        <span>{downvote}</span>
        <span className={styles.reply}>reply </span>
        <span className={styles.icon} /* onClick={toggleReplies} */>
          <HiOutlineChatBubbleLeftRight />
        </span>
      </footer>
    </div>
  );
};

export default Reply;
