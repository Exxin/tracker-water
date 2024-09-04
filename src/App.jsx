import { Suspense } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import HomePage from "./pages/HomePage/HomePage";
import TrackerPage from "./pages/TrackerPage/TrackerPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

import 'modern-normalize';
import { selectIsLoggedIn, selectIsRefreshing } from './redux/auth/selectors';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import SharedLayout from './components/SharedLayout';
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback="loading">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/tracker" element={<TrackerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
