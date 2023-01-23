import { ContactsPage, LoginPage, NotFoundPage, RegisterPage } from 'pages';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { selectIsFetchingCurrentUser } from 'redux/auth/authSelectors';
import { PrivateRoute } from './HOCs/PrivateRoute';
import { PublicRoute } from './HOCs/PublicRoute';
import { Layout } from './Layout/Layout';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        {!isFetchingCurrentUser && (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PrivateRoute>
                    <Navigate to="/contacts" />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="*"
                element={
                  <PublicRoute>
                    <NotFoundPage />
                  </PublicRoute>
                }
              />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};
