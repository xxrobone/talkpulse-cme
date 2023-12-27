// Votes.tsx
import { Form, ActionFunctionArgs, useLocation, redirect } from 'react-router-dom';
import auth from '../../lib/auth';

import { PiArrowFatLineUpFill, PiArrowFatLineDownDuotone } from 'react-icons/pi';
import styles from './Votes.module.scss';

export const action = async (args: ActionFunctionArgs) => {
  const { entityId } = args.params;
  const formData = await args.request.formData();
  const vote = formData.get('vote');
  const path = `/${formData.get('entity')}s/${entityId}/vote`;

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

interface VotesProps {
  entity: 'post' | 'comment';
  entityId: string;
  score: number;
}

const Votes = ({ entity, entityId, score }: VotesProps) => {
  const location = useLocation();

  const handleVote = async (voteType: 'up' | 'down') => {
    const path = `/${entity}s/${entityId}/vote`;

    const response = await fetch(import.meta.env.VITE_SERVER_URL + path, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.getJWT()}`,
      },
      body: JSON.stringify({ vote: voteType }),
    });

    console.log('Response:', response);

    if (!response.ok) {
      const { message } = await response.json();
      console.error(message);
    } else {
      // You can handle success, e.g., update the UI
    }
  };

  return (
    <div className={styles.votes}>
       <Form action={`/votes/${entity}/${entityId}/vote`} method="post">
        <input type="hidden" name="entity" value={entity} />
        <input type="hidden" name="entityId" value={entityId} />
        <input type="hidden" name="returnTo" value={location.pathname + location.search} />
        <button type="submit" onClick={() => handleVote('up')}>
          <PiArrowFatLineUpFill />
        </button>
      </Form>
      <span>{score}</span>
      <Form action={`/votes/${entity}/${entityId}/vote`} method="post">
        <input type="hidden" name="entity" value={entity} />
        <input type="hidden" name="entityId" value={entityId} />
        <input type="hidden" name="returnTo" value={location.pathname + location.search} />
        <button type="submit" onClick={() => handleVote('down')} className={styles['down-btn']}>
          <PiArrowFatLineDownDuotone />
        </button>
      </Form>
    </div>
  );
};

export default Votes;
