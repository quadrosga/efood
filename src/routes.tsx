import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Profile from './pages/Profile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
