// components/ContactForm.jsx
'use client'
import { useState, useRef } from "react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const messageRef = useRef();

  const submitForm = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const message = messageRef.current.value;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, phoneNumber, message })
      });

      if (response.ok) {
        alert("Email sent successfully!");
        // Clear form
        event.target.reset();
      } else {
        const responseData = await response.json();
        alert(responseData.error || "There was an error sending the email.");
      }
    } catch (error) {
      console.error(error);
      alert("There was a network error.");
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={submitForm} className="w-full max-w-sm">
      <div className="flex items-center border-b border-sky-500 py-2">
        <input
          ref={nameRef}
          id="inline-full-name"
          name="inline-full-name"
          type="text"
          placeholder="Full name"
          required
          className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
      </div>
      <div className="flex items-center border-b border-sky-500 py-2">
        <input
          ref={emailRef}
          id="inline-email"
          name="inline-email"
          type="email"
          placeholder="Email"
          required
          className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
      </div>
      <div className="flex items-center border-b border-sky-500 py-2">
        <input
          ref={phoneNumberRef}
          id="inline-phone-number"
          name="inline-phone-number"
          type="tel"
          placeholder="Phone number"
          required
          className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
      </div>
      <div className="flex items-center border-b border-sky-500 py-2">
        <textarea
          ref={messageRef}
          id="inline-message"
          name="inline-message"
          type="text"
          placeholder="Message"
          required
          className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
      </div>
      <div className="flex items-center justify-center mt-6">
        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isLoading}
        >
          {isLoading ? "Skickar..." : "Skicka"}
        </button>
      </div>
    </form>
  )
};

export default ContactForm;
