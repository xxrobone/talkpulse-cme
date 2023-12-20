import {
  Form,
  ActionFunctionArgs,
  redirect,
} from 'react-router-dom';
import auth from '../../lib/auth';
import { Post } from '../../types/types';
import { HiOutlineTrash } from 'react-icons/hi2';

import styles from './DeletePost.module.scss';

export const action = async (args: ActionFunctionArgs) => {
  const { postId } = args.params;

  const formData = await args.request.formData();

  const response = await fetch(
    import.meta.env.VITE_SERVER_URL + '/posts/' + postId + '/delete',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.getJWT()}`,
      },
    }
  );

  if (!response.ok) {
    const { message } = await response.json();
    return { message };
  }

  return redirect(formData.get('returnTo')?.toString() || '/');
};

const DeletePost = ({ post }: { post: Post }) => {

  return (
    <div className={styles.delete}>
      <Form method='DELETE' action={`/posts/${post._id}/delete`}>
        <input
          type='hidden'
          name='returnTo'
          value='/'
        />
        <button type='submit'>
          <HiOutlineTrash />
        </button>
      </Form>
    </div>
  );
};

export default DeletePost;
