import styles from './Comments.module.scss';
import { PiArrowFatLineUpFill, PiArrowFatLineDownDuotone } from "react-icons/pi";

type CommentTypes = {
  username: string;
  comment: string;
  date: string;
  upvote: number;
  downvote: number;
};

const Comment = ({
  comment,
  username,
  date,
  upvote,
  downvote,
}: CommentTypes) => {
  return (
    <article className={styles.comment}>
      <header>
        <p>{username}</p>
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
      </footer>
    </article>
  );
};

export default Comment;
