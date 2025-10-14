// src/components/CartModal.jsx
import React from "react";
import { X } from "lucide-react";

const CartModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/20 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Stop click from closing when user clicks inside */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-3xl p-10 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-5 text-gray-500 hover:text-red-600"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Title */}
        <h1 className="text-5xl font-[cursive] text-[#A20100] mb-10">
          Checkout
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div>
            <h2 className="font-bold text-lg mb-3">SHIPPING DETAILS</h2>
            <p className="text-sm text-gray-700 mb-6">
              Dr. Faustino Donnelly <br />
              63759 Isaiah Well, Erdmanstad, Massachusetts, 83533
              <br />
              315-835-0271
            </p>

            <h2 className="font-bold text-lg mb-3">PAYMENT METHOD</h2>
            <ul className="space-y-3 text-sm">
              <li className="text-[#A20100] font-semibold">GCASH 09********71</li>
              <li>Credit/Debit Card</li>
              <li>Bank Transfer</li>
            </ul>
          </div>

          {/* Right side */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <img
                src="/path-to-your-icecream-image.png"
                alt="Berry Shortcake"
                className="w-24 h-24 rounded-full object-cover mr-6"
              />
              <div>
                <h3 className="text-[#A20100] font-bold text-lg mb-2">
                  BERRY SHORTCAKE DREAM
                </h3>
                <div className="flex items-center gap-3 text-xl">
                  <button className="border px-3 py-1">-</button>
                  <span>2</span>
                  <button className="border px-3 py-1">+</button>
                </div>
                <p className="mt-2 text-sm font-semibold">₱240</p>
              </div>
            </div>

            <div className="border-t border-gray-300 my-4"></div>

            <div className="flex justify-between text-xs mb-2">
              <span className="uppercase">Shipping Fee</span>
              <span>₱40</span>
            </div>

            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>₱520</span>
            </div>

            <button className="bg-[#A20100] text-white py-3 rounded-full text-lg font-semibold hover:bg-[#8b0100] transition-all">
              CHECK OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
