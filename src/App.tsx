import { useState } from 'react';
import { Layout } from 'shared';

export const App: React.FC = () => {
  const [isLoggedIn, setIsLogggedIn] = useState<boolean>(false);

  function onLogin() {
    setIsLogggedIn(!isLoggedIn);
  }

  return (
    <Layout onLogin={() => onLogin()}>
      <p>TODO: Add react router</p>
    </Layout>
  );
};
