import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Send,
  Phone,
  Twitter,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t5rg0cd",
        "template_6fg6cwe",
        form.current,
        "5_Ssg3nCw92qMcakg",
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the message, please try again.");
        },
      );
  };

  return (
    <div className="min-h-screen bg-white py-12 md:py-24 font-sans text-gray-800 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:tracking-tight md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg md:tracking-tight text-gray-600 leading-relaxed px-2">
            Whether you have a question, a project proposal, or just want to say
            hi, my inbox is always open. Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="flex flex-col gap-8 bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                I am actively looking for new opportunities and frontend
                internships. Feel free to reach out through the form or my
                direct contact details.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:zulkaifkhan183@gmail.com"
                className="group flex items-center gap-4 w-fit"
              >
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg group-hover:border-blue-400 group-hover:text-blue-600 transition-colors flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-sm font-semibold text-gray-900">Email</h3>
                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-blue-600 transition-colors truncate">
                    zulkaifkhan183@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+923409050328"
                className="group flex items-center gap-4 w-fit"
              >
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg group-hover:border-green-400 group-hover:text-green-600 transition-colors flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Phone</h3>
                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-green-600 transition-colors">
                    +92 340 9050328
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex-shrink-0">
                  <MapPin size={24} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Location
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">Peshawar, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="w-full h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden border border-gray-200 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d71.50346765715566!3d34.01513660505191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637f8ce148!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708420000000!5m2!1sen!2s"
                className="w-full h-full border-0"
                title="Location Map"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 text-center sm:text-left">
                Connect with me
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4 w-full items-center justify-center sm:justify-start mt-1">
                <a
                  href="https://www.linkedin.com/in/zulkaif-ahmad-28a0512b7/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 sm:p-2 bg-gray-50 rounded-lg hover:bg-[#000000] hover:text-white text-gray-600 transition-all duration-300 shadow-sm"
                >
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
                <a
                  href="https://github.com/ZulkaifAhmad"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 sm:p-2 bg-gray-50 rounded-lg hover:bg-[#0A66C2] hover:text-white text-gray-600 transition-all duration-300 shadow-sm"
                >
                  <Github size={20} strokeWidth={1.5} />
                </a>
                <a
                  href="https://web.facebook.com/zulkaif.ahmad.149176"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 sm:p-2 bg-gray-50 rounded-lg hover:bg-[#1877F2] hover:text-white text-gray-600 transition-all duration-300 shadow-sm"
                >
                  <Facebook size={20} strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.instagram.com/zulkaif497/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 sm:p-2 bg-gray-50 rounded-lg hover:bg-[#E4405F] hover:text-white text-gray-600 transition-all duration-300 shadow-sm"
                >
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-5 sm:gap-6"
            >
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 text-sm sm:text-base rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-900"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 text-sm sm:text-base rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="title"
                  placeholder="Frontend Internship Opportunity"
                  className="w-full px-4 py-3 text-sm sm:text-base rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 text-sm sm:text-base rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 sm:mt-4 w-full bg-gray-900 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;