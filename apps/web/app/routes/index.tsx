import { Outlet } from '@remix-run/react'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    <Outlet />
    </div>
  );
};

export default Home;
