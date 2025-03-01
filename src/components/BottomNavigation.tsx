
import { Home, Info, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center justify-between z-10">
      <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
        <div className="flex flex-col items-center">
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </div>
      </Link>
      
      <Link to="/profile" className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>
        <div className="flex flex-col items-center">
          <Info size={20} />
          <span className="text-xs mt-1">Profile</span>
        </div>
      </Link>
      
      <Link to="/" className="nav-link">
        <div className="flex flex-col items-center">
          <LogOut size={20} />
          <span className="text-xs mt-1">Logoff</span>
        </div>
      </Link>
    </div>
  );
};

export default BottomNavigation;
