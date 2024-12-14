import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // If you're using react-icons

const WhatsAppIcon = () => {
  return (
    <div className="fixed bottom-5 right-5 flex items-center  text-black shadow-lg">
      <span className="mr-2 bg-white  rounded-full px-2">Need Help? Chat with us</span>
      <a
        href="https://wa.me/94725721428"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="bg-green-500 text-white p-3 rounded-full"
      >
        <FaWhatsapp size={35} />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
