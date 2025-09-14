import Image from "next/image";
import Link from "next/link";
import { Heart, Shield, Users, ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue/5 to-brand-gold/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Your Journey to
                  <span className="text-brand-blue"> Recovery</span>
                  <br />
                  Starts Here
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  At Integrity Care Connection, we provide compassionate,
                  evidence-based treatment for substance abuse and mental health
                  challenges. Your healing and recovery are our top priorities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-brand-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-blue-dark transition-colors duration-200 flex items-center justify-center"
                >
                  Get Help Now
                  <ArrowRight
                    className="ml-2"
                    size={20}
                  />
                </Link>
                <Link
                  href="/programs"
                  className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-blue/5 transition-colors duration-200 flex items-center justify-center"
                >
                  Our Programs
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle
                    className="text-green-500 mr-2"
                    size={16}
                  />
                  <span>Walk-ins Welcome</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle
                    className="text-green-500 mr-2"
                    size={16}
                  />
                  <span>Dedicated Professionals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle
                    className="text-green-500 mr-2"
                    size={16}
                  />
                  <span>Insurance Accepted</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/hands.jpg"
                  alt="Two hands clasped together, symbolizing support and connection"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Care for Your Recovery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a full spectrum of evidence-based treatments designed to
              address both substance abuse and mental health challenges with
              compassion and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield
                  className="text-brand-blue"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Substance Abuse Treatment
              </h3>
              <p className="text-gray-600">
                Individualized treatment plans for alcohol, drug, and
                prescription medication addiction with medically supervised
                detox and ongoing support.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart
                  className="text-brand-gold"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mental Health Services
              </h3>
              <p className="text-gray-600">
                Professional counseling and therapy for depression, anxiety,
                PTSD, bipolar disorder, and other mental health conditions.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users
                  className="text-brand-gold"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Family Support
              </h3>
              <p className="text-gray-600">
                Comprehensive family therapy and support programs to help loved
                ones understand and support the recovery process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Integrity Care Connection?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle
                    className="text-green-500 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Evidence-Based Treatment
                    </h3>
                    <p className="text-gray-600">
                      Our programs are grounded in proven therapeutic approaches
                      and the latest research in addiction and mental health
                      treatment.
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
                      Dedicated Professionals
                    </h3>
                    <p className="text-gray-600">
                      Our team includes dedicated therapists, counselors, and
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
                      Individualized Care
                    </h3>
                    <p className="text-gray-600">
                      Every treatment plan is tailored to your unique needs,
                      circumstances, and recovery goals.
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
                      support and resources to help you maintain your progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Start Your Recovery?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Take the first step towards healing and recovery. Our
                    compassionate team is here to support you every step of the
                    way.
                  </p>
                  <div className="space-y-4">
                    <Link
                      href="/contact"
                      className="w-full bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors duration-200 block text-center"
                    >
                      Schedule a Consultation
                    </Link>
                    <Link
                      href="/programs"
                      className="w-full border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue/5 transition-colors duration-200 block text-center"
                    >
                      Learn About Our Programs
                    </Link>
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
            Don't Wait - Help is Available Now
          </h2>
          <p className="text-xl text-brand-blue/80 mb-8 max-w-3xl mx-auto">
            Recovery is possible, and it starts with reaching out. Our team of
            compassionate professionals is ready to help you take the first step
            towards a healthier, happier life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Help Today
            </Link>
            <a
              href="tel:5551234567"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors duration-200"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
