"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { IoIosCall, IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";

interface QuickContactProps {
  size?: string;
}
export function QuickContact({ size = "" }: QuickContactProps ) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs.send("service_lod7buo", "template_jp0sodo", formData).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Email sent successfully!");
      },
      (error) => {
        console.error("Error sending email:", error.text);
        alert("Error sending email.");
      }
    );

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={`w-[100vw] mx-auto mt-10 p-6 bg-white rounded-xl shadow-xl space-y-4 border-slate-600 text-slate-800 ${size === 'normal' ? 'lg:w-[90vw]' : 'lg:w-[30vw]'}`}>
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
          className="w-full py-2 px-4 bg-custom-primaryblue text-white font-semibold rounded-md shadow-sm hover:bg-custom-secondaryblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-primaryblue"
        >
          Send
        </button>
      </form>
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
        className="w-[90vw] lg:w-[30vw] mx-auto mt-3 p-6 space-y-4 my-4 text-white rounded-xl shadow-lg"
        style={{
          backgroundImage: "url('https://i.imgur.com/0Onzutl.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="text-2xl font-semibold">Have Any Question?</h2>
        <p className="text-md">
          Do not hesitate to give us a call. We are an expert team and we are happy to talk to you.
        </p>
        <p className="text-md flex">
        <IoIosCall size={30} className=" px-1"/> +94 711700404
        </p>
        <p className="text-md flex">
        <IoMail size={30} className=" px-1"/>info@srilankalaktraveldestination.com
        </p>
        <p className="text-md flex">
        <IoLogoWhatsapp size={30} className=" px-1"/>+94 711700404
        </p>
      </div>
    );
  }