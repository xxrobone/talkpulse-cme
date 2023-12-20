import { useState, MouseEvent } from 'react';
import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { HiOutlineChatBubbleLeftRight, HiPencilSquare } from 'react-icons/hi2';

import { Post, User } from '../types/types';
import Comment from '../components/Comments/Comment/Comment';
import AddComment from '../components/Comments/AddComment/AddComment';
import Votes from '../components/Votes/Votes';
import { timeAgo } from '../utils/timeAgo';
import auth from '../lib/auth';

import styles from './SinglePost.module.scss';

type SinglePostLoaderData = {
  post: Post;
  user: User;
};

export const loader = async (args: LoaderFunctionArgs) => {
  const { id } = args.params;

  const postResponse = await fetch(
    import.meta.env.VITE_SERVER_URL + '/posts/' + id,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const userResponse = await fetch(import.meta.env.VITE_SERVER_URL + '/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getJWT()}`,
    },
  });

  const [postData, userData] = await Promise.all([
    postResponse.json(),
    userResponse.json(),
  ]);

  console.log(userData);

  return { post: postData, user: userData };
};

const SinglePost = () => {
  const [showComments, setShowComments] = useState<boolean>(false);
  const [addAComment, setAddAComment] = useState<boolean>(false);
  const { post, user } = useLoaderData() as SinglePostLoaderData;
  const isAuthor =
    auth.isSignedIn() && user && post.author?.username === user.username;
  console.log(isAuthor);

  const handleShowComments = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setShowComments((prev) => !prev);
  };

  const handleAddAComment = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setAddAComment((prev) => !prev);
  };

  console.log(post);
  console.log(user);
  return (
    <>
      <div className={styles.post}>
        <header className={styles['post-header']}>
          <p>
            <span>Author:</span> {post.author?.username}
          </p>
          <p>
            {isAuthor && (
              <span className={styles.icon}>
                <HiPencilSquare />
              </span>
            )}
            <time dateTime={post.createdAt}>{timeAgo(post.createdAt)}</time>
          </p>
        </header>
        <div className={styles['post-info']}>
          {post.link ? (
            <Link to={post.link}>
              <h2>
                {post.title}
                <br />
                <span className={styles['post-link']}>({post.link})</span>
              </h2>
            </Link>
          ) : (
            <h2>{post.title}</h2>
          )}
          {post.body && (
            <section className={styles['post-body']}>
              <p>{post.body}</p>
            </section>
          )}
        </div>
        <footer>
          <Votes post={post} />
          <span className={styles.reply}>
            Add comment{' '}
            <HiPencilSquare
              onClick={handleAddAComment}
            />
          </span>
          {/*  <span className={styles.icon} onClick={toggleReplies}> */}
          <span className={styles.comments}>Check comments: </span>{' '}
          <p className={styles.icon}>
            <HiOutlineChatBubbleLeftRight
              onClick={handleShowComments}
            />
          </p>
        </footer>
        {showComments ? (
          <section className={styles['comments-list']}>
            {/* probably should create a pop up modal for adding comments */}
            {post.comments?.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((comment) => (
              <Comment
                key={comment._id}
                body={comment.body}
                author={comment?.author?.username}
                createdAt={comment.createdAt}
              />
            ))}
          </section>
        ) : (
          <div></div>
        )}
        {addAComment ? (
          <AddComment postId={post._id} setAddAComment={setAddAComment} setShowComments={setShowComments} />
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default SinglePost;

/* 
 <p key={comment._id} className={styles.comment}>
              {comment.body} - {comment?.author?.username}
            </p> 
*/
