import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'shared';
import { Home, Info, Login } from 'views';

export const App: React.FC = () => {
  const [isLoggedIn, setIsLogggedIn] = useState<boolean>(false);

  function onLogin() {
    setIsLogggedIn(!isLoggedIn);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout onLogin={() => onLogin()}>
              <p>TODO: Add react router</p>
            </Layout>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/blog" element={<Login />} />
        </Route>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};
