import { Link, useFetcher } from 'react-router-dom';
import styles from './Header.module.scss';
import { RiLoginCircleLine, RiLogoutCircleLine, } from 'react-icons/ri';
import Logo from '../../logo/Logo';
import auth from '../../lib/auth';
/* import Logo2 from '../Logo2/Logo2'; */

const Header = () => {
  const isAuthenticated = auth.isSignedIn();
  const fetcher = useFetcher();
  return (
    <div className={styles.header}>
      <Logo />
      <div>
        {isAuthenticated ? (
          <fetcher.Form method='post' action='/sign-out'>
            <button type='submit' className={styles.btn}>
            <RiLogoutCircleLine />
            </button>
          </fetcher.Form>
        ) : (
          <>
            <Link to='./sign-in'>
              <button className={styles.btn}>
                <RiLoginCircleLine />
              </button>
            </Link>
            <Link to='./sign-up'>
              <button className={styles.btn}>Sign up</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
