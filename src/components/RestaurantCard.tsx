
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RestaurantCardProps {
  id: string;
  name: string;
  location: string;
  foodTypes: string;
}

const RestaurantCard = ({ id, name, location, foodTypes }: RestaurantCardProps) => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      className="border-b border-gray-200 py-3 px-4"
      onClick={() => navigate(`/restaurant/${id}`)}
    >
      <div className="flex items-center">
        <div className="w-12 h-12 bg-campus-green rounded-md flex-shrink-0 overflow-hidden">
          <div className="w-full h-3/5 bg-campus-green"></div>
          <div className="w-full h-2/5 bg-campus-orange flex items-center justify-center">
            <div className="w-1/3 h-2/3 bg-campus-dark mx-1"></div>
            <div className="w-1/3 h-2/3 bg-campus-dark mx-1"></div>
          </div>
        </div>
        
        <div className="ml-4 flex-grow">
          <h3 className="font-medium text-campus-dark truncate">{name}</h3>
          <p className="text-sm text-gray-600">Location: {location}</p>
          <p className="text-sm text-gray-600">Food Types: {foodTypes}</p>
        </div>
        
        <ChevronRight className="text-gray-400" size={20} />
      </div>
    </motion.div>
  );
};

export default RestaurantCard;
