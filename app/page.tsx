import Image from "next/image";
import Link from "next/link";
import { Heart, Shield, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Highlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex overflow-hidden relative items-center py-10 shadow-2xl minn-h-screen shadow-brand-blue/50 lg:py-0">
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
        <div className="absolute left-10 top-20 w-32 h-32 rounded-full blur-xl animate-pulse bg-white/10"></div>
        <div className="absolute right-10 bottom-20 w-48 h-48 rounded-full blur-2xl delay-1000 animate-pulse bg-brand-gold/20"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full blur-lg delay-500 animate-pulse bg-white/5"></div>

        <div className="relative px-4 mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center min-h-[80vh]">
            {/* Content */}
            <div className="space-y-8 max-w-4xl text-white">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full border backdrop-blur-sm bg-white/10 border-white/20">
                <Heart
                  className="mr-2 text-brand-gold"
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
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r to-yellow-500 from-brand-gold">
                    Recovery
                  </span>
                  <span className="block text-4xl font-light md:text-5xl">
                    <Highlight className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold">
                      Starts Here
                    </Highlight>
                  </span>
                </h1>

                <p className="max-w-2xl text-xl leading-relaxed duration-1000 md:text-2xl text-white/90 animate-in fade-in slide-in-from-bottom">
                  Compassionate, evidence-based treatment for substance abuse
                  and mental health challenges.
                  <span className="font-semibold text-brand-gold">
                    {" "}
                    Your healing is our priority.
                  </span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="flex justify-center items-center px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 transform group bg-brand-gold text-brand-blue hover:bg-brand-gold-light hover:scale-105 hover:shadow-2xl"
                >
                  Get Help Now
                  <ArrowRight
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </Link>
                <Link
                  href="/programs"
                  className="flex justify-center items-center px-8 py-4 text-lg font-semibold text-white rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 group border-white/30 hover:bg-white/10 hover:border-white/50"
                >
                  Explore Programs
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 gap-6 pt-8 border-t sm:grid-cols-3 border-white/20">
                <div className="flex items-center space-x-3 transition-all duration-1000 animate-in fade-in hover:scale-105">
                  <div className="flex justify-center items-center w-10 h-10 rounded-full bg-brand-gold/20">
                    <CheckCircle
                      className="text-brand-gold"
                      size={20}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Walk-ins Welcome
                    </div>
                    <div className="text-sm max-w-[250px]  text-white/70">
                      No appointment needed, come in anytime Monday through Friday 8:30am to 4:30pm
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 transition-all duration-1000 animate-in fade-in hover:scale-105">
                  <div className="flex justify-center items-center w-10 h-10 rounded-full bg-brand-gold/20">
                    <CheckCircle
                      className="text-brand-gold"
                      size={20}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Dedicated Professionals
                    </div>
                    <div className="text-sm max-w-[250px] text-white/70">
                      Dedicated and trained professionals with years of lived experience
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 transition-all duration-1000 animate-in fade-in hover:scale-105">
                  <div className="flex justify-center items-center w-10 h-10 rounded-full bg-brand-gold/20">
                    <CheckCircle
                      className="text-brand-gold"
                      size={20}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Insurance Accepted
                    </div>
                    <div className="text-sm max-w-[250px] text-white/70">
                      Oregon Medicaid, Blue Cross Blue Shield, Kaiser
                      Permanente, Moda, Humana, and more
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Comprehensive Care for Your{" "}
              <span className="text-brand-gold">Recovery</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We offer a full spectrum of evidence-based treatments designed to
              address both substance abuse and mental health challenges with
              compassion and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 text-center rounded-xl shadow-md transition-shadow duration-200 hover:shadow-lg">
              <div className="flex justify-center items-center mx-auto mb-6 w-16 h-16 rounded-full bg-brand-blue/10">
                <Shield
                  className="text-brand-blue"
                  size={32}
                />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Substance Abuse Disorder (SUD) Treatment
              </h3>
              <p className="text-gray-600">
                Individualized treatment plans for alcohol, drug, and
                prescription medication addiction with medically supervised
                detox and ongoing support.
              </p>
            </div>

            <div className="p-8 text-center rounded-xl shadow-md transition-shadow duration-200 hover:shadow-lg">
              <div className="flex justify-center items-center mx-auto mb-6 w-16 h-16 rounded-full bg-brand-gold/10">
                <Heart
                  className="text-brand-gold"
                  size={32}
                />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Behavior/Mental Wellness Services
              </h3>
              <p className="text-gray-600">
                Professional counseling and therapy services for social anxiety
                issues, dissociative disorders, disruptive disorders,
                depression, anxiety, PTSD/TIC, bipolar disorder and other
                behavioral/mental wellness conditions
              </p>
            </div>

            <div className="p-8 text-center rounded-xl shadow-md transition-all duration-200 hover:shadow-lg">
              <div className="flex justify-center items-center mx-auto mb-6 w-16 h-16 rounded-full bg-brand-gold/10">
                <Users
                  className="text-brand-gold"
                  size={32}
                />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Family Support
              </h3>
              <p className="text-gray-600">
                Comprehensive family therapy, generational re-mapping and
                support programs to help aid in loved ones understand and
                support the recovery process and rebuilding relationship bonds
                with the recovering individual
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-brand-gold/10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Why Choose{" "}
                <span className="text-brand-blue">
                  Integrity Care Connection
                </span>
                ?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle
                    className="mt-1 text-green-500"
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
                    className="mt-1 text-green-500"
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
                    className="mt-1 text-green-500"
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
                    className="mt-1 text-green-500"
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
              <div className="p-8 bg-white rounded-2xl shadow-xl">
                <div className="text-center">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    Ready to Start Your Recovery?
                  </h3>
                  <p className="mb-6 text-gray-600">
                    Take the first step towards healing and recovery. Our
                    compassionate team is here to support you every step of the
                    way.
                  </p>
                  <div className="space-y-4">
                    <Link
                      href="/contact"
                      className="block px-6 py-3 w-full font-semibold text-center text-white rounded-lg transition-colors duration-200 bg-brand-blue hover:bg-brand-blue-dark"
                    >
                      Schedule a Consultation
                    </Link>
                    <Link
                      href="/programs"
                      className="block px-6 py-3 w-full font-semibold text-center rounded-lg border-2 transition-colors duration-200 border-brand-blue text-brand-blue hover:bg-brand-blue/5"
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
        <div className="px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Don't Wait - Help is Available Now
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-brand-blue/80">
            Recovery is possible, and it starts with reaching out. Our team of
            compassionate professionals is ready to help you take the first step
            towards a healthier, happier life.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/contact"
              className="px-8 py-4 text-lg font-semibold bg-white rounded-lg transition-colors duration-200 text-brand-blue hover:bg-gray-100"
            >
              Get Help Today
            </Link>
            <a
              href="tel:5551234567"
              className="px-8 py-4 text-lg font-semibold text-white rounded-lg border-2 border-white transition-colors duration-200 hover:bg-white hover:text-brand-blue"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
