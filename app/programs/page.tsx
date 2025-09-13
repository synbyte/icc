import {
  Clock,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function Programs() {
  const programs = [
    {
      title: "Intensive Outpatient Program (IOP)",
      duration: "8-12 weeks",
      schedule: "3-5 sessions per week",
      description:
        "A structured program for those who need more support than traditional outpatient care but don't require residential treatment.",
      features: [
        "Individual therapy sessions",
        "Group therapy and support groups",
        "Life skills training",
        "Relapse prevention planning",
        "Family involvement and education",
        "Medication management if needed",
      ],
      intensity: "High",
      color: "blue",
    },
    {
      title: "Standard Outpatient Program",
      duration: "12-24 weeks",
      schedule: "1-3 sessions per week",
      description:
        "Flexible treatment program designed to fit into your daily life while providing essential support and therapy.",
      features: [
        "Individual counseling sessions",
        "Group therapy options",
        "Psychoeducation workshops",
        "Recovery planning",
        "Ongoing support and monitoring",
        "Family therapy sessions",
      ],
      intensity: "Medium",
      color: "green",
    },
    {
      title: "Dual Diagnosis Program",
      duration: "16-24 weeks",
      schedule: "4-6 sessions per week",
      description:
        "Specialized program for individuals with co-occurring substance abuse and mental health disorders.",
      features: [
        "Integrated treatment approach",
        "Psychiatric evaluation and medication management",
        "Individual and group therapy",
        "Trauma-informed care",
        "Crisis intervention training",
        "Comprehensive aftercare planning",
      ],
      intensity: "High",
      color: "purple",
    },
    {
      title: "Family Recovery Program",
      duration: "8-16 weeks",
      schedule: "2-3 sessions per week",
      description:
        "Comprehensive support program for families affected by addiction and mental health issues.",
      features: [
        "Family therapy sessions",
        "Educational workshops",
        "Support group meetings",
        "Communication skills training",
        "Boundary setting education",
        "Recovery planning for families",
      ],
      intensity: "Medium",
      color: "orange",
    },
    {
      title: "Aftercare & Alumni Program",
      duration: "Ongoing",
      schedule: "Monthly meetings",
      description:
        "Long-term support program for graduates to maintain their recovery and prevent relapse.",
      features: [
        "Monthly support group meetings",
        "Individual check-ins",
        "Relapse prevention workshops",
        "Peer mentorship opportunities",
        "Community events and activities",
        "24/7 crisis support access",
      ],
      intensity: "Low",
      color: "indigo",
    },
    {
      title: "Crisis Intervention Program",
      duration: "1-4 weeks",
      schedule: "Daily sessions",
      description:
        "Immediate, intensive support for individuals experiencing a mental health or addiction crisis.",
      features: [
        "Daily individual therapy",
        "Crisis stabilization techniques",
        "Safety planning",
        "Medication management",
        "Family support and education",
        "Transition planning to ongoing care",
      ],
      intensity: "Very High",
      color: "red",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
      green: "bg-brand-gold/10 text-brand-gold border-brand-gold/20",
      purple: "bg-brand-gold/10 text-brand-gold border-brand-gold/20",
      orange: "bg-brand-gold/10 text-brand-gold border-brand-gold/20",
      indigo: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
      red: "bg-red-100 text-red-600 border-red-200",
    };
    return (
      colorMap[color as keyof typeof colorMap] ||
      "bg-gray-100 text-gray-600 border-gray-200"
    );
  };

  const getIntensityColor = (intensity: string) => {
    const intensityMap = {
      "Very High": "bg-red-100 text-red-800",
      High: "bg-orange-100 text-orange-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Low: "bg-green-100 text-green-800",
    };
    return (
      intensityMap[intensity as keyof typeof intensityMap] ||
      "bg-gray-100 text-gray-800"
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue/5 to-brand-gold/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-brand-blue">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We offer a variety of evidence-based treatment programs designed
              to meet you where you are in your recovery journey. Each program
              is tailored to provide the right level of support for your unique
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-brand-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-blue-dark transition-colors duration-200"
              >
                Get Started Today
              </Link>
              <a
                href="tel:5551234567"
                className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-blue/5 transition-colors duration-200"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {program.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getIntensityColor(
                        program.intensity
                      )}`}
                    >
                      {program.intensity} Intensity
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">{program.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock
                        className="text-gray-400"
                        size={16}
                      />
                      <span className="text-sm text-gray-600">
                        <strong>Duration:</strong> {program.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar
                        className="text-gray-400"
                        size={16}
                      />
                      <span className="text-sm text-gray-600">
                        <strong>Schedule:</strong> {program.schedule}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Program Features:
                    </h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-2"
                        >
                          <CheckCircle
                            className="text-green-500 mt-1"
                            size={16}
                          />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full ${getColorClasses(
                      program.color
                    )} border-2 px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity duration-200 flex items-center justify-center`}
                  >
                    Learn More
                    <ArrowRight
                      className="ml-2"
                      size={16}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Selection Guide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Choose the Right Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team will work with you to determine the most appropriate
              program based on your individual needs, circumstances, and
              recovery goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users
                  className="text-brand-blue"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Assessment
              </h3>
              <p className="text-gray-600 text-center">
                We conduct a comprehensive evaluation to understand your
                specific needs, challenges, and goals before recommending a
                program.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle
                  className="text-brand-gold"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Recommendation
              </h3>
              <p className="text-gray-600 text-center">
                Based on your assessment, we'll recommend the program that best
                fits your needs and provide detailed information about what to
                expect.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight
                  className="text-brand-gold"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Get Started
              </h3>
              <p className="text-gray-600 text-center">
                Once you're ready, we'll help you enroll in your chosen program
                and begin your journey to recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Our Programs Work
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle
                    className="text-green-500 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Evidence-Based Approaches
                    </h3>
                    <p className="text-gray-600">
                      All our programs are grounded in proven therapeutic
                      methods and the latest research in addiction and mental
                      health treatment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle
                    className="text-green-500 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Personalized Treatment
                    </h3>
                    <p className="text-gray-600">
                      Each program is tailored to your unique needs,
                      circumstances, and recovery goals with regular adjustments
                      as you progress.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle
                    className="text-green-500 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Experienced Professionals
                    </h3>
                    <p className="text-gray-600">
                      Our team includes licensed therapists, counselors, and
                      medical professionals with specialized training in
                      addiction and mental health.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle
                    className="text-green-500 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Ongoing Support
                    </h3>
                    <p className="text-gray-600">
                      Recovery is a lifelong journey. We provide continued
                      support and resources to help you maintain your progress
                      long after program completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Start Your Recovery Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us today to learn more about our programs and find the
                right fit for your recovery needs.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="w-full bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors duration-200 block text-center"
                >
                  Schedule a Consultation
                </Link>
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Or call us directly:</p>
                  <a
                    href="tel:5551234567"
                    className="text-brand-blue font-semibold text-lg hover:underline"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Support */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Phone
                className="text-red-600 mr-3"
                size={32}
              />
              <h2 className="text-3xl font-bold text-gray-900">
                Need Immediate Help?
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              If you or someone you know is experiencing a crisis and needs
              immediate support, we're here to help 24/7.
            </p>
            <div className="bg-red-100 border border-red-200 rounded-lg p-6 mb-8">
              <div className="text-2xl font-bold text-red-700 mb-2">
                24/7 Crisis Hotline
              </div>
              <a
                href="tel:5551234567"
                className="text-3xl font-bold text-red-600 hover:underline"
              >
                (555) 123-4567
              </a>
            </div>
            <p className="text-sm text-gray-600">
              For life-threatening emergencies, please call 911 or go to your
              nearest emergency room.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
