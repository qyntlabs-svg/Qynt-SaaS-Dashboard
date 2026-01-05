import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="pl-60">
        <TopBar />
        <main className="p-8 pt-24">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
