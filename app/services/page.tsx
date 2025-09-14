import {
  Shield,
  Heart,
  Users,
  Brain,
  Pill,
  Activity,
  Phone,
  CheckCircle,
  User,
  Users2,
  Home,
  Sparkles,
  BookOpen,
  Apple,
  Lightbulb,
  HandHeart,
  MapPin,
  ClipboardList,
  Hospital,
  Gamepad2,
  AlertTriangle,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: User,
      title: "Individual Therapy",
      description:
        "One-on-one counseling sessions tailored to address personal mental health and addiction challenges",
      features: [
        "Personalized treatment plans",
        "Cognitive Behavioral Therapy (CBT)",
        "Dialectical Behavior Therapy (DBT)",
        "Trauma-informed care",
        "Crisis intervention support",
      ],
      color: "blue",
    },
    {
      icon: Users2,
      title: "Group Therapy",
      description:
        "Therapeutic group sessions providing peer support and shared healing experiences",
      features: [
        "Peer support and connection",
        "Shared experiences and insights",
        "Social skills development",
        "Group dynamics exploration",
        "Collective healing process",
      ],
      color: "green",
    },
    {
      icon: Home,
      title: "Family Therapy",
      description:
        "Comprehensive family support to heal relationships and strengthen family bonds",
      features: [
        "Family communication skills",
        "Conflict resolution strategies",
        "Education about addiction and mental health",
        "Recovery planning for families",
        "Healing family dynamics",
      ],
      color: "purple",
    },
    {
      icon: Sparkles,
      title: "Spiritual Acceptance Therapy",
      description:
        "Integrating spiritual and mindfulness practices into the healing journey",
      features: [
        "Mindfulness and meditation",
        "Spiritual exploration",
        "Acceptance and commitment therapy",
        "Values clarification",
        "Inner peace and healing",
      ],
      color: "indigo",
    },
    {
      icon: BookOpen,
      title: "Life Skills Mentoring",
      description:
        "Practical life skills training to support successful recovery and independent living",
      features: [
        "Job readiness and career planning",
        "Financial management skills",
        "Time management and organization",
        "Communication and social skills",
        "Problem-solving strategies",
      ],
      color: "orange",
    },
    {
      icon: Brain,
      title: "Psychosocial/Educational",
      description:
        "Educational programs to understand mental health, addiction, and recovery processes",
      features: [
        "Mental health education",
        "Addiction science and recovery",
        "Coping strategies and techniques",
        "Relapse prevention education",
        "Wellness and self-care practices",
      ],
      color: "red",
    },
    {
      icon: Apple,
      title: "Health Nutrition Fitness",
      description:
        "Holistic wellness approach focusing on physical health, nutrition, and fitness",
      features: [
        "Nutritional counseling and planning",
        "Physical fitness programs",
        "Health and wellness education",
        "Stress management techniques",
        "Lifestyle modification support",
      ],
      color: "green",
    },
    {
      icon: Lightbulb,
      title: "Mental Clarity Sessions",
      description:
        "Specialized sessions to improve cognitive function, focus, and mental clarity",
      features: [
        "Cognitive enhancement techniques",
        "Memory and concentration training",
        "Decision-making skills",
        "Mental fog reduction",
        "Clarity and focus improvement",
      ],
      color: "blue",
    },
    {
      icon: HandHeart,
      title: "Peer Support Sessions",
      description:
        "Peer-led support groups providing encouragement and shared experiences",
      features: [
        "Peer mentorship programs",
        "Shared recovery experiences",
        "Mutual support and encouragement",
        "Community building",
        "Role modeling and inspiration",
      ],
      color: "purple",
    },
    {
      icon: MapPin,
      title: "Individual/Group Outings",
      description:
        "Therapeutic recreational activities and outings to build social connections",
      features: [
        "Community integration activities",
        "Social skills practice",
        "Recreational therapy",
        "Team building exercises",
        "Healthy leisure activities",
      ],
      color: "orange",
    },
    {
      icon: ClipboardList,
      title: "Case Management",
      description:
        "Comprehensive case management to coordinate care and support services",
      features: [
        "Care coordination and planning",
        "Resource connection and referrals",
        "Progress monitoring and tracking",
        "Advocacy and support",
        "Treatment plan coordination",
      ],
      color: "indigo",
    },
    {
      icon: Hospital,
      title: "Partial Hospitalization",
      description:
        "Intensive day treatment program providing structured care without overnight stays",
      features: [
        "Daily structured programming",
        "Medical and psychiatric oversight",
        "Individual and group therapy",
        "Medication management",
        "Family involvement and support",
      ],
      color: "red",
    },
    {
      icon: Shield,
      title: "Substance Abuse Treatment",
      description:
        "Comprehensive treatment for alcohol, drug, gambling, and prescription medication addiction",
      features: [
        "Medically supervised detoxification",
        "Individual and group therapy",
        "Medication-assisted treatment (MAT)",
        "Gambling addiction treatment",
        "Relapse prevention planning",
      ],
      color: "blue",
    },
    {
      icon: Heart,
      title: "Mental Health Services",
      description:
        "Professional treatment for anxiety, depression, PTSD, and other mental health conditions",
      features: [
        "Anxiety and depression treatment",
        "PTSD and trauma therapy",
        "Disruptive behavior interventions",
        "Dissocial disorder treatment",
        "Crisis intervention support",
      ],
      color: "green",
    },
    {
      icon: Brain,
      title: "Dual Diagnosis Treatment",
      description:
        "Specialized care for co-occurring substance abuse and mental health disorders",
      features: [
        "Integrated treatment approach",
        "Co-occurring illness management",
        "Coordinated care planning",
        "Specialized therapy modalities",
        "Comprehensive assessment",
      ],
      color: "indigo",
    },
    {
      icon: Pill,
      title: "Medication Management",
      description:
        "Professional medication management for mental health and addiction treatment",
      features: [
        "Psychiatric evaluation",
        "Medication assessment and monitoring",
        "Side effect management",
        "Collaboration with therapists",
        "Ongoing medication optimization",
      ],
      color: "red",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-brand-blue/10 text-brand-blue",
      green: "bg-brand-gold/10 text-brand-gold",
      purple: "bg-purple-100 text-purple-600",
      indigo: "bg-indigo-100 text-indigo-600",
      orange: "bg-orange-100 text-orange-600",
      red: "bg-red-100 text-red-600",
    };
    return (
      colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600"
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue/5 to-brand-gold/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-brand-blue">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We provide comprehensive, evidence-based treatment services
              designed to address substance abuse and mental health challenges
              with compassion, expertise, and personalized care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-brand-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-blue-dark transition-colors duration-200"
              >
                Schedule a Consultation
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 p-8"
              >
                <div
                  className={`w-16 h-16 ${getColorClasses(
                    service.color
                  )} rounded-full flex items-center justify-center mb-6`}
                >
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-2"
                    >
                      <CheckCircle
                        className="text-green-500 mt-1"
                        size={16}
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Treatment Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in a holistic, person-centered approach to treatment
              that addresses the whole person, not just their symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-brand-blue">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Assessment
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation to understand your unique needs,
                challenges, and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-brand-gold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Planning
              </h3>
              <p className="text-gray-600 text-sm">
                Development of a personalized treatment plan tailored to your
                specific situation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-brand-blue">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Treatment
              </h3>
              <p className="text-gray-600 text-sm">
                Implementation of evidence-based therapies and interventions in
                a supportive environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-brand-gold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Recovery
              </h3>
              <p className="text-gray-600 text-sm">
                Ongoing support and aftercare to help you maintain your progress
                and prevent relapse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance and Payment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Insurance & Payment Options
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We work with most major insurance providers and offer flexible
                payment options to ensure treatment is accessible to everyone
                who needs it.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle
                    className="text-green-500"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Most major insurance plans accepted
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle
                    className="text-green-500"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Sliding scale fees available
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle
                    className="text-green-500"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Payment plans and financing options
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle
                    className="text-green-500"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Free initial consultation
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us today to learn more about our services and how we can
                help you or your loved one.
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
                24/7 Crisis Support
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              If you or someone you know is experiencing a mental health crisis
              or needs immediate support, we're here to help around the clock.
            </p>
            <div className="bg-red-100 border border-red-200 rounded-lg p-6 mb-8">
              <div className="text-2xl font-bold text-red-700 mb-2">
                Emergency Hotline
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
