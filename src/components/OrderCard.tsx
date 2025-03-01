
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
      className="border-b border-gray-200 ui-btn ui-btn-icon-right ui-icon-carat-r"
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div className="w-full">
          <h1 className="font-medium text-base">Order No: {id}</h1>
          <p className="text-sm text-gray-600"><strong>Restaurant: {restaurant}</strong></p>
          <p className="text-sm text-gray-600"><strong>Order On: {date}</strong></p>
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
