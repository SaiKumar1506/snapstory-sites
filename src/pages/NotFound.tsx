
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-6xl font-bold text-campus-orange mb-6">404</h1>
        <p className="text-xl text-gray-800 mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Button 
          onClick={() => navigate("/")}
          className="bg-campus-orange hover:bg-campus-orange/90 text-white"
        >
          Return to Home
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
