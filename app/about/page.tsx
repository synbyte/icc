"use client";

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
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import fatthiImage from "./images/fatthi.webp";
import erinImage from "./images/erin.webp";
import shannonImage from "./images/shannon.webp";
import ometrisImage from "./images/ometris.webp";
import georgeImage from "./images/george.jpg";
import {cn} from "@/lib/utils";

export default function About() {
  const teamMembers = [
    {
      name: "Fatthi Sadeddin",
      title: "Founder",
      credentials: "",
      specialty: "Leadership & Vision",
      experience: "15+ years",
      image: fatthiImage,
      bio: "Bio coming soon...",
    },
    {
      name: "Erin Stark",
      title: "General Managing Director",
      credentials: "",
      specialty: "Operations & Management",
      experience: "12+ years",
      image: erinImage,
      bio: "Erin has been involved in the healthcare field for over 35 years. With a major emphasis on Revenue Cycle Management functions, Erin has assisted in opening 131 outpatient clinics in 27 states, over the years and continues to help providers with all service needs. Erin has been in management positions for the bulk of her career and has worked in a variety of settings including hospitals, SNF's, CCRC communities and behavioral health entities. Erin has worked in the behavioral health field for the last 15 years and has served as a Lead Behavioral Health Technician, a BHT Supervisor and leads group counseling, individual counseling, one on one sessions and mentor sessions for women, under the direction of Licensed Professional Counselors or other Licensed Professional Staff. Erin truly cares about our clients and helping them achieve their goals of attaining sobriety, regaining their independence and getting back to leading full, active, sober, productive lives.\n\nErin has three adult sons and four grandchildren. In her free time, she enjoys doing any thing outdoors, cooking, baking, reading and hanging out with her dog.",
    },
    {
      name: "George Hutchins",
      title: "Director of Operations",
      credentials: "",
      specialty: "Peer support specialist & recovery mentor",
      experience: "10+ years",
      image: georgeImage,
      bio: "George Hutchins serves as the Director of Operations at our treatment center, bringing both professional expertise and the perspective of someone who has walked the path of recovery. With years of sobriety and certifications as a Peer Support Specialist in multiple states, along with a Recovery Mentor certification, George understands firsthand the challenges of addiction—and the hope that comes from overcoming them.\n\nGeorge works closely with clients through one-on-one mentoring, group sessions, and supportive counseling under the guidance of licensed professionals. He believes in meeting each person where they are, helping them rebuild their lives, restore relationships, and move toward full, productive, sober living.\n\nA devoted father of four daughters and a son, George values family, connection, and community. Outside of work, he enjoys spending time outdoors, reading, and sharing moments with loved ones. His dedication to recovery and helping others succeed is at the heart of everything he does, inspiring both clients and colleagues alike. ",
    },
    {
      name: "Dr. Ometris King",
      title: "Clinical Director/CMHP/LPC",
      credentials: "",
      specialty: "Clinical Leadership & Mental Health",
      experience: "15+ years",
      image: ometrisImage,
      bio: "Bio coming soon...",
    },
  ];

  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[0] | null
  >(null);

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative minn-h-screen flex items-center overflow-hidden py-10 lg:py-0">
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
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight text-white animate-in fade-in slide-in-from-bottom duration-1000">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-500">
                  Integrity Care
                </span>
                <span className="block text-4xl md:text-5xl font-light">
                  Connection
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000">
                We are a dedicated team of mental health and addiction treatment
                professionals committed to providing compassionate,
                evidence-based care that{" "}
                <span className="text-brand-gold font-semibold">
                  transforms lives and strengthens communities.
                </span>
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <Award
                    className="text-brand-gold"
                    size={20}
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">
                    Dedicated Professionals
                  </div>
                  <div className="text-white/70 text-sm">
                    Experienced & Trained
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <Heart
                    className="text-brand-gold"
                    size={20}
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">
                    Evidence-Based Care
                  </div>
                  <div className="text-white/70 text-sm">
                    Proven treatment methods
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <Users
                    className="text-brand-gold"
                    size={20}
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">
                    Community Focused
                  </div>
                  <div className="text-white/70 text-sm">
                    Strengthening communities
                  </div>
                </div>
              </div>
            </div>
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
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-blue font-medium mb-2">
                    {member.title}
                  </p>
                  {member.credentials && (
                    <p className="text-sm text-gray-600 mb-2">
                      {member.credentials}
                    </p>
                  )}
                  <p className="text-sm text-gray-500 mb-4">
                    {member.specialty}
                  </p>
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="w-full bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-blue/90 transition-colors duration-200"
                  >
                    Read Bio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-8 rounded-xl bg-brand-blue/5">
            <Heart
              className="text-brand-blue mx-auto mb-6"
              size={48}
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Here at ICC, our mission is to provide compassionate, holistic,
              individual-centered and direct treatment and approach for
              individuals facing gambling, substance abuse and mental health
              challenges, empowering them to achieve lasting recovery and
              wellness. We strive to promote individual empowerment and increase
              access to treatment and services for persons living with
              behavioral health and mental health challenges. We are committed
              to excellence, integrity, and respect for diversity - creating a
              safe, collaborative environment where everyone is treated with
              dignity in the utmost confidence. By fostering hope and nurturing
              self determination, we support each person's unique journey toward
              healing and resilience. What separates Integrity Care Connections
              from other outpatient treatment centers, is our drive for
              excellence and unwavering determination to provide our clients
              with the tools, education and skills they need to create better,
              empowered lives and assist in helping them obtain healthier living
              conditions within the communities in which they live.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-8 rounded-xl bg-brand-gold/5">
            <Shield
              className="text-brand-gold mx-auto mb-6"
              size={48}
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Our vision is to improve the lives of those living with
              behavioral/mental issues and provide emotional wellness for
              individuals and families as we strive to deliver services and
              support necessary to improve the quality of life for children,
              youth, and adults with mental and behavioral/addictive challenges.
              We believe that, with the right personalised support, anyone with
              a behavioral and/or mental health need can live the life they want
              to live. It is our vision that everyone gets the personalised
              services and support they need.
            </p>
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

      {/* Founder's Quote */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
            "Our goal is to be a leader in improving the health and wellness of
            our community by providing inspired treatments, teaching our clients
            healthy practices, and promoting wellness education."
          </blockquote>
          <cite className="text-xl text-white font-semibold">
            — Fatthi Sadeddin, Founder
          </cite>
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

      {/* Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="text-brand-blue font-medium text-lg">
                    {selectedMember.title}
                  </p>
                  {selectedMember.credentials && (
                    <p className="text-sm text-gray-600">
                      {selectedMember.credentials}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedMember.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
