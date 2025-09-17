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
import Image from "next/image";

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
      <section className="flex overflow-hidden relative items-center minn-h-screen">
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
        <div className="absolute left-10 top-20 w-32 h-32 rounded-full blur-xl animate-pulse bg-white/10"></div>
        <div className="absolute right-10 bottom-20 w-48 h-48 rounded-full blur-2xl delay-1000 animate-pulse bg-brand-gold/20"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full blur-lg delay-500 animate-pulse bg-white/5"></div>

        <div className="relative px-4 mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center min-h-[80vh] flex flex-col justify-center">
            {/* Main Headline */}
            <div className="mb-8 space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight text-white animate-in fade-in slide-in-from-bottom duration-1000">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-500 from-brand-gold">
                  Services
                </span>
              </h1>

              <p className="mx-auto max-w-4xl text-xl leading-relaxed duration-1000 md:text-2xl text-white/90 animate-in fade-in slide-in-from-bottom">
                We provide comprehensive, evidence-based treatment services
                designed to address substance abuse and mental health challenges
                with{" "}
                <span className="font-semibold text-brand-gold">
                  compassion, expertise, and personalized care.
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 justify-center mb-12 sm:flex-row">
              <Link
                href="/contact"
                className="flex justify-center items-center px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 transform group bg-brand-gold text-brand-blue hover:bg-brand-gold-light hover:scale-105 hover:shadow-2xl"
              >
                Schedule a Consultation
              </Link>
              <a
                href="tel:5551234567"
                className="flex justify-center items-center px-8 py-4 text-lg font-semibold text-white rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 group border-white/30 hover:bg-white/10 hover:border-white/50"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
 {/*Quote */}
 <section className="py-20 bg-brand-gold">
        <div className="px-4 mx-auto max-w-4xl text-center sm:px-6 lg:px-8">
          <blockquote className="mb-8 text-2xl font-medium leading-relaxed text-white md:text-3xl">
          “Don’t judge each day by the harvest you reap but by the seeds that you plant.”
          </blockquote>
          <cite className="text-xl font-semibold text-white">
            — Robert Louis Stevenson
          </cite>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 bg-linear-to-b from-brand-gold/20 to-brand-blue/10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg transition-shadow duration-200 hover:shadow-xl"
              >
                <div
                  className={`w-16 h-16 ${getColorClasses(
                    service.color
                  )} rounded-full flex items-center justify-center mb-6`}
                >
                  <service.icon size={32} />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-6 text-gray-600">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-2"
                    >
                      <CheckCircle
                        className="mt-1 text-green-500"
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
      <section className="py-20 bg-brand-blue/10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Treatment Approach
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We believe in a holistic, person-centered approach to treatment
              that addresses the whole person, not just their symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 rounded-full border border-brand-blue bg-brand-blue/10">
                <span className="text-2xl font-bold text-brand-blue">1</span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Assessment
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive evaluation to understand your unique needs,
                challenges, and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 rounded-full border border-brand-gold bg-brand-gold/10">
                <span className="text-2xl font-bold text-brand-gold">2</span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Planning
              </h3>
              <p className="text-sm text-gray-600">
                Development of a personalized treatment plan tailored to your
                specific situation.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 rounded-full border border-brand-blue bg-brand-blue/10">
                <span className="text-2xl font-bold text-brand-blue">3</span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Treatment
              </h3>
              <p className="text-sm text-gray-600">
                Implementation of evidence-based therapies and interventions in
                a supportive environment.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 rounded-full border border-brand-gold bg-brand-gold/10">
                <span className="text-2xl font-bold text-brand-gold">4</span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Recovery
              </h3>
              <p className="text-sm text-gray-600">
                Ongoing support and aftercare to help you maintain your progress
                and prevent relapse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance and Payment */}
      <section className="py-20 bg-brand-blue">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                Insurance & Payment Options
              </h2>
              <p className="mb-8 text-lg text-gray-200">
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
                  <span className="text-gray-200">
                    Most major insurance plans accepted
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle
                    className="text-green-500"
                    size={20}
                  />
                  <span className="text-gray-200">
                    Sliding scale fees available
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle
                    className="text-green-500"
                    size={20}
                  />
                  <span className="text-gray-200">
                    Payment plans and financing options
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle
                    className="text-green-500"
                    size={20}
                  />
                  <span className="text-gray-200">
                    Free initial consultation
                  </span>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-brand-blue-dark">
              <h3 className="mb-6 text-2xl font-bold text-white">
                Ready to Get Started?
              </h3>
              <p className="mb-6 text-gray-200">
                Contact us today to learn more about our services and how we can
                help you or your loved one.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block px-6 py-3 w-full font-semibold text-center text-white rounded-lg transition-colors duration-200 bg-brand-blue hover:bg-brand-blue-dark"
                >
                  Schedule a Consultation
                </Link>
                <div className="text-center">
                  <p className="mb-2 text-gray-200">Or call us directly:</p>
                  <a
                    href="tel:5551234567"
                    className="text-lg font-semibold text-white hover:underline"
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
        <div className="px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
          <div className="p-8 mx-auto max-w-4xl bg-white rounded-2xl shadow-xl">
            <div className="flex justify-center items-center mb-6">
              <Phone
                className="mr-3 text-red-600"
                size={32}
              />
              <h2 className="text-3xl font-bold text-gray-900">
                24/7 Crisis Support
              </h2>
            </div>
            <p className="mb-8 text-lg text-gray-600">
              If you or someone you know is experiencing a mental health crisis
              or needs immediate support, we're here to help around the clock.
            </p>
            <div className="p-6 mb-8 bg-red-100 rounded-lg border border-red-200">
              <div className="mb-2 text-2xl font-bold text-red-700">
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
