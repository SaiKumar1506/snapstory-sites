
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";
import MenuItemCard from "@/components/MenuItemCard";
import PageTransition from "@/components/PageTransition";
import { ClipboardList, Utensils, Tag, DollarSign, FileText, UserCircle } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(1.5);
  
  const menuItems = [
    { 
      icon: <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
        <Utensils size={24} className="text-white" />
      </div>, 
      title: "Food Courts", 
      action: () => navigate("/restaurants")
    },
    { 
      icon: <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center relative">
        <Tag size={24} className="text-white" />
        <span className="absolute -top-1 -right-1 bg-white text-red-600 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs border-2 border-red-600">4</span>
      </div>, 
      title: "Offers", 
      action: () => navigate("/offers") 
    },
    { 
      icon: <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
        <Utensils size={24} className="text-white" />
      </div>, 
      title: "Restaurants", 
      action: () => navigate("/restaurants") 
    },
    { 
      icon: <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
        <ClipboardList size={24} className="text-white" />
      </div>, 
      title: "Order Status", 
      action: () => navigate("/orders") 
    },
    { 
      icon: <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
        <DollarSign size={24} className="text-white" />
      </div>, 
      title: "Add Cash", 
      action: () => navigate("/add-cash") 
    },
    { 
      icon: <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
        <FileText size={24} className="text-white" />
      </div>, 
      title: "Feedback", 
      action: () => navigate("/feedback") 
    },
    { 
      icon: <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
        <FileText size={24} className="text-white" />
      </div>, 
      title: "Reports", 
      action: () => navigate("/reports")  
    },
    { 
      icon: <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
        <UserCircle size={24} className="text-white" />
      </div>, 
      title: "My Profile", 
      action: () => navigate("/profile") 
    },
  ];
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-100 pb-20">
        <div className="bg-gray-200 py-2 px-4 text-center">
          <h1 className="text-lg font-medium">Home</h1>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-campus-orange text-white py-2 px-4 text-center"
        >
          <p className="font-medium">Available Amount: {balance}</p>
        </motion.div>
        
        <div className="p-3 grid grid-cols-2 gap-3">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <MenuItemCard 
                icon={item.icon}
                title={item.title}
                onClick={item.action}
              />
            </motion.div>
          ))}
        </div>
        
        <BottomNavigation />
      </div>
    </PageTransition>
  );
};

export default Dashboard;
