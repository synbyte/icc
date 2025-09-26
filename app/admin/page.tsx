"use client";

import { useState, useEffect } from "react";
import { supabase, type Contact } from "@/lib/supabase";
import { Eye, X, Mail, Phone, Clock, AlertTriangle, User } from "lucide-react";

interface LoginCredentials {
  username: string;
  password: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState<LoginCredentials>({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check if user is already authenticated on page load
  useEffect(() => {
    const authStatus = localStorage.getItem("icc_admin_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch contacts when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchContacts();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (loginData.username === "admin" && loginData.password === "Icc7788!") {
      setIsAuthenticated(true);
      localStorage.setItem("icc_admin_auth", "true");
      setLoginError("");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("icc_admin_auth");
    setLoginData({ username: "", password: "" });
  };

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching contacts:", error);
      } else {
        setContacts(data || []);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (contact: Contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedContact(null);
    setIsModalOpen(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "crisis":
        return "bg-red-100 text-red-800 border-red-200";
      case "urgent":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-green-100 text-green-800 border-green-200";
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case "crisis":
        return <AlertTriangle size={16} className="text-red-600" />;
      case "urgent":
        return <Clock size={16} className="text-orange-600" />;
      default:
        return <Clock size={16} className="text-green-600" />;
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="space-y-8 w-full max-w-md">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Admin Login
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Access contact form submissions
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="p-8 bg-white rounded-2xl shadow-xl">
              {loginError && (
                <div className="p-3 mb-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm text-red-600">{loginError}</p>
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={loginData.username}
                    onChange={(e) =>
                      setLoginData({ ...loginData, username: e.target.value })
                    }
                    className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="Username"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="px-6 py-3 w-full font-semibold text-white rounded-lg transition-colors duration-200 bg-brand-blue hover:bg-brand-blue-dark"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Contact Submissions
              </h1>
              <span className="px-3 py-1 ml-4 text-sm rounded-full bg-brand-blue/10 text-brand-blue">
                {contacts.length} total
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm text-gray-600 rounded-lg border border-gray-300 transition-colors duration-200 hover:text-gray-900 hover:bg-gray-50"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-8 h-8 rounded-full border-4 animate-spin border-brand-blue border-t-transparent"></div>
          </div>
        ) : (
          <div className="overflow-hidden bg-white rounded-2xl shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Contact Info
                    </th>
                    <th className="px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Subject
                    </th>
                    <th className="px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Urgency
                    </th>
                    <th className="px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Date
                    </th>
                    <th className="px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {contacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className="cursor-pointer hover:bg-gray-50"
                      onClick={() => openModal(contact)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex justify-center items-center mr-4 w-10 h-10 rounded-full bg-brand-blue/10">
                            <User size={20} className="text-brand-blue" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {contact.full_name}
                            </div>
                            <div className="flex items-center mt-1 text-sm text-gray-500">
                              <Mail size={14} className="mr-1" />
                              {contact.email}
                            </div>
                            {contact.phone && (
                              <div className="flex items-center mt-1 text-sm text-gray-500">
                                <Phone size={14} className="mr-1" />
                                {contact.phone}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {contact.subject}
                        </div>
                        <div className="text-sm text-gray-500 capitalize">
                          Prefers: {contact.method}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getUrgencyColor(
                            contact.urgency
                          )}`}
                        >
                          {getUrgencyIcon(contact.urgency)}
                          <span className="ml-1 capitalize">
                            {contact.urgency}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {formatDate(contact.created_at)}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(contact);
                          }}
                          className="text-brand-blue hover:text-brand-blue-dark"
                        >
                          <Eye size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {contacts.length === 0 && (
                <div className="py-12 text-center">
                  <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-gray-100 rounded-full">
                    <Mail size={32} className="text-gray-400" />
                  </div>
                  <p className="text-gray-500">No contact submissions yet.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedContact && (
        <div className="flex fixed inset-0 z-50 justify-center items-center p-4 backdrop-blur-sm bg-black/30">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">
                Contact Details
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Contact Info */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Full Name
                  </label>
                  <p className="mt-1 text-lg text-gray-900">
                    {selectedContact.full_name}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Email
                  </label>
                  <p className="mt-1 text-lg text-gray-900">
                    <a
                      href={`mailto:${selectedContact.email}`}
                      className="text-brand-blue hover:underline"
                    >
                      {selectedContact.email}
                    </a>
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Phone
                  </label>
                  <p className="mt-1 text-lg text-gray-900">
                    {selectedContact.phone ? (
                      <a
                        href={`tel:${selectedContact.phone}`}
                        className="text-brand-blue hover:underline"
                      >
                        {selectedContact.phone}
                      </a>
                    ) : (
                      "Not provided"
                    )}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Preferred Contact Method
                  </label>
                  <p className="mt-1 text-lg text-gray-900 capitalize">
                    {selectedContact.method}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Urgency Level
                  </label>
                  <div className="mt-1">
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getUrgencyColor(
                        selectedContact.urgency
                      )}`}
                    >
                      {getUrgencyIcon(selectedContact.urgency)}
                      <span className="ml-1 capitalize">
                        {selectedContact.urgency}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Submitted On
                  </label>
                  <p className="mt-1 text-lg text-gray-900">
                    {formatDate(selectedContact.created_at)}
                  </p>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Subject
                </label>
                <p className="mt-1 text-lg text-gray-900">
                  {selectedContact.subject}
                </p>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Message
                </label>
                <div className="p-4 mt-1 bg-gray-50 rounded-lg">
                  <p className="text-gray-900 whitespace-pre-wrap">
                    {selectedContact.message}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end pt-4 space-x-4 border-t">
                <a
                  href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}&body=${encodeURIComponent(
    `\n\n--- Original Message ---\n${selectedContact.message}`
  )}`}
                  className="px-4 py-2 text-white rounded-lg transition-colors duration-200 bg-brand-blue hover:bg-brand-blue-dark"
                >
                  Reply via Email
                </a>
                {selectedContact.phone && (
                  <a
                    href={`tel:${selectedContact.phone}`}
                    className="px-4 py-2 rounded-lg border transition-colors duration-200 border-brand-blue text-brand-blue hover:bg-brand-blue/5"
                  >
                    Call
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}