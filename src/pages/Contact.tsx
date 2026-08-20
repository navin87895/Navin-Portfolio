// src/pages/Contact.tsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || isSending) return;

    setIsSending(true);
    setStatusMessage(null);

    const serviceId = "service_vd5v0ky";
    const adminTemplateId = "template_t52dzpb";
    const userTemplateId = "template_g05966b";
    const publicKey = "pVDpBpA9_KYxC5MRg";

    try {
      // 1️⃣ Send to ADMIN
      await emailjs.sendForm(serviceId, adminTemplateId, form.current, publicKey);
      console.log("Message sent to admin");

      // 2️⃣ Send AUTO-REPLY to USER
      await emailjs.sendForm(serviceId, userTemplateId, form.current, publicKey);
      console.log("Auto-reply delivered");

      setStatusMessage({ type: "success", text: "✅ Message sent & auto-reply delivered!" });
      form.current.reset();
    } catch (error: any) {
      console.error("Error sending email via EmailJS:", error);
      const errDetail = error?.text || error?.message || "Failed to send email. Please try again.";
      setStatusMessage({ type: "error", text: `❌ Error sending email: ${errDetail}` });
    } finally {
      setIsSending(false);
    }
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

        {statusMessage && (
          <div
            className={`p-3 rounded-lg text-sm font-medium ${
              statusMessage.type === "success"
                ? "bg-green-900/60 text-green-200 border border-green-500/50"
                : "bg-red-900/60 text-red-200 border border-red-500/50"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

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
          disabled={isSending}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
