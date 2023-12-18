import {
  PiArrowFatLineDownDuotone,
  PiArrowFatLineUpFill,
} from 'react-icons/pi';
import styles from './Reply.module.scss';

type ReplyTypes = {
  reply: string;
 author: { username: string;}
  date: string;
  upvote: number;
  downvote: number;
  id: string;
  parentCommentId: string;
};

const Reply = ({ reply, author, date, upvote, downvote }: ReplyTypes) => {
  return (
    <div className={styles.reply}>
      <h4>{author.username}</h4>
      <time dateTime={date}>{date}</time>
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
