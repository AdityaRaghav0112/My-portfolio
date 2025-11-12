import React, { useCallback } from "react";
import { Mail, Instagram, Linkedin, Github} from "lucide-react";
import ProfileCard from "../elements/ProfileCard";
import TargetCursor from "./TargetCursor";
// import ContactForm from "./ContactForm"; // Optional if you plan to re-enable

const Contact = () => {
  const handleClick = useCallback(() => {
    window.open("https://mail.google.com/mail/u/0/#inbox");
  }, []);

  return (
    <div className="text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 gap-6 mt-20 bg-blue-950/50 h-screen">
      {/* Section Heading */}

      <div className="flex flex-col items-center">
        <h1 className="text-white items-center font-semibold text-3xl sm:text-4xl md:text-5xl cursor-target">
          Get in Touch
        </h1>
        <p className="text-gray-400 font-medium text-sm sm:text-base md:text-lg max-w-2xl mt-5">
          I'm always open to discussing new projects, creative ideas or
          opportunities. Feel free to reach out.
        </p>
      </div>

      {/* Contact Information */}
      <h2 className="text-white font-semibold text-lg sm:text-xl mt-5">
        Contact Information
      </h2>

      <div className="socials flex flex-col sm:flex-row justify-evenly items-start sm:items-center gap-10 mt-10">
        {/* Social Section */}
        <div className="flex flex-col items-center sm:items-start gap-6">
          <div>
            <ProfileCard
              name="@AdityaRaghav"
              tag="Instagram"
              avatarUrl="../../profile.jpg"
              addr="https://www.instagram.com/adityaraghav65/"
            />
          </div>
        </div>

        {/* Email Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* <button onClick={handleClick}>
            <Mail className="text-white size-10 hover:border-2 hover:border-blue-400 hover:scale-110 transition-transform bg-blue-950 p-2 rounded-lg" />
          </button>
          <div className="text-center sm:text-left">
            <h5 className="text-white font-semibold text-base sm:text-lg">
              Email
            </h5>
            <p className="text-gray-400 text-sm sm:text-base">
              adityaraghav239@gmail.com
            </p>
          </div> */}

          <div className="grid grid-cols-3 grid-rows-2 gap-5">
            <TargetCursor
              spinDuration={2}
              hideDefaultCursor={true}
              parallaxOn={true}
            />

            
            <button className="row-span-1 col-span-1 cursor-target text-white bg-pink-500 p-3 rounded-3xl"><Instagram className="size-20"/></button>
            <button className="row-span-1 col-span-1 cursor-target text-white bg-blue-500 p-3 rounded-3xl"><Linkedin className="size-20"/></button>
            <button className="row-span-1 col-span-1 cursor-target text-white bg-gray-900 p-3 rounded-3xl"><Github className="size-20"/></button>
            <button className="row-span-1 col-span-3 cursor-target text-white p-3 rounded-3xl text-2xl"> adityaraghav239@gmail.com</button>
          </div>
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
