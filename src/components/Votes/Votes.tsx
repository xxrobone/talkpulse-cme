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

export const action = async (args: ActionFunctionArgs) => {
  const { entityId } = args.params;
  
  const formData = await args.request.formData();
  const vote = formData.get('vote');
  const entity = formData.get('entity');
  console.log('Entity:', entity);
  const path = `/${entity}/${entityId}/${vote}vote`;

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
  entity: 'posts' | 'comments';
  entityId: string;
  score: number;
}

const Votes = ({ entity, entityId, score }: VotesProps) => {
  const location = useLocation();

  return (
    <div className={styles.votes}>
      <Form method='POST' action={`/${entity}/${entityId}/vote`}>
        <input type='hidden' name='entity' value={entity} />
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

      <Form method='POST' action={`/${entity}/${entityId}/vote`}>
        <input type='hidden' name='entity' value={entity} />
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
