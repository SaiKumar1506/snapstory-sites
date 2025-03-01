
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface OrderCardProps {
  id: string;
  restaurant: string;
  date: string;
  total: number;
  status: string;
  eta: string;
  onClick: () => void;
}

const OrderCard = ({ id, restaurant, date, total, status, eta, onClick }: OrderCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="border-b border-gray-200 py-4 px-4"
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">Order No: {id}</h3>
          <p className="text-sm text-gray-600">Restaurant: {restaurant}</p>
          <p className="text-sm text-gray-600">Order On: {date}</p>
          <p className="text-sm text-gray-600">Total: {total}</p>
          <p className="text-sm text-gray-600">Status: {status}</p>
          <p className="text-sm text-gray-600">ETA: {eta}</p>
        </div>
        <ChevronRight className="text-gray-400 mt-2" size={20} />
      </div>
    </motion.div>
  );
};

export default OrderCard;
