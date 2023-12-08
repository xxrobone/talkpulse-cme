import {
  PiArrowFatLineDownDuotone,
  PiArrowFatLineUpFill,
} from 'react-icons/pi';
import styles from './Reply.module.scss';

type ReplyTypes = {
  reply: string;
  username: string;
  date: string;
  upvote: number;
  downvote: number;
  id: string;
  parentCommentId: string;
};

const Reply = ({ reply, username, date, upvote, downvote }: ReplyTypes) => {
  return (
    <div className={styles.reply}>
      <h4>{username}</h4>
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
