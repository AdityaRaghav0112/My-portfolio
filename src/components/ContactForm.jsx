import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d1117]">
      <form className="bg-[#111827] p-8 rounded-2xl shadow-xl w-[22rem] flex flex-col space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent border border-gray-600 rounded-lg p-2.5 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent border border-gray-600 rounded-lg p-2.5 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-transparent border border-gray-600 rounded-lg p-2.5 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full bg-transparent border border-gray-600 rounded-lg p-2.5 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
