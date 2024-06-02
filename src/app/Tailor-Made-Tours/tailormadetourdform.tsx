import React from 'react';

export default function TailorMadeTours() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-xl space-y-4 border-slate-600 text-gray-700 lg:w-[60vw] w-screen lg:mx-10 mx-auto">
      <h2 className="text-2xl font-bold text-center text-white bg-custom-primaryblue">PERSONAL INFORMATION</h2>
      <form className="space-y-4">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country *</label>
            <input
              type="text"
              id="country"
              name="country"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
              required
            />
          </div>
          <div>
            <label htmlFor="arrival-date" className="block text-sm font-medium text-gray-700">Arrival Date</label>
            <input
              type="date"
              id="arrival-date"
              name="arrival-date"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
            />
          </div>
          <div>
            <label htmlFor="departure-date" className="block text-sm font-medium text-gray-700">Departure Date</label>
            <input
              type="date"
              id="departure-date"
              name="departure-date"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
            />
          </div>
          <div>
            <label htmlFor="adults" className="block text-sm font-medium text-gray-700">No of Adults *</label>
            <input
              type="number"
              id="adults"
              name="adults"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
              required
            />
          </div>
          <div>
            <label htmlFor="kids" className="block text-sm font-medium text-gray-700">No of Kids</label>
            <input
              type="number"
              id="kids"
              name="kids"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
            />
          </div>
        </div>

        <fieldset className="space-y-2">
          <legend className="text-sm font-semibold text-gray-700">TRAVEL PREFERENCE</legend>
          <div className="grid grid-cols-2 gap-2">
            <label className="flex items-center">
              <input type="checkbox" name="nature" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Nature</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="wildlife" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Wildlife</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="adventure" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Adventure</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="cultural-heritage" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Cultural and Heritage</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="honeymoon" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Honeymoon</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="business" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Business</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="wellness" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Wellness</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="holiday-leisure" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Holiday - Leisure</span>
            </label>
          </div>
        </fieldset>

        <fieldset className="space-y-2">
          <legend className="text-sm font-semibold text-gray-700">THINGS TO DO :</legend>
          <div className="grid grid-cols-2 gap-2">
            <label className="flex items-center">
              <input type="checkbox" name="safari" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Safari</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="train-journey" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Train Journey</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="trekking" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Trekking</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="hiking" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Hiking</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="turtles-watching" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Turtles Watching</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="hot-air-ballooning" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Hot Air Ballooning</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="kite-surfing" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Kite Surfing</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="yoga" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Yoga</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="ayurveda" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Ayurveda</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="snorkeling-diving" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Snorkeling & Diving</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="dolphine-watching" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Dolphine Watching</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="whales-watching" className="h-4 w-4 text-custom-primaryblue border-gray-300 rounded focus:ring-custom-primaryblue" />
              <span className="ml-2">Whales Watching</span>
            </label>
          </div>
        </fieldset>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Already have a Plan? Send us
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H8a4 4 0 00-4 4v28a4 4 0 004 4h28a4 4 0 004-4V20l-12-12z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 8v12h12"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-custom-primaryblue hover:text-custom-secondaryblue focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-custom-primaryblue"
                  >
                    <span>Click or drag a file to this area to upload</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".doc,.docx,.xls,.xlsx,.pdf,.jpg,.jpeg,.png"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">
                  (Only Supports Microsoft Word, Excel, PDF, JPEG, and PNG files)
                </p>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="special-note" className="block text-sm font-medium text-gray-700">Special Note or Request</label>
            <textarea
              id="special-note"
              name="special-note"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-primaryblue focus:border-custom-primaryblue"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-custom-primaryblue text-white font-semibold rounded-md shadow-sm hover:bg-custom-secondaryblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-primaryblue"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
