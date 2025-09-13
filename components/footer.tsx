import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Integrity Care Connection"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">Integrity Care Connection</h3>
                <p className="text-sm text-gray-400">
                  Healing • Hope • Recovery
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Providing compassionate, evidence-based treatment for substance
              abuse and mental health challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/patient"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Substance Abuse Treatment</li>
              <li>Mental Health Counseling</li>
              <li>Individual Therapy</li>
              <li>Group Therapy</li>
              <li>Family Support</li>
              <li>Crisis Intervention</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
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
                  className="text-brand-gold mt-1"
                />
                <span className="text-gray-300">
                  123 Recovery Street
                  <br />
                  Hope City, HC 12345
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
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Integrity Care Connection. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
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
