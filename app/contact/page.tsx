"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Image from "next/image";
import { supabase, type ContactForm } from "@/lib/supabase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "phone",
    urgency: "normal",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Map form data to match database schema
      const contactData: ContactForm = {
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        subject: formData.subject,
        message: formData.message,
        method: formData.preferredContact,
        urgency: formData.urgency,
      };

      const { error } = await supabase
        .from('contacts')
        .insert([contactData]);

      if (error) {
        throw error;
      }

      console.log("Form submitted successfully:", contactData);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        preferredContact: "phone",
        urgency: "normal",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting your message. Please try again or call us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "24/7 Crisis Line"],
      action: "tel:5551234567",
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@integritycareconnection.com",
        "crisis@integritycareconnection.com",
      ],
      action: "mailto:info@integritycareconnection.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["815 SW 2nd Ave Suite 200", "Portland, Oregon 97204"],
      action: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Hours",
      details: [
        "Mon-Fri: 8:00 AM - 8:00 PM",
        "Sat: 9:00 AM - 5:00 PM",
        "Sun: Emergency Only",
      ],
      action: null,
    },
  ];

  const emergencyContacts = [
    {
      name: "24/7 Crisis Hotline",
      number: "(555) 123-4567",
      description: "Immediate crisis support and intervention",
    },
    {
      name: "Emergency Services",
      number: "911",
      description: "For life-threatening emergencies",
    },
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 suicide prevention and crisis support",
    },
  ];

  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="mx-auto max-w-md text-center">
          <div className="p-8 bg-white rounded-2xl shadow-xl">
            <div className="flex justify-center items-center mx-auto mb-6 w-16 h-16 bg-green-100 rounded-full">
              <CheckCircle
                className="text-green-600"
                size={32}
              />
            </div>
            <h1 className="mb-4 text-2xl font-bold text-gray-900">
              Thank You!
            </h1>
            <p className="mb-6 text-gray-600">
              Your message has been received. We'll get back to you within 24
              hours.
            </p>
            <p className="mb-6 text-sm text-gray-500">
              If this is an emergency, please call our crisis line at (555)
              123-4567.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 font-semibold text-white rounded-lg transition-colors duration-200 bg-brand-blue hover:bg-brand-blue-dark"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex overflow-hidden relative items-center minn-h-screen">
        {/* Background image with right-to-left fade */}
        <div className="absolute inset-0">
          <Image
            src="/logo_notext.png"
            alt="Integrity Care Connection logo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/60"></div>
        </div>

        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/80 to-brand-gold/60"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Floating elements for visual interest */}
        <div className="absolute left-10 top-20 w-32 h-32 rounded-full blur-xl animate-pulse bg-white/10"></div>
        <div className="absolute right-10 bottom-20 w-48 h-48 rounded-full blur-2xl delay-1000 animate-pulse bg-brand-gold/20"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full blur-lg delay-500 animate-pulse bg-white/5"></div>

        <div className="relative px-4 mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center min-h-[80vh] flex flex-col justify-center">
            {/* Main Headline */}
            <div className="mb-8 space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight text-white animate-in fade-in slide-in-from-bottom duration-1000">
                Contact{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-500 from-brand-gold">
                  Us
                </span>
              </h1>

              <p className="mx-auto max-w-4xl text-xl leading-relaxed duration-1000 md:text-2xl text-white/90 animate-in fade-in slide-in-from-bottom">
                We're here to help you take the first step towards recovery.
                Contact us today to learn more about our services or to
                <span className="font-semibold text-brand-gold">
                  {" "}
                  schedule a consultation.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-8 text-center rounded-xl transition-shadow duration-200 hover:shadow-lg"
              >
                <div className="flex justify-center items-center mx-auto mb-6 w-16 h-16 rounded-full bg-brand-blue/10">
                  <info.icon
                    className="text-brand-blue"
                    size={32}
                  />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p
                      key={detailIndex}
                      className="text-gray-600"
                    >
                      {info.action && detailIndex === 0 ? (
                        <a
                          href={info.action}
                          className="transition-colors duration-200 hover:text-brand-blue"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="p-8 bg-white rounded-2xl shadow-xl">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Send Us a Message
              </h2>
              {error && (
                <div className="p-4 mb-6 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="urgency"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    >
                      <option value="normal">Normal - Within 24 hours</option>
                      <option value="urgent">Urgent - Within 4 hours</option>
                      <option value="crisis">
                        Crisis - Immediate response needed
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="preferredContact"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="phone">Phone Call</option>
                    <option value="email">Email</option>
                    <option value="text">Text Message</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex justify-center items-center px-6 py-4 w-full font-semibold text-white rounded-lg transition-colors duration-200 bg-brand-blue hover:bg-brand-blue-dark disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="mr-2 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send
                        className="mr-2"
                        size={20}
                      />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="flex overflow-hidden justify-center items-center h-96 bg-gray-200 rounded-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCwuEyPrnPSRtI9Pz64bhfY3tKTS1aBiro&q=815+SW+2nd+Ave+Suite+200,+Portland,+Oregon+97204"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Emergency Contacts */}
              <div className="p-8 bg-red-50 rounded-2xl border border-red-200">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Emergency Contacts
                </h3>
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4"
                    >
                      <Phone
                        className="mt-1 text-red-600"
                        size={20}
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {contact.name}
                        </h4>
                        <a
                          href={`tel:${contact.number.replace(/[^0-9]/g, "")}`}
                          className="text-lg font-bold text-red-600 hover:underline"
                        >
                          {contact.number}
                        </a>
                        <p className="text-sm text-gray-600">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-8 rounded-2xl border bg-brand-blue/5 border-brand-blue/20">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Administrative Hours</span>
                    <span className="font-semibold text-gray-900">
                      Monday-Friday 8:00 AM - 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Clinic Hours</span>
                    <span className="font-semibold text-gray-900">
                      Monday-Friday 8:30 AM - 4:30 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Evening and Weekend Hours By Appointment</span>
                   
                  </div>
                  <div className="p-4 mt-4 bg-red-100 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>24/7 Crisis Support:</strong> Call 555-555-1212
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-blue">
        <div className="px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-brand-blue/80">
            Don't wait to get the help you need. Contact us today to schedule a
            consultation or learn more about our treatment programs.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <a
              href="tel:5551234567"
              className="px-8 py-4 text-lg font-semibold bg-white rounded-lg transition-colors duration-200 text-brand-blue hover:bg-gray-100"
            >
              Call (555) 123-4567
            </a>
            <a
              href="mailto:info@integritycareconnection.com"
              className="px-8 py-4 text-lg font-semibold text-white rounded-lg border-2 border-white transition-colors duration-200 hover:bg-white hover:text-brand-blue"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
