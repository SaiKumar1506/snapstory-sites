
import { motion, AnimatePresence } from "framer-motion";

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
            <div className="bg-gray-200 py-3 px-4 text-center ui-corner-top">
              <h3 className="font-medium text-gray-800">Status Details</h3>
            </div>
            
            <div className="p-6 text-center ui-corner-bottom ui-content">
              <h2 className="text-2xl font-bold" id="horderno">{orderId}</h2>
              <h2 className="text-xl font-medium" id="hhotelname">{restaurant}</h2>
              <p className="text-gray-600" id="horderon">{date}</p>
              <p className="text-gray-800" id="htotal">Total: {total}</p>
              <p className="text-gray-800" id="hstatus">{status}</p>
              <p className="text-gray-600 mb-4" id="heta">ETA: {eta}</p>
              
              <div className="border-t border-gray-400 pt-4">
                <table className="w-full table-auto ui-table">
                  <thead>
                    <tr className="text-left">
                      <th className="px-2 py-2">Sno</th>
                      <th className="px-2 py-2">Item</th>
                      <th className="px-2 py-2">Price</th>
                      <th className="px-2 py-2">Qty</th>
                      <th className="px-2 py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody id="tbltritem">
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
              type="button"
              id="btnClose"
              className="w-full py-3 bg-blue-700 text-white font-medium hover:bg-blue-600 transition-colors ui-btn ui-btn-b ui-shadow ui-corner-all"
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
