
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();

  // Auto-redirect to login after splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-white shadow-lg"
        >
          <img 
            src="/lovable-uploads/2a8636e3-1efe-4b96-a6d9-5ed633c5f441.png" 
            alt="Campus Food Logo" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-3xl font-bold text-campus-orange mb-3"
        >
          Campus Food
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-lg text-gray-600"
        >
          Order delicious meals from your campus restaurants
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Index;
