import { useEffect, useState } from 'react';
import {
  ActionFunctionArgs,
  Form,
  useActionData,
  redirect,
} from 'react-router-dom';
import auth from '../lib/auth';
import { ActionData } from '../types/types';
import styles from './UpdateComment.module.scss';

type UpdateCommentLoaderData = {
  body: string;
  commentId: string;
  postId: string;
};

export const action = async (args: ActionFunctionArgs) => {
  try {
    const { request, params } = args;
    const { postId, commentId } = params;
    const formData = await request.formData();
    const commentBody = formData.get('body') as string;

    const response = await fetch(
      import.meta.env.VITE_SERVER_URL +
        `/posts/${postId}/comments/${commentId}/update`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.getJWT()}`,
        },
        body: JSON.stringify({ commentBody }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error updating comment:', errorData);
      return { error: 'Failed to update comment' };
    }

    return redirect(`/posts/${postId}`);
  } catch (error) {
    console.error('Unexpected error during comment update:', error);
    return { error: 'Unexpected error occurred' };
  }
};

const UpdateComment: React.FC<
  UpdateCommentLoaderData & { closeUpdate: () => void }
> = ({ body, commentId, postId, closeUpdate }) => {
  const error = useActionData() as ActionData;

  const [commentData, setCommentData] = useState({
    body: body || '',
  });

  useEffect(() => {
    setCommentData({
      body: body || '',
    });
  }, [body]);

  const handleClose = () => {
    setTimeout(() => {
      closeUpdate();
    }, 1000);
  };

  return (
    <div className={styles['update-comment']}>
      <Form
        method='PUT'
        action={`/posts/${postId}/comments/${commentId}/update`}
        className={styles['form']}
      >
        {error && (
          <p>
            <b>Error: </b> {error.message}
          </p>
        )}
        <label htmlFor='body'>Update Comment</label>
        <div className={styles['textarea-wrapper']}>
          <textarea
            name='body'
            id='body'
            placeholder='Edit your comment'
            value={commentData.body}
            onChange={(e) =>
              setCommentData({ ...commentData, body: e.target.value })
            }
          />
        </div>
        <span className={styles.icon}>
          <button type='submit' onClick={handleClose}>
            Update comment
          </button>
        </span>
      </Form>
    </div>
  );
};

export default UpdateComment;
