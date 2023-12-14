import {
  ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
} from 'react-router-dom';
import auth from '../lib/auth';
import { ActionData } from '../types/types';
import Input from '../components/Input';

import styles from './CreatePost.module.scss';

/* export const action = async (args: ActionFunctionArgs) => {
  const { request } = args;
  const formData = await request.formData();

  const postData = Object.fromEntries(formData.entries());

  const response = await fetch(import.meta.env.VITE_SERVER_URL + '/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getJWT()}`,
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    const errorData = await response.json();
      console.error('Error creating post:', errorData);
      return { error: 'Failed to create post' };
  } else {
    return redirect('/');
  }
}; */
export const action = async (args: ActionFunctionArgs) => {
  const { request } = args;
  const formData = await request.formData();

  const postData = Object.fromEntries(formData.entries());

  const response = await fetch(import.meta.env.VITE_SERVER_URL + '/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getJWT()}`,
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Error creating post:', errorData);

    return { error: 'Failed to create post' };
  } else {
    return redirect('/');
  }
};

const CreatePost = () => {
  const error = useActionData() as ActionData;

  return (
    <div className={styles['create-post']}>
      <h2>Create post</h2>
      <Form method='post' className={styles['form']}>
        {error && (
          <p>
            <b>Error: </b> {error.message}
          </p>
        )}
        <label htmlFor='title'>Username</label>
        <Input
          type='text'
          name='title'
          id='title'
          placeholder='Title'
          error={false}
          required={true}
        />
        <label htmlFor='link'>Link</label>
        <Input
          type='text'
          name='link'
          /*  value='' */
          id='link'
          placeholder='Link'
          error={false}
          /*  onChange={onChangeHandler} */
          required={true}
        />
        <label htmlFor='content'>Content</label>
        <Input
          type='text'
          name='content'
          id='content'
          placeholder='Content'
          error={false}
          required={true}
        />
        <button type='submit'>Create post</button>
      </Form>
    </div>
  );
};

export default CreatePost;
