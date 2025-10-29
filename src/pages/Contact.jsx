import React, { useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.", {
        style: {
          border: "1px solid #f87171",
          background: "#fff",
          color: "#b91c1c",
        },
        iconTheme: { primary: "#b91c1c", secondary: "#fff" },
      });
      return;
    }

    const loadingToast = toast.loading("Sending your message...");

    try {
      // ✅ Only change is the URL
      const res = await fetch("https://destinova-uzj2.onrender.com/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast.dismiss(loadingToast);

      if (res.ok) {
        toast.success("Message sent successfully!", {
          style: {
            border: "1px solid #4ade80",
            background: "#f0fdf4",
            color: "#166534",
          },
          iconTheme: { primary: "#16a34a", secondary: "#fff" },
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Try again later.", {
          style: {
            border: "1px solid #f97316",
            background: "#fff7ed",
            color: "#9a3412",
          },
        });
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Network error. Please try again.", {
        style: {
          border: "1px solid #f87171",
          background: "#fef2f2",
          color: "#b91c1c",
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: { fontSize: "0.9rem" },
        }}
      />
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-blue-100">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-800 animate-bounce">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-blue-700 font-semibold mb-2">
              Name
            </label>
            <div className="flex items-center border-2 border-blue-200 rounded-xl px-3 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
              <User className="text-blue-500 mr-2" size={20} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 outline-none bg-transparent placeholder-blue-300"
                placeholder="Your name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-blue-700 font-semibold mb-2">
              Email
            </label>
            <div className="flex items-center border-2 border-blue-200 rounded-xl px-3 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
              <Mail className="text-blue-500 mr-2" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 outline-none bg-transparent placeholder-blue-300"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-blue-700 font-semibold mb-2">
              Message
            </label>
            <div className="flex items-start border-2 border-blue-200 rounded-xl px-3 py-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
              <MessageSquare className="text-blue-500 mt-3 mr-2" size={20} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 outline-none bg-transparent placeholder-blue-300 resize-none"
                placeholder="Type your message..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-200">
            <Send className="mr-2" size={18} /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
