"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Image from "next/image";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
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
      details: ["123 Recovery Street", "Hope City, HC 12345"],
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle
                className="text-green-600"
                size={32}
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-gray-600 mb-6">
              Your message has been received. We'll get back to you within 24
              hours.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              If this is an emergency, please call our crisis line at (555)
              123-4567.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors duration-200"
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
      <section className="relative minn-h-screen flex items-center overflow-hidden">
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
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-gold/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center min-h-[80vh] flex flex-col justify-center">
            {/* Main Headline */}
            <div className="space-y-6 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight text-white">
                Contact{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-500">
                  Us
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                We're here to help you take the first step towards recovery.
                Contact us today to learn more about our services or to
                <span className="text-brand-gold font-semibold">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon
                    className="text-brand-blue"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
                          className="hover:text-brand-blue transition-colors duration-200"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="urgency"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
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
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="preferredContact"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="phone">Phone Call</option>
                    <option value="email">Email</option>
                    <option value="text">Text Message</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-blue text-white px-6 py-4 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors duration-200 flex items-center justify-center"
                >
                  <Send
                    className="mr-2"
                    size={20}
                  />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin
                    className="text-gray-400 mx-auto mb-4"
                    size={48}
                  />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">
                    123 Recovery Street, Hope City, HC 12345
                  </p>
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Emergency Contacts
                </h3>
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4"
                    >
                      <Phone
                        className="text-red-600 mt-1"
                        size={20}
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {contact.name}
                        </h4>
                        <a
                          href={`tel:${contact.number.replace(/[^0-9]/g, "")}`}
                          className="text-red-600 font-bold text-lg hover:underline"
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
              <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">
                      8:00 AM - 8:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">
                      9:00 AM - 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-900">
                      Emergency Only
                    </span>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> Crisis support is available 24/7.
                      For emergencies, call (555) 123-4567.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl text-brand-blue/80 mb-8 max-w-3xl mx-auto">
            Don't wait to get the help you need. Contact us today to schedule a
            consultation or learn more about our treatment programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5551234567"
              className="bg-white text-brand-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Call (555) 123-4567
            </a>
            <a
              href="mailto:info@integritycareconnection.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
