"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { IoIosCall, IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
interface QuickContactProps {
  size?: string;
}

export function QuickContact({ size = "" }: QuickContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [popupMessage, setPopupMessage] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [loading, setLoading] = useState(false); // State for button loading

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setLoading(true); // Start loading

    const publicKey = "eIoVBimcTeq8Yvt1k";

    emailjs
      .send("service_lod7buo", "template_jp0sodo", formData, publicKey)
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          setPopupMessage("Message sent successfully!");
          setIsPopupVisible(true);
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setPopupMessage("Error sending email. Please try again.");
          setIsPopupVisible(true);
        }
      )
      .finally(() => {
        setLoading(false); // Stop loading

        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setPopupMessage("");
  };

  return (
    <div
      className={`w-[100vw] mx-auto mt-10 p-6 bg-white rounded-xl shadow-xl space-y-4 border-slate-600 text-slate-800 ${
        size === "normal" ? "lg:w-[90vw]" : "lg:w-[30vw]"
      }`}
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Quick Contact
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-custom-primaryblue text-white font-semibold rounded-md shadow-sm hover:bg-custom-secondaryblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-primaryblue flex justify-center items-center"
          disabled={loading} // Disable button when loading
        >
          {loading ? (
            <div className="animate-spin border-2 border-white border-t-transparent rounded-full h-5 w-5"></div>
          ) : (
            "Send"
          )}
        </button>
      </form>

      {isPopupVisible && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg p-6 w-11/12 max-w-md flex flex-col items-center space-y-4">
      {/* Centered Logo */}
      <img src="/logo.png" alt="Logo" />
      
      {/* Popup Message */}
      <p className="text-gray-800 text-center text-lg font-medium">{popupMessage}</p>
      
      {/* Close Button */}
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full"
        onClick={closePopup}
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
}


export default function ContactSection() {
  return (
    <div className=" flex-1 lg:flex ">
      <QuickContact size="normal"/>
      <ContactDetails />
    </div>
  );
}


export function ContactDetails() {
  return (
    <div
      className="w-[90vw] lg:w-[30vw] mx-auto mt-3 p-6 space-y-4 my-4 text-white rounded-xl shadow-lg relative"
      style={{
        backgroundImage: "url('https://i.imgur.com/Vzw5Qy7.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"
        style={{ zIndex: 0 }}
      ></div>

      {/* Content */}
      <h2 className="text-2xl font-semibold relative z-10">
        Have Any Question?
      </h2>
      <p className="text-md relative z-10">
        Do not hesitate to give us a call. We are an expert team and we are
        happy to talk to you.
      </p>
      <p className="text-md flex relative z-10">
        <IoIosCall size={30} className="px-1" /> +94 70 312 9469
      </p>
      <p className="text-md flex relative z-10">
        <IoMail size={30} className="px-1" />
        monkeybirdtravels@gmail.com
      </p>
      <p className="text-md flex relative z-10">
        <IoLogoWhatsapp size={30} className="px-1" /> +94 70 312 9469
      </p>
    </div>
  );
}
