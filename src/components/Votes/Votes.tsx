// Votes.tsx

import {
  Form,
  useLocation,
  redirect,
  ActionFunctionArgs,
} from 'react-router-dom';
import auth from '../../lib/auth';
import {
  PiArrowFatLineUpFill,
  PiArrowFatLineDownDuotone,
} from 'react-icons/pi';
import styles from './Votes.module.scss';

interface VotesProps {
  votePath: string;
  score: number;
}

export const action = async (args: ActionFunctionArgs) => {
  const { postId, commentId } = args.params;
  const formData = await args.request.formData();
  const vote = formData.get('vote');

  const path = commentId
    ? `/posts/${postId}/comments/${commentId}/${vote}vote`
    : `/posts/${postId}/${vote}vote`;

  const response = await fetch(import.meta.env.VITE_SERVER_URL + path, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getJWT()}`,
    },
    body: JSON.stringify({ vote }),
  });

  if (!response.ok) {
    const { message } = await response.json();
    return { message };
  }

  return redirect(formData.get('returnTo')?.toString() || '/');
};

const Votes = ({ votePath, score }: VotesProps) => {
  const location = useLocation();

  return (
    <div className={styles.votes}>
      <Form method='POST' action={`/vote`}>
        {/*  <input type='hidden' name='entity' value='votes' /> */}
        <input
          type='hidden'
          name='returnTo'
          value={location.pathname + location.search}
        />
        <input type='hidden' value='up' name='vote' />
        <button type='submit'>
          <PiArrowFatLineUpFill />
        </button>
      </Form>

      <span>{score}</span>

      <Form method='POST' action={`/vote`}>
        {/*   <input type='hidden' name='entity' value='votes' /> */}
        <input
          type='hidden'
          name='returnTo'
          value={location.pathname + location.search}
        />
        <input type='hidden' value='down' name='vote' />
        <button type='submit' className={styles['down-btn']}>
          <PiArrowFatLineDownDuotone />
        </button>
      </Form>
    </div>
  );
};

export default Votes;
