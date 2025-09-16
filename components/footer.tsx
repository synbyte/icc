import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Integrity Care Connection"
                width={40}
                height={40}
                className="w-auto h-10"
              />
              <div>
                <h3 className="text-lg font-bold">Integrity Care Connection</h3>
                <p className="text-sm text-gray-400">
                  Healing • Hope • Recovery
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Providing compassionate, evidence-based treatment for substance
              abuse and mental health challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/patient"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Substance Abuse Treatment</li>
              <li>Behvaioral/Mental Health Counseling</li>
              <li>Individual Therapy</li>
              <li>Group Therapy</li>
              <li>Family Support</li>
              <li>Crisis Intervention</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone
                  size={16}
                  className="text-brand-gold"
                />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail
                  size={16}
                  className="text-brand-gold"
                />
                <span className="text-gray-300">
                  info@integritycareconnection.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin
                  size={16}
                  className="mt-1 text-brand-gold"
                />
                <span className="text-gray-300">
                  815 SW 2nd Ave Suite 200
                  <br />
                  Portland, Oregon 97204
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock
                  size={16}
                  className="text-brand-gold"
                />
                <span className="text-gray-300">24/7 Crisis Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col justify-between items-center md:flex-row">
            <p className="text-sm text-gray-400">
              © 2024 Integrity Care Connection. All rights reserved.
            </p>
            <div className="flex mt-4 space-x-6 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
