import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Params {
  username?: string;
  token?: string;
  [key: string]: string | undefined;
}

const Verification: React.FC = () => {
  const { username, token } = useParams<Params>();
  const [isValid, setIsValid] = useState(false);

  const verifyEmailToken = async (
    username: string | undefined,
    emailToken: string | undefined
  ) => {
    console.log('testing');
    const usernameAndToken = {
      username: username,
      emailToken: emailToken,
    };

    try {
      const response = await axios.post(
        import.meta.env.VITE_SERVER_URL + '/verification',
        usernameAndToken
      );

      const responseStatus = response.data.status;
      if (!responseStatus.ok) {
        return;
      }

      setIsValid(true);
    } catch (error) {
      console.error('Error during verification:', error);
    }
  };

  useEffect(() => {
    verifyEmailToken(username, token);
  }, [username, token]);

  return (
    <div>
      {isValid ? (
        <div>
          Email has been verified. You can now sign in{' '}
          <Link to='/sign-in'>Sign in</Link>
        </div>
      ) : (
        <div>Please check your email for verification</div>
      )}
    </div>
  );
};

export default Verification;
