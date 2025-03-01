
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import RestaurantCard from "@/components/RestaurantCard";
import BottomNavigation from "@/components/BottomNavigation";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const restaurants = [
    {
      id: "1",
      name: "LES CROSSIANTS SIMATS ENGINEERING",
      location: "Thandalam campus",
      foodTypes: "VEG AND NON VEG"
    },
    {
      id: "2",
      name: "ANDHRA MESS SIMATS ENGINEERING",
      location: "Thandalam campus",
      foodTypes: "VEG & NON-VEG"
    },
    {
      id: "3",
      name: "OM MALAN DHABA SIMATS ENGINEERING",
      location: "Thandalam campus",
      foodTypes: "VEG & NON-VEG"
    },
    {
      id: "4",
      name: "SRI MADURAI VEERAN MESS SIMATS",
      location: "Thandalam campus",
      foodTypes: "VEG & NON-VEG"
    },
    {
      id: "5",
      name: "FOODIE HUB SIMATS ENGINEERING",
      location: "Thandalam campus",
      foodTypes: "VEG & NON-VEG"
    },
    {
      id: "6",
      name: "SEC FOODIE HUB",
      location: "Thandalam campus",
      foodTypes: "VEG & NON-VEG"
    }
  ];
  
  const filteredRestaurants = restaurants.filter(restaurant => 
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-100 pb-20">
        <PageHeader 
          title="List Of Restaurants" 
          showBackButton={true} 
          showForwardButton={true} 
        />
        
        <div className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            {filteredRestaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <RestaurantCard
                  id={restaurant.id}
                  name={restaurant.name}
                  location={restaurant.location}
                  foodTypes={restaurant.foodTypes}
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        <BottomNavigation />
      </div>
    </PageTransition>
  );
};

export default Restaurants;
