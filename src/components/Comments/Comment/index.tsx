/* import { useState } from 'react'; */

import {
  PiArrowFatLineUpFill,
  PiArrowFatLineDownDuotone,
} from 'react-icons/pi';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

/* import Reply from '../Reply'; */
import styles from './Comment.module.scss';

/* type ReplyTypes = {
  reply: string;
 author: { username: string;}
  createdAt: string;
  upvote: number;
  downvote: number;
  id: string;
  parentCommentId: string;
}; */

type CommentTypes = {
  author: string;
  body: string;
  createdAt: string;
  /*  upvote?: number;
  downvote?: number;
  replies?: ReplyTypes[] | undefined; */
};

const Commenttt = ({ body, author, createdAt }: CommentTypes) => {
  /*   const [showReplies, setShowReplies] = useState(false); */

  /*   const toggleReplies = () => {
    setShowReplies(!showReplies);
  }; */
  return (
    <article className={styles.comment}>
      <header>
        <h4>{author}</h4>
        <time dateTime={createdAt}>{createdAt}</time>
      </header>
      <p>{body}</p>
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
      {/* {showReplies && (
        <div className={styles.replies}>
          {replies?.map((reply) => (
            <Reply key={reply.id} {...reply} />
          ))}
        </div>
      )} */}
    </article>
  );
};

export default Commenttt;
