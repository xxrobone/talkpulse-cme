import { useState } from 'react';
import {
  PiArrowFatLineUpFill,
  PiArrowFatLineDownDuotone,
} from 'react-icons/pi';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

import { timeAgo } from '../../../utils/timeAgo';
import styles from './Comment.module.scss';
import Reply from '../Reply';

type ReplyTypes = {
  reply: string;
  author: { username: string };
  createdAt: string;
  upvote: number;
  downvote: number;
  id: string;
  parentCommentId: string;
};

interface CommentProps {
  key: string;
  body: string;
  author: string | undefined;
  createdAt: string;
  replies?: ReplyTypes[] | undefined;
}

const replies: ReplyTypes[] = [
  {
    reply: 'Reply to the first comment.',
    author: { username: 'replyUser1' },
    createdAt: '2023-01-02',
    upvote: 5,
    downvote: 0,
    id: 'r1',
    parentCommentId: '1',
  },

  {
    reply: 'An other reply to the first comment.',
    author: { username: 'replyUser5' },
    createdAt: '2023-01-04',
    upvote: 25,
    downvote: 4,
    id: 'r1',
    parentCommentId: '1',
  },
];

const Comment: React.FC<CommentProps> = ({ body, author, createdAt }) => {
  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };
  return (
    <div className={styles.comment}>
      <header className={styles['comment-header']}>
        <p>Author: {author && author}</p>

        <p>
          <time dateTime={createdAt}>{timeAgo(createdAt)}</time>
        </p>
      </header>
      <p className={styles.text}>{body}</p>
      <footer>
        <PiArrowFatLineUpFill />
        <span>12</span>
        <PiArrowFatLineDownDuotone />
        <span>5</span>
        <span className={styles.reply}>reply </span>
        <span className={styles.icon} onClick={toggleReplies}>
          <HiOutlineChatBubbleLeftRight />
        </span>
      </footer>
      {showReplies && (
        <div className={styles.replies}>
          {replies?.map((reply) => (
            <Reply key={reply.id} {...reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
