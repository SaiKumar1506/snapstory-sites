
import { motion } from "framer-motion";

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
      className="campus-card flex flex-col items-center justify-center p-4 rounded-lg bg-white shadow-md cursor-pointer h-32"
    >
      <div className="mb-2">
        {icon}
      </div>
      <h3 className="text-center text-sm font-medium text-gray-800">{title}</h3>
    </motion.div>
  );
};

export default MenuItemCard;
