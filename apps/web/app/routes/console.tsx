import { Outlet } from '@remix-run/react'
const Console = () => {
  return (
    <div>
      <h1>Console</h1>
    <Outlet />
    </div>
  );
};

export default Console;
