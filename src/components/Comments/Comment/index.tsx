import { useState } from 'react';

import {
  PiArrowFatLineUpFill,
  PiArrowFatLineDownDuotone,
} from 'react-icons/pi';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

import Reply from '../Reply';
import styles from './Comment.module.scss';

type ReplyTypes = {
  reply: string;
 author: { username: string;}
  date: string;
  upvote: number;
  downvote: number;
  id: string;
  parentCommentId: string;
};

type CommentTypes = {
  author: {username: string;}
  comment: string;
  date: string;
  upvote: number;
  downvote: number;
  replies?: ReplyTypes[] | undefined;
};

const Comment = ({
  comment,
  author,
  date,
  upvote,
  downvote,
  replies,
}: CommentTypes) => {
  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };
  return (
    <article className={styles.comment}>
      <header>
      <h4>{author.username}</h4>
        <time dateTime='2023-12-08T12:00:00Z'>
          December 8, 2023 at 12:00 PM {date}
        </time>
      </header>
      <p>{comment}</p>
      <footer>
        <PiArrowFatLineUpFill />
        <span>{upvote}</span>
        <PiArrowFatLineDownDuotone />
        <span>{downvote}</span>
        <span className={styles.reply}>reply </span>
        <span className={styles.reply} onClick={toggleReplies}>
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
    </article>
  );
};

export default Comment;
