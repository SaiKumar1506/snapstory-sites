
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "Error",
        description: "Please enter both username and password",
        variant: "destructive",
      });
      return;
    }
    
    // For demo purposes, any login works
    navigate("/dashboard");
    toast({
      title: "Success",
      description: "Login successful!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="w-full max-w-md mx-auto p-6 flex-grow flex flex-col">
        <div className="text-center text-campus-orange mt-6 mb-8">
          <h1 className="text-lg">Welcome to campus.food</h1>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-6"
        >
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src="/lovable-uploads/2a8636e3-1efe-4b96-a6d9-5ed633c5f441.png" 
                alt="Campus Food Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-4">
              Don't have an account? Contact admin to create a new account.
            </p>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                User Name
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-input"
                placeholder="User Name"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-input"
                placeholder="Password"
              />
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <a href="#" className="text-campus-blue text-sm hover:underline">
                Forgot your password?
              </a>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-campus-green text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Login
            </motion.button>
          </form>
          
          <div className="mt-6 text-center">
            <button 
              onClick={() => navigate("/signup")}
              className="bg-campus-orange text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Create User Login Here
            </button>
          </div>
        </motion.div>
      </div>
      
      <footer className="py-4 text-center text-sm text-gray-600">
        <p>Copyright © 2024 | Campus Food | Disclaimer | Privacy Policy</p>
      </footer>
    </div>
  );
};

export default Login;
