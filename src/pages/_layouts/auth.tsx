import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div>
      <h1>autenticação</h1>

      <div><Outlet /></div>
    </div>
  );
}