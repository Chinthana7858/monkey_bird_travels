import React, { useState } from "react";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  arrivalDate: string;
  departureDate: string;
  adults: string;
  kids: string;
}

export default function TailorMadeTours() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    country: "",
    arrivalDate: "",
    departureDate: "",
    adults: "",
    kids: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const publicKey = "eIoVBimcTeq8Yvt1k";
    const serviceID = "service_lod7buo";
    const templateID = "template_in4jpco";

    emailjs
      .send(
        serviceID,
        templateID,
        formData as unknown as Record<string, unknown>,
        publicKey
      )
      .then(
        () => {
          setPopupMessage("Details sent successfully!");
          setIsPopupVisible(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            country: "",
            arrivalDate: "",
            departureDate: "",
            adults: "",
            kids: "",
          });
        },
        () => {
          setPopupMessage("Error sending email. Please try again.");
          setIsPopupVisible(true);
        }
      )
      .finally(() => setIsSending(false));
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setPopupMessage("");
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-xl space-y-4 border-slate-600 text-gray-700 lg:w-[60vw] w-screen lg:mx-10 mx-auto">
      <h2 className="text-2xl font-bold text-center text-white bg-custom-primaryblue">
        PERSONAL INFORMATION
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name *
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
              Email *
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
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country *
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
              required
            />
          </div>
          <div>
            <label
              htmlFor="arrival-date"
              className="block text-sm font-medium text-gray-700"
            >
              Arrival Date
            </label>
            <input
              type="date"
              id="arrival-date"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
            />
          </div>
          <div>
            <label
              htmlFor="departure-date"
              className="block text-sm font-medium text-gray-700"
            >
              Departure Date
            </label>
            <input
              type="date"
              id="departure-date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
            />
          </div>
          <div>
            <label
              htmlFor="adults"
              className="block text-sm font-medium text-gray-700"
            >
              No of Adults *
            </label>
            <input
              type="number"
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
              required
            />
          </div>
          <div>
            <label
              htmlFor="kids"
              className="block text-sm font-medium text-gray-700"
            >
              No of Kids
            </label>
            <input
              type="number"
              id="kids"
              name="kids"
              value={formData.kids}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isSending}
          className="w-full py-2 px-4 bg-custom-primaryblue text-white font-semibold rounded-md shadow-sm hover:bg-custom-secondaryblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-primaryblue"
        >
          {isSending ? "Sending..." : "Submit"}
        </button>
      </form>
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md flex flex-col items-center">
            <img src="/logo.png" alt="Logo" className="mx-auto mb-4" />

            <p className="text-gray-800 text-center">{popupMessage}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full"
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
