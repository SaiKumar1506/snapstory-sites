
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  showBackButton?: boolean;
  showForwardButton?: boolean;
}

const PageHeader = ({ 
  title, 
  showBackButton = false, 
  showForwardButton = false 
}: PageHeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gray-200 py-3 px-4 flex items-center justify-between sticky top-0 z-10">
      <div className="w-8">
        {showBackButton && (
          <button 
            onClick={() => navigate(-1)} 
            className="p-1 rounded-full hover:bg-gray-300 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
        )}
      </div>
      
      <h1 className="text-lg font-medium text-center">{title}</h1>
      
      <div className="w-8">
        {showForwardButton && (
          <button 
            onClick={() => navigate(1)} 
            className="p-1 rounded-full hover:bg-gray-300 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
