// PostsList.tsx

import Post from '../Post';
import styles from './Posts.module.scss';

interface Post {
  file?: File;
  title: string;
  author: {
    _id: string;
    username: string;
  };
  date: string;
  content: string;
}

interface PostsListProps {
  posts: Post[];
}

const Posts = ({ posts }: PostsListProps) => {
  return (
    <div className={styles['posts-list']}>
      {posts ? (
        posts.map((post, index) => (
          <div key={index} className={styles['post-item']}>
            <Post {...post} />
          </div>
        ))
      ) : (
        <div>No posts yet</div>
      )}
    </div>
  );
};

export default Posts;
