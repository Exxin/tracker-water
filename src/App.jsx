import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { refreshUser } from '../redux/auth/operations';
// import { selectIsLoggedIn } from '../redux/auth/selectors';
import 'modern-normalize';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';

import 'modern-normalize';
import { selectIsLoggedIn, selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // return (
  // );
};
