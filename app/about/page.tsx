import Image from "next/image";
import {
  Heart,
  Shield,
  Users,
  Award,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Clinical Director",
      credentials: "PhD, LCSW, CADC",
      specialty: "Substance Abuse & Trauma Therapy",
      experience: "15+ years",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Michael Chen",
      title: "Lead Therapist",
      credentials: "LPC, NCC",
      specialty: "Mental Health & Family Therapy",
      experience: "12+ years",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Dr. Robert Martinez",
      title: "Psychiatrist",
      credentials: "MD, Board Certified",
      specialty: "Dual Diagnosis & Medication Management",
      experience: "20+ years",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Jennifer Williams",
      title: "Family Counselor",
      credentials: "LMFT, AAMFT",
      specialty: "Family Systems & Recovery Support",
      experience: "10+ years",
      image: "/api/placeholder/300/300",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We approach every individual with empathy, understanding, and genuine care for their well-being and recovery journey.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our interactions and treatment approaches, earning trust through transparency and honesty.",
    },
    {
      icon: Users,
      title: "Connection",
      description:
        "We believe in the power of human connection and community in the healing process, fostering supportive relationships.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We are committed to providing the highest quality care through evidence-based practices and continuous professional development.",
    },
  ];

  const stats = [
    { number: "500+", label: "Lives Transformed" },
    { number: "15+", label: "Years of Service" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Crisis Support" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue/5 to-brand-gold/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="text-brand-blue">Integrity Care Connection</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are a dedicated team of mental health and addiction treatment
              professionals committed to providing compassionate, evidence-based
              care that transforms lives and strengthens communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-brand-blue/5">
              <Heart
                className="text-brand-blue mx-auto mb-6"
                size={48}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide compassionate, evidence-based treatment for substance
                abuse and mental health challenges, empowering individuals and
                families to achieve lasting recovery and wellness.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-brand-gold/5">
              <Shield
                className="text-brand-gold mx-auto mb-6"
                size={48}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                A world where every person struggling with addiction or mental
                health challenges has access to quality care and the support
                they need to heal and thrive.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-brand-gold/5">
              <Users
                className="text-brand-gold mx-auto mb-6"
                size={48}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Values
              </h3>
              <p className="text-gray-600">
                Compassion, integrity, connection, and excellence guide
                everything we do as we work to create a safe, supportive
                environment for healing and recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Integrity Care Connection was founded in 2009 by a group of
                  mental health professionals who recognized the need for
                  comprehensive, compassionate care for individuals struggling
                  with substance abuse and mental health challenges.
                </p>
                <p>
                  What started as a small outpatient clinic has grown into a
                  comprehensive treatment center serving hundreds of individuals
                  and families each year. Our founders believed that recovery is
                  possible for everyone, and that belief continues to drive our
                  work today.
                </p>
                <p>
                  Over the years, we have expanded our services, added
                  specialized programs, and built a team of dedicated
                  professionals who share our commitment to excellence and
                  compassion. We have seen countless individuals transform their
                  lives and rebuild their relationships, and we are honored to
                  be part of their journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Impact
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-brand-blue mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide our work and shape the culture
              of care we provide to every individual and family we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon
                    className="text-brand-blue"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of licensed professionals is dedicated to
              providing the highest quality care with compassion and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                    <Users
                      className="text-gray-500"
                      size={48}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-blue font-medium mb-2">
                    {member.title}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {member.credentials}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    {member.specialty}
                  </p>
                  <p className="text-xs text-gray-400">
                    {member.experience} experience
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation & Licenses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Accreditation & Licenses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of care through rigorous
              accreditation and licensing requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-brand-blue/5">
              <Award
                className="text-brand-blue mx-auto mb-4"
                size={48}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                State Licensed
              </h3>
              <p className="text-gray-600">
                Fully licensed by the state health department for substance
                abuse and mental health treatment.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-brand-gold/5">
              <CheckCircle
                className="text-brand-gold mx-auto mb-4"
                size={48}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                CARF Accredited
              </h3>
              <p className="text-gray-600">
                Commission on Accreditation of Rehabilitation Facilities (CARF)
                accredited for quality assurance.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-brand-gold/5">
              <Shield
                className="text-brand-gold mx-auto mb-4"
                size={48}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                HIPAA Compliant
              </h3>
              <p className="text-gray-600">
                Fully compliant with HIPAA regulations to ensure the privacy and
                security of your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl text-brand-blue/80 mb-8 max-w-3xl mx-auto">
            Our compassionate team is here to support you every step of the way.
            Contact us today to learn more about our services and how we can
            help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us Today
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
