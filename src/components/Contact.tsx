"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setErrorMessage("");

    // Formulate mailto link as instant fallback
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio] ${formData.subject || "Inquiry from " + formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormSubmitted(true);
      } else {
        // If API fails, launch mail client directly
        window.location.href = mailtoUrl;
        setFormSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      window.location.href = mailtoUrl;
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-900">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-3">
            GET IN TOUCH
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Let&apos;s Connect & Build Together
          </p>
          <p className="text-slate-400 text-base mt-3">
            Whether you have a Java backend opportunity, project collaboration, or tech discussion — feel free to send a message!
          </p>
          <div className="mt-4 h-1 w-20 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Contact Information Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" /> Direct Contact Details
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="p-3 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div className="truncate">
                    <p className="text-xs text-slate-400 font-medium">Email Address</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-slate-200 hover:text-sky-400 transition-colors truncate block">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0 ml-2"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <span className="p-3 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Phone / WhatsApp</p>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-semibold text-slate-200 hover:text-sky-400 transition-colors">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0 ml-2"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                <span className="p-3 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Location</p>
                  <p className="text-sm font-semibold text-slate-200">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800">
                <p className="text-xs text-slate-400 font-medium mb-3">
                  Social & Developer Profiles
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-900/60 transition-all text-xs font-semibold"
                  >
                    <LinkedinIcon className="w-4 h-4" /> LinkedIn
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all text-xs font-semibold"
                  >
                    <GithubIcon className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 rounded-2xl border border-slate-800">
              {formSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white font-heading">
                    Message Dispatched to Hari!
                  </h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="text-sky-400 font-semibold">{formData.name}</span>. Your message has been forwarded to <strong className="text-sky-300">vedavyas2410@gmail.com</strong>.
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                        `[Portfolio] ${formData.subject || "Inquiry from " + formData.name}`
                      )}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                      )}`}
                      className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold rounded-xl shadow-lg shadow-sky-500/20 transition-all flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" /> Open in Mail App to Confirm
                    </a>
                    
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-sky-400" /> Send a Direct Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Hari, I would like to discuss a Java Backend developer role..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || "Portfolio Contact")}&body=${encodeURIComponent(formData.message)}`}
                      className="text-xs text-slate-400 hover:text-sky-400 transition-colors"
                    >
                      Or send via mail app &rarr;
                    </a>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/25 transition-all duration-200"
                    >
                      <Send className="w-4 h-4" /> {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
