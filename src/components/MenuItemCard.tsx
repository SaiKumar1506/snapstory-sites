
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

interface MenuItemCardProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
}

const MenuItemCard = ({ icon, title, onClick }: MenuItemCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="campus-card flex flex-col items-center justify-center p-5 cursor-pointer"
    >
      <div className="text-campus-orange mb-3">
        {icon}
      </div>
      <h3 className="text-center font-medium">{title}</h3>
    </motion.div>
  );
};

export default MenuItemCard;
