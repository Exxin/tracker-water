import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import HomePage from "./pages/HomePage/HomePage";
import TrackerPage from "./pages/TrackerPage/TrackerPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Suspense fallback="loading">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
