import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'shared';
import { Blog, BlogDetails, Home, Info, Login } from 'views';

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
              <p>Router exercise</p>
            </Layout>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="/blog"
            element={isLoggedIn ? <Blog /> : <Navigate to="/login" replace />}
          />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Route>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};
