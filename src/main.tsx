import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import SignUp, { action as signUpAction } from './routes/SignUp.tsx';
import SignIn, { action as signInAction } from './routes/SignIn.tsx';
import Index, { loader as indexLoader } from './routes/Index.tsx';
import auth from './lib/auth.ts';
import CreatePost, {
  action as createPostAction,
} from './routes/CreatePost.tsx';
import RequireAuth from './components/RequireAuth/index.tsx';
import SinglePost, {
  loader as singlePostLoader,
} from './routes/SinglePost.tsx';
/* import { action as createCommentAction } from './components/AddComment/AddComment.tsx'; */
import { action as createCommentAction } from './components/CommentForm/CommentForm.tsx';
import { action as voteAction } from './components/Votes/Votes';
import { action as deletePostAction } from './components/DeletePost/DeletePost';
import { action as deleteCommentAction } from './components/DeleteComment/DeleteComment';
import { action as updatePostAction } from './routes/UpdatePost';
import { action as updateCommentAction } from './routes/UpdateComment.tsx';
import EmailVerification from './routes/EmailVerification.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        loader: indexLoader,
        element: <Index />,
      },
      {
        path: '/posts/:id',
        loader: singlePostLoader,
        element: <SinglePost />,
      },
      {
        path: 'sign-in',
        action: signInAction,
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        action: signUpAction,
        element: <SignUp />,
      },
      {
        path: 'sign-out',
        action: () => {
          auth.signOut();
          return redirect('/');
        },
      },
      {
        path: 'verify-account/:username/:token',
        element: <EmailVerification />,
      },
      {
        element: <RequireAuth />,
        children: [
          {
            path: 'create-post',
            action: createPostAction,
            element: <CreatePost />,
          },
          {
            path: '/posts/:postId/update',
            action: updatePostAction,
          },
          {
            path: '/posts/:postId/delete',
            action: deletePostAction,
          },
          {
            path: '/posts/:postId/vote',
            action: voteAction,
          },
          {
            path: '/posts/:postId/comments/:commentId/vote',
            action: voteAction,
          },
          {
            path: '/posts/:postId/comments',
            action: createCommentAction,
          },
          {
            path: '/posts/:postId/comments/:commentId/update',
            action: updateCommentAction,
          },
          {
            path: '/posts/:postId/comments/:commentId/delete',
            action: deleteCommentAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
