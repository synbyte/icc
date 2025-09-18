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
import Image from "next/image";

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
      facilitator: "George Hutchins",
    },
    {
      name: "Family Support Group",
      day: "Wednesdays",
      time: "7:00 PM - 8:30 PM",
      location: "Family Room",
        facilitator: "George Hutchins",
    },
    {
      name: "Dual Diagnosis Group",
      day: "Fridays",
      time: "5:30 PM - 7:00 PM",
      location: "Group Room A",
      facilitator: "Erin Stark",
    },
    {
      name: "Alumni Support Group",
      day: "Saturdays",
      time: "10:00 AM - 11:30 AM",
      location: "Community Room",
      facilitator: "Erin Stark",
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
                Patient{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-500 from-brand-gold">
                  Portal
                </span>
              </h1>

              <p className="mx-auto max-w-4xl text-xl leading-relaxed duration-1000 md:text-2xl text-white/90 animate-in fade-in slide-in-from-bottom">
                Access your treatment information, schedule appointments, and
                connect with resources to support your
                <span className="font-semibold text-brand-gold">
                  {" "}
                  recovery journey.
                </span>
              </p>
            </div>

            {/* Portal Access Notice */}
            <div className="p-6 mx-auto mb-8 max-w-2xl rounded-2xl border backdrop-blur-sm bg-yellow-500/20 border-yellow-400/30">
              <div className="flex justify-center items-center mb-3 space-x-3 text-yellow-100">
                <AlertCircle size={24} />
                <span className="text-lg font-bold">Portal Login Required</span>
              </div>
              <p className="text-sm text-yellow-100/90">
                Please contact our office to set up your patient portal access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Portal Features
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Your patient portal provides secure access to your treatment
              information and tools to support your recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl border border-gray-200 shadow-lg transition-shadow duration-200 hover:shadow-xl"
              >
                <div className="flex justify-center items-center mx-auto mb-6 w-16 h-16 rounded-full bg-brand-blue/10">
                  <resource.icon
                    className="text-brand-blue"
                    size={32}
                  />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-center text-gray-900">
                  {resource.title}
                </h3>
                <p className="mb-6 text-center text-gray-600">
                  {resource.description}
                </p>
                <button className="px-6 py-3 w-full font-semibold text-white rounded-lg transition-colors duration-200 bg-brand-blue hover:bg-brand-blue-dark">
                  {resource.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Groups */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Support Groups
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Join our support groups to connect with others on similar recovery
              journeys and build a strong support network.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {supportGroups.map((group, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
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
                <button className="px-6 py-3 mt-6 w-full font-semibold text-white rounded-lg transition-colors duration-200 bg-brand-gold hover:bg-brand-gold-dark">
                  Coming soon...
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Emergency Contacts
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              If you need immediate support or are experiencing a crisis, these
              resources are available 24/7 to help you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="p-8 bg-red-50 rounded-xl border border-red-200"
              >
                <div className="flex items-center mb-4 space-x-4">
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
                  className="block mb-3 text-2xl font-bold text-red-600 hover:underline"
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Resources & Downloads
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Access helpful resources, forms, and educational materials to
              support your recovery journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 bg-white rounded-xl shadow-lg">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
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

            <div className="p-8 bg-white rounded-xl shadow-lg">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
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

            <div className="p-8 bg-white rounded-xl shadow-lg">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
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
        <div className="px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Need Help Accessing Your Portal?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-brand-blue/80">
            If you need assistance with your patient portal or have questions
            about your treatment, our team is here to help.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <a
              href="tel:5551234567"
              className="px-8 py-4 text-lg font-semibold bg-white rounded-lg transition-colors duration-200 text-brand-blue hover:bg-gray-100"
            >
              Call (555) 123-4567
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 text-lg font-semibold text-white rounded-lg border-2 border-white transition-colors duration-200 hover:bg-white hover:text-brand-blue"
            >
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
