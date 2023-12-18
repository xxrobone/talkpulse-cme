import React from 'react';
import styles from './Post.module.scss';

// This component should both accept files and links as images

interface PostProps {
  file?: File | string; 
  title: string;
  author: {
    _id: string;
    username: string;
  };
  date: string;
  content: string;
  link?: string;
}

const Post: React.FC<PostProps> = ({ file, title, author, date, content }) => {
  const isImage = typeof file === 'string' || /\.(jpe?g|png|gif|bmp|webp)$/i.test((file as File)?.name || '');

  return (
    <div className={styles.post}>
      <div className={styles['media-container']}>
        {file && (
          <div className={styles.media}>
            {isImage ? (
              <img src={typeof file === 'string' ? file : URL.createObjectURL(file as File)} alt="Post Media" />
            ) : (
              <video controls>
                <source src={typeof file === 'string' ? file : URL.createObjectURL(file as File)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
      </div>
      <div className={styles['post-info']}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.metadata}>
          <span className={styles.username}>{author?.username}</span>
          <span className={styles.date}>{date}</span>
        </div>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default Post;
