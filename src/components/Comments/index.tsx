import { ReactNode } from 'react';
import styles from './Comments.module.scss'

type CommentsType = {
  children: ReactNode;
};
const Comments = ({ children }: CommentsType) => {
  return (
    <section className={styles.comments}>
      <h3>Comments</h3>
      {children}
    </section>
  );
};

export default Comments;
