// src/pages/Contact.tsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    // 1️⃣ Send to ADMIN
    emailjs
      .sendForm(
        "service_vd5v0ky",
        "template_t52dzpb", // admin template
        form.current,
        "pVDpBpA9_KYxC5MRg"
      )
      .then(
        () => console.log("Message sent to admin"),
        (error) => console.error("Error sending to admin:", error.text)
      );

    // 2️⃣ Send AUTO-REPLY to USER
    emailjs
      .sendForm(
        "service_vd5v0ky",
        "template_g05966b", // user template
        form.current,
        "pVDpBpA9_KYxC5MRg"
      )
      .then(
        () => {
          alert("✅ Message sent & auto-reply delivered!");
          form.current?.reset();
        },
        (error) => {
          console.error("Error sending auto-reply:", error.text);
          alert("❌ Error sending auto-reply: " + error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#0f0f1a] text-white px-6 py-16 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-center mb-6">Contact</h2>
      <p className="text-gray-300 mb-8 text-center max-w-xl">
        Feel free to reach out to me for any questions or opportunities!
      </p>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-8 rounded-2xl shadow-lg space-y-4"
      >
        <h3 className="text-2xl font-semibold mb-2">Email Me 🚀</h3>

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          required
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:opacity-90 transition"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
