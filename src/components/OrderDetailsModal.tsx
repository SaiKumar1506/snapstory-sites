
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface OrderDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
  restaurant: string;
  date: string;
  total: number;
  status: string;
  eta: string;
  items: OrderItem[];
}

const OrderDetailsModal = ({
  isOpen,
  onClose,
  orderId,
  restaurant,
  date,
  total,
  status,
  eta,
  items
}: OrderDetailsModalProps) => {
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white w-[90%] max-w-md rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gray-200 py-3 px-4 text-center">
              <h3 className="font-medium text-gray-800">Status Details</h3>
            </div>
            
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">{orderId}</h2>
              <h3 className="text-xl font-medium mb-1">{restaurant}</h3>
              <p className="text-gray-600 mb-2">{date}</p>
              <p className="text-gray-800 mb-1">Total: {total}</p>
              <p className="text-gray-800 mb-6">{status}</p>
              <p className="text-gray-600 mb-6">ETA: {eta}</p>
              
              <div className="border-t border-gray-200 pt-4">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-left">
                      <th className="px-2 py-2">Sno</th>
                      <th className="px-2 py-2">Item</th>
                      <th className="px-2 py-2">Price</th>
                      <th className="px-2 py-2">Qty</th>
                      <th className="px-2 py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="px-2 py-2">{item.id}</td>
                        <td className="px-2 py-2">{item.name}</td>
                        <td className="px-2 py-2">{item.price}</td>
                        <td className="px-2 py-2">{item.quantity}</td>
                        <td className="px-2 py-2">{item.price * item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <button
              className="w-full py-3 bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors"
              onClick={onClose}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderDetailsModal;
