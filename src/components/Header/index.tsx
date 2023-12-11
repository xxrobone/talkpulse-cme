import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { RiLoginCircleFill } from 'react-icons/ri';
import Logo from '../../logo/Logo';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
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
