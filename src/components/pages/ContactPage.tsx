import React, { useState } from 'react';
import { PERSONAL_DETAILS } from '../../data/resumeData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.7 }
        });
      } catch {
        // Fallback
      }
    }, 700);
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry for Naveen Kumar S`);
    const body = encodeURIComponent(
      `Hello Naveen,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${PERSONAL_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Page Header */}
      <div className="border-b border-[#e6e4dc] pb-8 pt-2">
        <div className="flex items-center gap-2">
          <span className="text-zinc-400 font-mono text-xs">[</span>
          <span className="text-[#006257] font-mono text-xs font-semibold tracking-wider uppercase">
            DIRECT CONTACT // COLLABORATION &amp; ROLES
          </span>
          <span className="text-zinc-400 font-mono text-xs">]</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 mt-3 font-sans tracking-tight">
          LET'S BUILD SOMETHING GREAT.
        </h1>
        <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed font-sans">
          I am actively seeking cybersecurity internships, entry-level analyst opportunities, and technical projects. Feel free to reach out directly.
        </p>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ================= LEFT COLUMN: CONTACT DETAILS & CHANNELS ================= */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white rounded-2xl border border-[#e6e4dc] p-6 sm:p-7 shadow-sm space-y-6">
            <div className="border-b border-zinc-100 pb-4">
              <span className="text-xs font-mono font-bold text-[#006257] uppercase tracking-wider">
                GET IN TOUCH
              </span>
              <h2 className="text-xl font-bold text-zinc-900 mt-1 font-sans">
                Contact Channels
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-sans">
              {/* Telephone */}
              <a
                href={`tel:${PERSONAL_DETAILS.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#faf9f6] border border-zinc-200 hover:border-[#006257]/40 hover:bg-white transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#e8f4f2] text-[#006257] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={17} />
                </div>
                <div>
                  <div className="text-[11px] text-zinc-500 font-medium">Telephone</div>
                  <div className="text-zinc-900 font-semibold group-hover:text-[#006257] transition-colors">
                    {PERSONAL_DETAILS.phone}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#faf9f6] border border-zinc-200 hover:border-[#006257]/40 hover:bg-white transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#e8f4f2] text-[#006257] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={17} />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] text-zinc-500 font-medium">Direct Email</div>
                  <div className="text-zinc-900 font-semibold group-hover:text-[#006257] transition-colors truncate">
                    {PERSONAL_DETAILS.email}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#faf9f6] border border-zinc-200">
                <div className="w-10 h-10 rounded-xl bg-[#e8f4f2] text-[#006257] flex items-center justify-center shrink-0">
                  <MapPin size={17} />
                </div>
                <div>
                  <div className="text-[11px] text-zinc-500 font-medium">Location</div>
                  <div className="text-zinc-900 font-semibold">
                    {PERSONAL_DETAILS.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 border-t border-zinc-100 space-y-3">
              <div className="text-xs font-bold text-zinc-900 uppercase font-sans">
                Professional Networks:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PERSONAL_DETAILS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white border border-zinc-200 hover:border-[#006257] transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon size={16} className="text-[#006257]" />
                    <span className="text-xs font-semibold text-zinc-800 group-hover:text-[#006257]">LinkedIn</span>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-[#006257]" />
                </a>

                <a
                  href={PERSONAL_DETAILS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white border border-zinc-200 hover:border-[#006257] transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon size={16} className="text-zinc-900" />
                    <span className="text-xs font-semibold text-zinc-800 group-hover:text-[#006257]">GitHub</span>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-[#006257]" />
                </a>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-xl bg-[#e8f4f2] border border-[#b8dfd8] flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#006257] shrink-0" />
              <div className="text-xs text-[#006257] font-medium leading-snug">
                Available for internships, analyst roles, and technical collaborations. Typical response time is within 24 hours.
              </div>
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: CLEAN CONTACT FORM ================= */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-[#e6e4dc] p-6 sm:p-8 shadow-sm">
            
            <div className="border-b border-zinc-100 pb-4 mb-6">
              <span className="text-xs font-mono font-bold text-[#006257] uppercase tracking-wider">
                MESSAGE FORM
              </span>
              <h2 className="text-xl font-bold text-zinc-900 mt-1 font-sans">
                Send a Message
              </h2>
            </div>

            {isSuccess ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#e8f4f2] border border-[#b8dfd8] text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-white border border-[#b8dfd8] text-[#006257] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 size={24} />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-zinc-900 font-sans">
                    Message Prepared!
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-sans max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Because this static portfolio runs without an active backend mail relay, you can dispatch your message directly to Naveen's inbox via your default mail client:
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleMailtoFallback}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#006257] hover:bg-[#004a42] text-white font-sans text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail size={15} />
                    <span>Open in Email Client</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white border border-zinc-300 text-zinc-700 hover:bg-zinc-50 font-sans text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Compose Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-zinc-800 uppercase font-sans">
                    Name <span className="text-[#006257]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="Your Full Name"
                    className={`w-full bg-[#faf9f6] border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 font-sans focus:outline-none focus:bg-white transition-colors ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-zinc-300 focus:border-[#006257]'
                    }`}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1 text-xs text-red-600 font-sans">
                      <AlertCircle size={12} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-zinc-800 uppercase font-sans">
                    Email <span className="text-[#006257]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="your.email@example.com"
                    className={`w-full bg-[#faf9f6] border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 font-sans focus:outline-none focus:bg-white transition-colors ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-zinc-300 focus:border-[#006257]'
                    }`}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 text-xs text-red-600 font-sans">
                      <AlertCircle size={12} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-zinc-800 uppercase font-sans">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Cybersecurity Internship Inquiry"
                    className="w-full bg-[#faf9f6] border border-zinc-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 font-sans focus:outline-none focus:bg-white focus:border-[#006257] transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-zinc-800 uppercase font-sans">
                    Message <span className="text-[#006257]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Write your message here..."
                    className={`w-full bg-[#faf9f6] border rounded-xl p-4 text-xs sm:text-sm text-zinc-900 font-sans focus:outline-none focus:bg-white transition-colors resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-zinc-300 focus:border-[#006257]'
                    }`}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1 text-xs text-red-600 font-sans">
                      <AlertCircle size={12} />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-full bg-[#006257] hover:bg-[#004a42] text-white font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};
