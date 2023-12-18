/* import Comments from '../components/Comments';
import Comment from '../components/Comments/Comment';
import Reply from '../components/Comments/Reply'; */
import Post from '../components/Post';
import PostItem from '../components/Post/PostItem';
/* import { mockPosts } from '../assets/mockData/mockPosts'; */

import styles from './Index.module.scss';
import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';

export const loader = async (args: LoaderFunctionArgs) => {
  const response = await fetch(import.meta.env.VITE_SERVER_URL + '/posts', {
    headers: {
      Accepts: 'application/json',
    },
  });

  return {
    posts: await response.json(),
  };
};

interface Post {
  _id: string;
  title: string;
  link: string;
  content: string;
  author: {
    _id: string;
    username: string;
  };
  createdAt: string;
}
/* 
interface Reply {
  reply: string;
  author: {
    _id: string;
    username: string;
  };
  date: string;
  upvote: number;
  downvote: number;
  id: string;
  parentCommentId: string;
} */
/* 
interface Comment {
  comment: string;
  author: {
    _id: string;
    username: string;
  };
  date: string; 
  upvote: number;
  downvote: number;
  id: string;
  replies: Reply[];
} */

/* const mockComments: Comment[] = [
  {
    comment: 'This is the first comment.',
    author: {username: 'user1', _id: '123'},
    date: '2023-01-01',
    upvote: 10,
    downvote: 2,
    id: '1',
    replies: [
      {
        reply: 'Reply to the first comment.',
       author: { username: 'replyUser1',_id: '223' },
        date: '2023-01-02',
        upvote: 5,
        downvote: 0,
        id: 'r1',
        parentCommentId: '1',
      },
      {
        reply: 'mocking my comment eh?.',
        author: {username: 'replyUser2', _id: '323'},
        date: '2023-01-03',
        upvote: 25,
        downvote: 2000,
        id: 'r2',
        parentCommentId: '1',
      },
    ],
  },
  {
    comment: 'Great article! Thanks for sharing.',
    author: { username: 'user2', _id: '423' },
    date: '2023-01-02',
    upvote: 15,
    downvote: 1,
    id: '2',
    replies: [],
  },
  {
    comment: 'I have a question about the topic.',
    author: {username: 'user3', _id: '523'},
    date: '2023-01-03',
    upvote: 8,
    downvote: 0,
    id: '3',
    replies: [],
  },
  {
    comment: 'Interesting insights. I learned a lot.',
    author: {username: 'user4', _id: '333'},
    date: '2023-01-04',
    upvote: 12,
    downvote: 3,
    id: '4',
    replies: [],
  },
  {
    comment: 'I disagree with some points mentioned.',
   author: { username: 'user5', _id: '443'},
    date: '2023-01-05',
    upvote: 5,
    downvote: 7,
    id: '5',
    replies: [],
  },
  {
    comment: 'Looking forward to more content like this!',
    author: {username: 'user6', _id: '32123'},
    date: '2023-01-06',
    upvote: 20,
    downvote: 1,
    id: '6',
    replies: [],
  },
];

const mockPost = [
  {
    file: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Coffee and code, still the dream!',
    author: {username: 'Rupert von Kodar', _id: '233123'},
    date: 'December 12, 2023',
    content: 'Pre planning / styling this project, YAY!',
  },
]; */

const Index = () => {
  const data = useLoaderData() as { posts: Post[] | undefined };
  console.log(data.posts);

  if (!data) {
    return <div>No posts found</div>;
  }

  return (
    <div className={styles.Index}>
      <ul>
        {Array.isArray(data?.posts) ? (
          data.posts.map((post) => (
            <li key={post.title}>
              <h2>
                {post.title}
                <p>{post.link}</p>
                <p>{post.content}</p>
                <p>{post.createdAt}</p>
                <Link to={`/posts/${post._id}`}>Read more</Link>
                <p>{post._id}</p>
              </h2>
            </li>
          ))
        ) : (
          <div>No data</div>
        )}
      </ul>
      {/* {
       data ? data?.posts?.map((post) => (
          <PostItem post={post} key={post._id} />
        ))
        : <div>no no no</div>
      } */}
      {/*   <Post
        file={mockPost[0].file}
        title={mockPost[0].title}
        author={mockPost[0].author}
        date={mockPost[0].date}
        content={mockPost[0].content}
      />
      <section>
        <Posts posts={mockPosts} />
      </section>
      <Comments>
        {mockComments.map((commentData) => (
          <Comment
            key={commentData.id}
            comment={commentData.comment}
            author={commentData.author}
            date={commentData.date}
            upvote={commentData.upvote}
            downvote={commentData.downvote}
            replies={commentData.replies}
          />
        ))}
      </Comments> */}
    </div>
  );
};

export default Index;
