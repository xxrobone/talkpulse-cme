import { useEffect, useState } from 'react';
import {
  ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
} from 'react-router-dom';
import auth from '../lib/auth';
import { Post, User, ActionData } from '../types/types';
import styles from './UpdatePost.module.scss';

type UpdatePostLoaderData = {
  post: Post;
  user: User;
};

const convertFileToBase64 = async (file: File | string | null): Promise<string | null> => {
  if (!file) {
    return null;
  }

  // If the file is a string, assume it's already a base64 string
  if (typeof file === 'string') {
    return file;
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      // Extract only the base64 content without the data URL prefix
      const base64Content = (reader.result as string).split(',')[1];
      resolve(base64Content);
    };

    reader.onerror = () => {
      reject(null);
    };

    reader.readAsDataURL(file);
  });
};

export const action = async (args: ActionFunctionArgs) => {
  try {
    const { request, params } = args;
    const { postId } = params;
    const formData = await request.formData();

    const imageInput = formData.get('image') as File | null;
    const imageBase64 = await convertFileToBase64(imageInput);

    const postData = {
      title: formData.get('title') as string,
      link: formData.get('link') as string,
      body: formData.get('body') as string,
      image: imageBase64,
    };

    const response = await fetch(
      import.meta.env.VITE_SERVER_URL + `/posts/${postId}/update`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.getJWT()}`,
        },
        body: JSON.stringify(postData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error updating post:', errorData);
      return { error: 'Failed to update post' };
    }

    // Redirect on successful update
    return redirect(`/posts/${postId}`);
  } catch (error) {
    console.error('Unexpected error during post update:', error);
    return { error: 'Unexpected error occurred' };
  }
};

const UpdatePost: React.FC<UpdatePostLoaderData> = ({ post, user }) => {
  const error = useActionData() as ActionData;

  const isAuthor =
    auth.isSignedIn() && user && post.author?.username === user.username;

  const [postData, setPostData] = useState({
    title: post.title || '',
    link: post.link || '',
    body: post.body || '',
    image: null as File | null,
  });

  useEffect(() => {
    setPostData({
      title: post.title || '',
      link: post.link || '',
      body: post.body || '',
      image: null as File | null,
    });
  }, [post]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setPostData({ ...postData, image: files[0] });
    }
  };

  return (
    <div className={styles['update-post']}>
      <h2>Update post</h2>
      <Form
        method='PUT'
        action={`/posts/${post._id}/update`}
        className={styles['form']}
      >
        {error && (
          <p>
            <b>Error: </b> {error.message}
          </p>
        )}
        <label htmlFor='title'>Title</label>
        <div className={styles['input-wrapper']}>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Title'
            required={true}
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </div>
        <label htmlFor='link'>Link</label>
        <div className={styles['input-wrapper']}>
          <input
            type='text'
            name='link'
            id='link'
            placeholder='Link'
            value={postData.link}
            onChange={(e) => setPostData({ ...postData, link: e.target.value })}
          />
        </div>
        <label htmlFor='image' className={styles['image-label']}>
          Image (optional)
        </label>
        <input
          className={styles['input-image-wrapper']}
          type='file'
          name='image'
          id='image'
          accept='image/*'
          onChange={handleFileChange}
        />
        <label htmlFor='body'>Content</label>
        <div className={styles['textarea-wrapper']}>
          <textarea
            name='body'
            id='body'
            placeholder='Feel free to express yourself'
            value={postData.body}
            onChange={(e) => setPostData({ ...postData, body: e.target.value })}
          />
        </div>
        {isAuthor ? (
          <span className={styles.icon}>
            <button type='submit'>Update post</button>
          </span>
        ) : (
          <span className={styles.icon}>
            <button type='button' disabled>
              Not authorized
            </button>
          </span>
        )}
      </Form>
    </div>
  );
};

export default UpdatePost;
