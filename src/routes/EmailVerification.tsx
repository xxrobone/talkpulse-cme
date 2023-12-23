import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const EmailVerification: React.FC = () => {
  const params = useParams<string>();
  const [isValid, setIsValid] = useState(false);

  const verifyEmail = (username: string, token: string) => {
    console.log(
      `username ${username} + token: ${token}, just for testing purpose`
    );
    const usernameAndToken = {
      username: username,
      token: token,
    };
    axios
      .post(
        `${import.meta.env.VITE_SERVER_URL}/verifyAccount`,
        usernameAndToken
      )
      .then((resp) => {
        const responseStatus = resp.data.status;
        if (!responseStatus) {
          return;
        }
        setIsValid(true);
      });
  };

  useEffect(() => {
    if (params && params.username && params.token) {
      verifyEmail(params.username, params.token);
    }
  }, [params]);

  return (
    <div>
      {isValid ? (
        <div>
          <p>Email has been verified</p>
          <br />
          <Link to='/sign-in'>Go to Sign In</Link>
        </div>
      ) : (
        <div>
          <p>
            Could not verify your account: email or token is no longer valid
          </p>
        </div>
      )}
    </div>
  );
};

export default EmailVerification;
