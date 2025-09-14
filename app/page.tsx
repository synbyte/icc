import Image from "next/image";
import Link from "next/link";
import { Heart, Shield, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Highlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative minn-h-screen flex items-center overflow-hidden shadow-2xl shadow-brand-blue/50 py-10 lg:py-0">
        {/* Background image with right-to-left fade */}
        <div className="absolute inset-0">
          <Image
            src="/hands.jpg"
            alt="Two hands clasped together, symbolizing support and connection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10"></div>
        </div>

        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/80 to-brand-gold/60"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-gold/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center min-h-[80vh]">
            {/* Content */}
            <div className="space-y-8 text-white max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Heart
                  className="text-brand-gold mr-2"
                  size={16}
                />
                <span className="text-sm font-medium">
                  Compassionate Care Since 2025
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight animate-in fade-in slide-in-from-bottom duration-1000">
                  Your Journey to
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-500">
                    Recovery
                  </span>
                  <span className="block text-4xl md:text-5xl font-light">
                    <Highlight className="bg-gradient-to-r from-brand-gold to-brand-gold text-transparent bg-clip-text font-medium">
                      Starts Here
                    </Highlight>
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom duration-1000 ">
                  Compassionate, evidence-based treatment for substance abuse
                  and mental health challenges.
                  <span className="text-brand-gold font-semibold">
                    {" "}
                    Your healing is our priority.
                  </span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group bg-brand-gold text-brand-blue px-8 py-4 rounded-2xl text-lg font-bold hover:bg-brand-gold-light transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl"
                >
                  Get Help Now
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Link>
                <Link
                  href="/programs"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  Explore Programs
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="flex items-center space-x-3 animate-in fade-in duration-1000 hover:scale-105 transition-all">
                  <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
                    <CheckCircle
                      className="text-brand-gold"
                      size={20}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Walk-ins Welcome
                    </div>
                    <div className="text-white/70 text-sm">
                      No appointment needed
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 animate-in fade-in duration-1000 hover:scale-105 transition-all">
                  <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
                    <CheckCircle
                      className="text-brand-gold"
                      size={20}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Dedicated Professionals
                    </div>
                    <div className="text-white/70 text-sm">
                      Experienced & Trained
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 animate-in fade-in duration-1000 hover:scale-105 transition-all">
                  <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
                    <CheckCircle
                      className="text-brand-gold"
                      size={20}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Insurance Accepted
                    </div>
                    <div className="text-white/70 text-sm">
                      Most major plans
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-linear-to-b from-brand-blue/10 to-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Care for Your{" "}
              <span className="text-brand-gold">Recovery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a full spectrum of evidence-based treatments designed to
              address both substance abuse and mental health challenges with
              compassion and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
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

            <div className="text-center p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
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

            <div className="text-center p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
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
      <section className="py-20 bg-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose{" "}
                <span className="text-brand-blue">
                  Integrity Care Connection
                </span>
                ?
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
