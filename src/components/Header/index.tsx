import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { RiLoginCircleFill } from 'react-icons/ri';

const Header = () => {
  return (
    <div className={styles.header}>
      <h2>Talk pulse</h2>
      <div>
        <Link to='./sign-in'>
          <button className={styles.btn}>
            <RiLoginCircleFill />
          </button>
        </Link>
        <Link to='./sign-up'>
          <button className={styles.btn}>Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
