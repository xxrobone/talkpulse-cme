import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import SingUp, { action as signUpAction } from './routes/SignUp.tsx';
import SignIn, { action as signInAction } from './routes/SignIn.tsx';
import Index from './routes/Index.tsx';
import auth from './lib/auth.ts';
import Verification from './routes/Verification.tsx';
import CreatePost, {
  action as createPostAction,
} from './routes/CreatePost.tsx';
import RequireAuth from './components/RequireAuth/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'sign-up',
        action: signUpAction,
        element: <SingUp />,
      },
      {
        path: 'sign-in',
        action: signInAction,
        element: <SignIn />,
      },
      {
        path: 'sign-out',
        action: () => {
          auth.signOut();
          return redirect('/');
        },
      },
      {
        element: <RequireAuth />,
        children: [
          {
            path: 'create-post',
            action: createPostAction,
            element: <CreatePost />,
          },
        ],
      },

      {
        path: 'verification',
        element: <Verification />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
