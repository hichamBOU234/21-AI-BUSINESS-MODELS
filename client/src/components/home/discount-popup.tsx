import { useEffect } from "react";
import { scrollToElement } from "@/lib/utils";

interface DiscountPopupProps {
  onClose: () => void;
}

const DiscountPopup = ({ onClose }: DiscountPopupProps) => {
  // Close popup when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleClaimDiscount = () => {
    onClose();
    scrollToElement('buy');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={handleOverlayClick}>
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl p-6 sm:p-8 relative max-w-md w-full z-10">
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <i className="fas fa-times text-xl"></i>
        </button>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-5">
            <i className="fas fa-percentage text-blue-400 text-2xl"></i>
          </div>
          <h3 className="font-poppins font-bold text-2xl text-white mb-3">Special Offer Inside!</h3>
          <p className="text-gray-300 mb-6">
            Want to save 10% on your purchase today? Use this exclusive discount code:
          </p>
          <div className="bg-black border-2 border-dashed border-blue-600 rounded-md py-3 px-4 mb-6">
            <span className="font-bold text-xl text-blue-400">SAVE10</span>
          </div>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full py-3 rounded-md shadow-lg hover:shadow-blue-900/30 hover:shadow-xl transition-all text-center block"
            onClick={handleClaimDiscount}
          >
            Claim Your Discount
          </button>
          <p className="text-gray-400 text-sm mt-4">
            *Limited time offer. Apply at checkout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;
