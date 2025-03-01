
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import OrderCard from "@/components/OrderCard";
import OrderDetailsModal from "@/components/OrderDetailsModal";
import BottomNavigation from "@/components/BottomNavigation";
import { motion } from "framer-motion";

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  
  const orders = [
    {
      id: "40597818",
      restaurant: "RAM CAFE (SCAD)",
      date: "Mar 1 2025 10:06AM",
      total: 80,
      status: "Delivered",
      eta: "5 min",
      items: [
        { id: 1, name: "Veg pulao", price: 80, quantity: 1 }
      ]
    },
    {
      id: "41992774",
      restaurant: "RR RESTAURANT - COURTYARD PLAZA - SSE",
      date: "Mar 1 2025 12:49PM",
      total: 80,
      status: "Delivered",
      eta: "5 min",
      items: [
        { id: 1, name: "Veg pulao", price: 80, quantity: 1 }
      ]
    }
  ];
  
  const selectedOrderData = orders.find(order => order.id === selectedOrder);
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-100 pb-20">
        <PageHeader 
          title="Order Status" 
          showBackButton={true} 
          showForwardButton={true} 
        />
        
        <div className="p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            {orders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <OrderCard
                  id={order.id}
                  restaurant={order.restaurant}
                  date={order.date}
                  total={order.total}
                  status={order.status}
                  eta={order.eta}
                  onClick={() => setSelectedOrder(order.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        {selectedOrderData && (
          <OrderDetailsModal
            isOpen={!!selectedOrder}
            onClose={() => setSelectedOrder(null)}
            orderId={selectedOrderData.id}
            restaurant={selectedOrderData.restaurant}
            date={selectedOrderData.date}
            total={selectedOrderData.total}
            status={selectedOrderData.status}
            eta={selectedOrderData.eta}
            items={selectedOrderData.items}
          />
        )}
        
        <BottomNavigation />
      </div>
    </PageTransition>
  );
};

export default Orders;
