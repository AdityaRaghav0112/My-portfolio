import React, { useCallback } from "react";
import { Mail } from "lucide-react";
import ProfileCard from "../elements/ProfileCard";
// import ContactForm from "./ContactForm"; // Optional if you plan to re-enable

const Contact = () => {
  const handleClick = useCallback(() => {
    window.open("https://mail.google.com/mail/u/0/#inbox");
  }, []);

  return (
    <div
      className="
        text-center 
        flex 
        flex-col 
        items-center 
        px-4 
        sm:px-8 
        md:px-16 
        lg:px-24 
        xl:px-32 
        py-12 
        gap-6
      "
    >
      {/* Section Heading */}
      <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl">
        Get in Touch
      </h1>
      <p className="text-gray-400 font-medium text-sm sm:text-base md:text-lg max-w-2xl">
        I'm always open to discussing new projects, creative ideas or
        opportunities. Feel free to reach out.
      </p>

      {/* Contact Information */}
      <div className="mt-10 flex flex-col items-center gap-6">
        <h2 className="text-white font-semibold text-lg sm:text-xl">
          Contact Information
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
          <button onClick={handleClick}>
            <Mail className="text-white size-10 hover:border-2 hover:border-blue-400 hover:scale-110 transition-transform bg-blue-950 p-2 rounded-lg" />
          </button>
          <div className="text-center sm:text-left">
            <h5 className="text-white font-semibold text-base sm:text-lg">
              Email
            </h5>
            <p className="text-gray-400 text-sm sm:text-base">
              adityaraghav239@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Social Section */}
      <div className="mt-10 w-full flex flex-col items-center gap-6">
        <h2 className="text-white font-semibold text-lg sm:text-xl">
          Connect with me
        </h2>

        <div
          className="
            flex 
            flex-wrap 
            justify-center 
            items-center 
            gap-6 
            sm:gap-8 
            md:gap-10 
            mt-4 
            pb-10 
            w-full
          "
        >
          <ProfileCard
            name="@AdityaRaghav"
            tag="Instagram"
            avatarUrl="../../profile.jpg"
            addr="https://www.instagram.com/adityaraghav65/"
          />
          <ProfileCard
            name="Aditya Raghav"
            tag="LinkedIn"
            avatarUrl="../../profile2.jpg"
            addr="https://www.linkedin.com/in/aditya-raghav-958247259"
          />
          <ProfileCard
            name="AdityaRaghav0112"
            tag="GitHub"
            avatarUrl="../../profile3.png"
            addr="https://github.com/AdityaRaghav0112"
          />
        </div>
      </div>

      {/* Optional Contact Form */}
      {/* <div className="mt-10 w-full max-w-3xl">
        <ContactForm />
      </div> */}
    </div>
  );
};

export default Contact;
