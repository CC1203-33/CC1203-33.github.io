import { Outlet } from 'react-router-dom';
import WhatsAppFloat from './WhatsAppFloat';

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Outlet />
      <WhatsAppFloat />
    </div>
  );
}
