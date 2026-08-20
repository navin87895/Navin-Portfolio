import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, Loader2, Mail, User, MessageSquare, Tag } from "lucide-react";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

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
      // 1️⃣ Send notification to ADMIN
      await emailjs.sendForm(serviceId, adminTemplateId, form.current, publicKey);
      console.log("Message sent to admin");

      // 2️⃣ Send AUTO-REPLY to USER
      await emailjs.sendForm(serviceId, userTemplateId, form.current, publicKey);
      console.log("Auto-reply delivered");

      setStatusMessage({ type: "success", text: "✅ Message sent & auto-reply delivered successfully!" });
      form.current.reset();
    } catch (error: any) {
      console.error("Error sending email via EmailJS:", error);
      const errDetail = error?.text || error?.message || "Failed to send email. Please try again.";
      setStatusMessage({ type: "error", text: `❌ ${errDetail}` });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="bg-[#0b0b14] text-white px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Background Neon Orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30 uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4">
            Contact Me 🚀
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Have a project idea, freelance opportunity, or question? Feel free to drop me a message below!
          </p>
        </motion.div>

        {/* Symmetric Centered Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto bg-gray-900/70 backdrop-blur-2xl p-6 sm:p-10 rounded-3xl border border-gray-800 shadow-2xl shadow-purple-950/30 hover:border-purple-500/40 transition duration-500"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-5">
            {statusMessage && (
              <div
                className={`p-4 rounded-xl text-sm font-semibold transition animate-fade-in ${
                  statusMessage.type === "success"
                    ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/50"
                    : "bg-red-950/80 text-red-300 border border-red-500/50"
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            {/* Email Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Your Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  name="from_email"
                  placeholder="name@example.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800/90 text-white placeholder-gray-500 border border-gray-700/80 text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                />
              </div>
            </div>

            {/* Name Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Your Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="from_name"
                  placeholder="John Doe"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800/90 text-white placeholder-gray-500 border border-gray-700/80 text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Subject</label>
              <div className="relative">
                <Tag className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="subject"
                  placeholder="Freelance Project / Opportunity"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800/90 text-white placeholder-gray-500 border border-gray-700/80 text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Message</label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3.5 top-4" />
                <textarea
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  rows={4}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800/90 text-white placeholder-gray-500 border border-gray-700/80 text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
