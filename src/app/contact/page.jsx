"use client"
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const ContactPage = () => {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";
  // Form Ref for sending email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission
    setSuccess(false); // Reset success message
    setError(false); // Reset error message
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true); // Show success message
          form.current.reset(); // Reset form
        },
        (error) => {
          setError(true); //  Show error message
        },
      );

    emailjs.
      sendForm()
  }

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className="h-full flex flex-col lg:flex-row
        px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center
        justify-center text-6xl">
          <div>{text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={
                {
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }
              }
            >{letter}</motion.span>
          ))}😊</div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl
        text-xl flex flex-col gap-8 justify-center p-10 pt-20 pb-20 sm:p-18 md:p-22 lg:p-24">
          <span>Dear Reyna,</span>
          <textarea
            rows={3}
            className="bg-transparent border-b-2 border-b-black
            outline-none resize-none"
            name="user_message"
            style={{ minHeight: '30px' }} />
          <span>My e-mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black
          outline-none" />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold
          text-gray-600 p-4">Send</button>
          {success && <span
            className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
          {error && <span
            className="text-red-600 font-semibold">Something went wrong! Please try again.</span>}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
