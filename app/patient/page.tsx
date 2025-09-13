import {
  Calendar,
  FileText,
  Phone,
  Mail,
  Download,
  Clock,
  Users,
  Shield,
  Heart,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function PatientPortal() {
  const resources = [
    {
      icon: FileText,
      title: "Treatment Plans",
      description:
        "Access your personalized treatment plan and track your progress",
      action: "View Plan",
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Schedule, reschedule, or view your upcoming appointments",
      action: "Schedule Now",
    },
    {
      icon: Download,
      title: "Forms & Documents",
      description:
        "Download important forms, treatment summaries, and resources",
      action: "Access Documents",
    },
    {
      icon: Phone,
      title: "Crisis Support",
      description: "24/7 crisis support and emergency contact information",
      action: "Get Help Now",
    },
  ];

  const supportGroups = [
    {
      name: "Recovery Support Group",
      day: "Mondays",
      time: "6:00 PM - 7:30 PM",
      location: "Main Conference Room",
      facilitator: "Sarah Johnson, LCSW",
    },
    {
      name: "Family Support Group",
      day: "Wednesdays",
      time: "7:00 PM - 8:30 PM",
      location: "Family Room",
      facilitator: "Jennifer Williams, LMFT",
    },
    {
      name: "Dual Diagnosis Group",
      day: "Fridays",
      time: "5:30 PM - 7:00 PM",
      location: "Group Room A",
      facilitator: "Dr. Robert Martinez, MD",
    },
    {
      name: "Alumni Support Group",
      day: "Saturdays",
      time: "10:00 AM - 11:30 AM",
      location: "Community Room",
      facilitator: "Michael Chen, LPC",
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
    {
      name: "Substance Abuse Hotline",
      number: "1-800-662-4357",
      description: "National helpline for substance abuse and mental health",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue/5 to-brand-gold/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Patient <span className="text-brand-blue">Portal</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Access your treatment information, schedule appointments, and
              connect with resources to support your recovery journey.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-yellow-800">
                <AlertCircle size={20} />
                <span className="font-semibold">Portal Login Required</span>
              </div>
              <p className="text-yellow-700 text-sm mt-2">
                Please contact our office to set up your patient portal access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portal Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your patient portal provides secure access to your treatment
              information and tools to support your recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 p-8 border border-gray-200"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <resource.icon
                    className="text-brand-blue"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {resource.description}
                </p>
                <button className="w-full bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors duration-200">
                  {resource.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Groups */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support Groups
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our support groups to connect with others on similar recovery
              journeys and build a strong support network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportGroups.map((group, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {group.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-brand-blue">
                    <Users size={20} />
                    <span className="text-sm font-medium">Open Group</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar
                      className="text-gray-400"
                      size={16}
                    />
                    <span className="text-gray-600">
                      {group.day} at {group.time}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield
                      className="text-gray-400"
                      size={16}
                    />
                    <span className="text-gray-600">{group.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart
                      className="text-gray-400"
                      size={16}
                    />
                    <span className="text-gray-600">
                      Facilitated by {group.facilitator}
                    </span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-brand-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-gold-dark transition-colors duration-200">
                  Join Group
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emergency Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If you need immediate support or are experiencing a crisis, these
              resources are available 24/7 to help you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="bg-red-50 border border-red-200 rounded-xl p-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Phone
                    className="text-red-600"
                    size={24}
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {contact.name}
                  </h3>
                </div>
                <a
                  href={`tel:${contact.number.replace(/[^0-9]/g, "")}`}
                  className="text-2xl font-bold text-red-600 hover:underline block mb-3"
                >
                  {contact.number}
                </a>
                <p className="text-gray-600">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Downloads */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resources & Downloads
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access helpful resources, forms, and educational materials to
              support your recovery journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Recovery Resources
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Download
                    className="text-brand-blue"
                    size={16}
                  />
                  <span className="text-gray-600">
                    Recovery Planning Worksheet
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Download
                    className="text-brand-blue"
                    size={16}
                  />
                  <span className="text-gray-600">
                    Relapse Prevention Guide
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Download
                    className="text-brand-blue"
                    size={16}
                  />
                  <span className="text-gray-600">Coping Skills Toolkit</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Download
                    className="text-brand-blue"
                    size={16}
                  />
                  <span className="text-gray-600">
                    Meditation & Mindfulness Guide
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Forms & Documents
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <FileText
                    className="text-brand-gold"
                    size={16}
                  />
                  <span className="text-gray-600">Treatment Consent Forms</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FileText
                    className="text-brand-gold"
                    size={16}
                  />
                  <span className="text-gray-600">Insurance Information</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FileText
                    className="text-brand-gold"
                    size={16}
                  />
                  <span className="text-gray-600">Privacy Policy</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FileText
                    className="text-brand-gold"
                    size={16}
                  />
                  <span className="text-gray-600">Treatment Summary</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Educational Materials
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <FileText
                    className="text-brand-blue"
                    size={16}
                  />
                  <span className="text-gray-600">Understanding Addiction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FileText
                    className="text-brand-blue"
                    size={16}
                  />
                  <span className="text-gray-600">Mental Health Basics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FileText
                    className="text-brand-blue"
                    size={16}
                  />
                  <span className="text-gray-600">Family Support Guide</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FileText
                    className="text-brand-blue"
                    size={16}
                  />
                  <span className="text-gray-600">Medication Information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Accessing Your Portal?
          </h2>
          <p className="text-xl text-brand-blue/80 mb-8 max-w-3xl mx-auto">
            If you need assistance with your patient portal or have questions
            about your treatment, our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5551234567"
              className="bg-white text-brand-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Call (555) 123-4567
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors duration-200"
            >
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
