// app/contact/page.jsx
"use client";

import { useState, useRef } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import heroImage from "@/public/images/about.jpg";

const Page = () => {
  const { isLoaded, isSignedIn } = useUser();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", message: ""
  });

  const handleChange = (e) => {
    console.log("Form field changed:", e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data before submit:", formData);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Response from server:", data);
      toast.success("Email sent successfully!", { position: toast.POSITION.BOTTOM_RIGHT });
      // Clear form fields
      setFormData({ name: "", email: "", phone: "", message: "" });
      formRef.current.reset();
    } catch (error) {
      console.log("Error:", error);
      toast.error("Error sending email.", { position: toast.POSITION.BOTTOM_RIGHT });
    }
  };

  const handleTextAreaResize = (e) => {
    console.log("Resizing textarea:", e.target.scrollHeight);
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  return (
    <>
      <ToastContainer />
      <section className="h-full pt-14" dir="ltr">
        <div className="relative isolate h-full overflow-hidden pt-14">
          <Image
            alt=""
            src={heroImage}
            className="fixed inset-0 -z-10 h-full w-full object-cover"
          />

          <div
            aria-hidden="true"
            className="fixed inset-0 -z-10 bg-black/70 bg-blend-multiply"
          />

          <div className="container mx-auto p-6 text-gray-200">
            <h1 className="text-3xl mb-4 text-center">Kontakta oss</h1>

            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <h2 className="text-xl mb-3 text-center">Skicka oss ett meddelande</h2>
                <form onSubmit={handleSubmit} ref={formRef}>
                  <div className="mb-4 text-gray-200">
                    <label htmlFor="name" className="block mb-2"> Namn</label>
                    <input type="text" id="name" name="name" onChange={handleChange}
                           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-4 text-gray-200">
                    <label htmlFor="email" className="block mb-2"> Email</label>
                    <input type="email" id="email" name="email" onChange={handleChange}
                           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-4 text-gray-200">
                    <label htmlFor="phone" className="block mb-2"> Telefonnummer</label>
                    <input type="text" id="phone" name="phone" onChange={handleChange}
                           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-4 text-gray-200">
                    <label htmlFor="message" className="block mb-2"> Meddelande</label>
                    <textarea id="message" name="message" onChange={(e) => {
                      handleChange(e);
                      handleTextAreaResize(e);
                    }}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                              style={{ overflow: "hidden", overflowWrap: "break-word", resize: "none" }} />
                  </div>
                  <div className="flex justify-center">
                    <button type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Skicka
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-200">
            <h2 className="text-xl mb-3">Vår kontaktinformation</h2>
            <p>
              <strong>Email:</strong> info@example.com<br />
              <strong>Telefon:</strong> +1 (123) 456-7890
            </p>
          </div>
        </div>

      </section>
    </>
  );
};

export default Page;
