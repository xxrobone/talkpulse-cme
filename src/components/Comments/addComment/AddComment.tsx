import { Dispatch, SetStateAction, useRef } from 'react';
import { useFetcher, ActionFunctionArgs } from 'react-router-dom';

import auth from '../../../lib/auth';
import { Post } from '../../../types/types';

import styles from './AddComment.module.scss';

export const action = async (args: ActionFunctionArgs) => {
  const { postId } = args.params;

  const formData = await args.request.formData();

  const response = await fetch(
    import.meta.env.VITE_SERVER_URL + '/posts/' + postId + '/comments',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.getJWT()}`,
      },
      body: JSON.stringify({ commentBody: formData.get('body') }),
    }
  );

  if (!response.ok) {
    const { message } = await response.json();
    return { message };
  }
  const post = (await response.json()) as Post;
  return {
    comments: post.comments,
  };
};

/* 
const AddComment: React.FC<AddCommentProps> = ({
  postId,
  setAddAComment,
  setShowComments,
})
*/

const AddComment = ({ postId }: { postId: string }) => {
  const fetcher = useFetcher({ key: 'comment-form-' + postId });
  const textRef = useRef<HTMLTextAreaElement>(null);

  if (fetcher.data && textRef.current) {
    textRef.current.value = '';
  }

  /*   const handleCancelClick = () => {
    setAddAComment(false);


    <button type='button' onClick={handleCancelClick}>
  }; */

  return (
    <div className={styles['comment-form']}>
      {/*  <p>Add a Comment for - {postId}</p> */}
      <h2>Leave a comment:</h2>
      <fetcher.Form method='post' action={`/posts/${postId}/comments`}>
        <div className={styles['textarea-wrapper']}>
          <textarea name='body' id='body' required ref={textRef}></textarea>
        </div>
        <div className={styles['buttons-container']}>
          <button type='submit'>Post comment</button>{' '}
          <button type='button'> Cancel</button>
        </div>
      </fetcher.Form>
    </div>
  );
};

export default AddComment;
