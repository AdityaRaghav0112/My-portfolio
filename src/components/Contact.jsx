import React, { useCallback } from "react";
import ContactForm from "./ContactForm";
import { Mail } from "lucide-react";
import ProfileCard from "../elements/ProfileCard";

const Contact = () => {
    const handleClick = useCallback(()=>{
        onclick?.();
        window.open("https://mail.google.com/mail/u/0/#inbox")
    }, [onclick])
  return (
    <div className="text-center mx-[10rem] gap-5">
      <div className="item1 h-[40rem]">
        <h1 className="text-white font-semibold text-5xl py-2">Get in Touch</h1>
        <p className="text-gray-400 font-semibold py-3">
          I'm always open to discussing new projects, creative ideas or
          opportunities. Feel free to reach out.
        </p>
        <h2 className="text-white font-semibold text-xl py-2 mt-8">
          Contact Information
        </h2>
        <div className="flex items-center justify-center gap-3 mt-10">
          <button onClick={handleClick}><Mail className="text-white size-10 hover:border-2 hover:border-blue-400 hover:scale-120 duration-100 bg-blue-950 p-1 rounded-lg" /></button>
          <div>
            <h5 className="text-white">Email</h5>
            <p className="text-gray-400 text-sm">adityaraghav239@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-white font-semibold text-xl mt-10">
            Contact with me
          </h2>
        </div>
        <div className="flex justify-center items-center mt-5 overflow-visible gap-10 pb-10">
          <ProfileCard name={'@AdityaRaghav'} tag="Instagram" avatarUrl={'../../profile.jpg'}  addr="https://www.instagram.com/adityaraghav65/"/>
          <ProfileCard name={'Aditya Raghav'} tag="Linkedin" avatarUrl={'../../profile2.jpg'} addr="https://www.linkedin.com/in/aditya-raghav-958247259"/>
          <ProfileCard name={'AdityaRaghav0112'} tag="Github" avatarUrl={'../../profile3.png'} addr="https://github.com/AdityaRaghav0112"/>
        </div>
      </div>
      {/* <div className="item2 h-[40rem]">
        <ContactForm />
      </div> */}
    </div>
  );
};

export default Contact;
