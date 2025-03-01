
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  const [indicatorActive, setIndicatorActive] = useState(false);
  
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
              <h2 className="text-2xl font-bold" id="horderno">{orderId}</h2>
              <h2 className="text-xl font-medium" id="hhotelname">{restaurant}</h2>
              <p className="text-gray-600" id="horderon">{date}</p>
              <p className="text-gray-800" id="htotal">Total: {total}</p>
              <p className="text-gray-800" id="hstatus">{status}</p>
              <p className="text-gray-600 mb-4" id="heta">ETA: {eta}</p>
              
              <div className="border-t border-gray-300 pt-4 mt-2 relative">
                {/* Indicator element that changes from white to blue when clicked */}
                <div 
                  className="absolute right-0 top-14 w-8 h-8 rounded-sm cursor-pointer"
                  style={{ 
                    backgroundColor: indicatorActive ? '#1E88E5' : 'white',
                    boxShadow: indicatorActive ? '0 2px 4px rgba(0, 0, 0, 0.2)' : '0 1px 2px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e0e0e0'
                  }}
                  onClick={() => setIndicatorActive(!indicatorActive)}
                />

                <table className="w-full table-auto mt-4">
                  <thead>
                    <tr className="text-left border-b border-gray-200">
                      <th className="px-2 py-2 font-medium">Sno</th>
                      <th className="px-2 py-2 font-medium">Item</th>
                      <th className="px-2 py-2 font-medium">Price</th>
                      <th className="px-2 py-2 font-medium">Qty</th>
                      <th className="px-2 py-2 font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody id="tbltritem">
                    {items.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100">
                        <td className="px-2 py-3">{item.id}</td>
                        <td className="px-2 py-3">{item.name}</td>
                        <td className="px-2 py-3">{item.price}</td>
                        <td className="px-2 py-3">{item.quantity}</td>
                        <td className="px-2 py-3">{item.price * item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <button
              type="button"
              id="btnClose"
              className="w-full py-3 bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors mt-4"
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
