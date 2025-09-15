import {
  Clock,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  Phone,
  Heart,
  Shield,
  BookOpen,
  Home,
  Brain,
  UserCheck,
  Activity,
  Lightbulb,
  HandHeart,
  Stethoscope,
  FileText,
  Target,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Programs() {
  const programs = [
    {
      title: "Comprehensive Outpatient Treatment",
      duration: "12-24 weeks",
      schedule: "3-5 sessions per week",
      description:
        "Our primary treatment program combining individual therapy, group sessions, and comprehensive support services for substance use and behavioral health disorders.",
      features: [
        "Weekly individual therapy sessions",
        "Daily group therapy and support groups",
        "Family therapy and reconnection support",
        "Life skills mentoring and training",
        "PsychoSocial/Educational counseling",
        "Health, nutrition, and fitness support",
      ],
      intensity: "High",
      color: "blue",
    },
    {
      title: "Dual Diagnosis & Co-Occurring Disorders",
      duration: "16-24 weeks",
      schedule: "4-6 sessions per week",
      description:
        "Specialized program for individuals with co-occurring substance use and mental health disorders, providing integrated treatment approaches.",
      features: [
        "Integrated treatment approach",
        "Medical evaluation and blood workup",
        "Individual and group therapy",
        "Mental clarity and wellness sessions",
        "Peer support from lived experience",
        "Comprehensive care coordination",
      ],
      intensity: "High",
      color: "purple",
    },
    {
      title: "Gambling Addiction Recovery",
      duration: "12-20 weeks",
      schedule: "3-4 sessions per week",
      description:
        "Specialized program for gambling addiction disorders, addressing the unique challenges and providing targeted support for recovery.",
      features: [
        "Gambling-specific therapy sessions",
        "Financial counseling and budgeting",
        "Peer support from recovered individuals",
        "Family therapy and education",
        "Community meeting referrals (GA)",
        "Relapse prevention planning",
      ],
      intensity: "High",
      color: "green",
    },
    {
      title: "Family Recovery & Support",
      duration: "8-16 weeks",
      schedule: "2-3 sessions per week",
      description:
        "Comprehensive support program for families affected by addiction, focusing on healing relationships and building healthy communication.",
      features: [
        "Family therapy and reconnection",
        "Parent training and coaching",
        "Communication skills development",
        "Boundary setting education",
        "Spiritual acceptance support",
        "Community integration activities",
      ],
      intensity: "Medium",
      color: "orange",
    },
    {
      title: "Life Skills & Independence",
      duration: "8-12 weeks",
      schedule: "2-3 sessions per week",
      description:
        "Focused program on developing essential life skills, employment readiness, and independent living capabilities for sustained recovery.",
      features: [
        "Life skills mentoring and training",
        "Employment and educational support",
        "Financial counseling and budgeting",
        "Health and nutrition education",
        "Community integration outings",
        "Peer support and encouragement",
      ],
      intensity: "Medium",
      color: "indigo",
    },
    {
      title: "Ongoing Support & Aftercare",
      duration: "Ongoing",
      schedule: "Monthly meetings",
      description:
        "Long-term support program for program graduates, providing continued care and community connection to maintain recovery.",
      features: [
        "Monthly support group meetings",
        "Individual check-ins and monitoring",
        "Open sharing and talking circles",
        "Community event participation",
        "Peer mentorship opportunities",
        "24/7 crisis support access",
      ],
      intensity: "Low",
      color: "blue",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
      green: "bg-brand-gold/10 text-brand-gold border-brand-gold/20",
      purple: "bg-brand-gold/10 text-brand-gold border-brand-gold/20",
      orange: "bg-brand-gold/10 text-brand-gold border-brand-gold/20",
      indigo: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
      red: "bg-red-100 text-red-600 border-red-200",
    };
    return (
      colorMap[color as keyof typeof colorMap] ||
      "bg-gray-100 text-gray-600 border-gray-200"
    );
  };

  const getIntensityColor = (intensity: string) => {
    const intensityMap = {
      "Very High": "bg-red-100 text-red-800",
      High: "bg-orange-100 text-orange-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Low: "bg-green-100 text-green-800",
    };
    return (
      intensityMap[intensity as keyof typeof intensityMap] ||
      "bg-gray-100 text-gray-800"
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative minn-h-screen flex items-center overflow-hidden">
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
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-500">
                  Programs
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000">
                Our mission is to provide education, counseling, tools and
                support necessary for our patient/clients to achieve sobriety,
                self-reliance from addictive behaviors, and the ability to live
                a
                <span className="text-brand-gold font-semibold">
                  {" "}
                  healthy, productive, sober life.
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="group bg-brand-gold text-brand-blue px-8 py-4 rounded-2xl text-lg font-bold hover:bg-brand-gold-light transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl"
              >
                Get Started Today
              </Link>
              <a
                href="tel:5551234567"
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Comprehensive Approach
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                The mission, goal and purpose of Integrity Care Connections
                LLC's program is to provide education, counseling, tools and
                support necessary for our patient/clients to achieve sobriety,
                self-reliance from addictive behaviors, controlling
                behavioral/mental health issues and the ability to live a
                healthy, productive, sober life.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We do this by ensuring our outpatient treatment center is a
                welcoming, safe, comfortable and accepting environment that
                allows each individual to focus on their own healing journey
                surrounded by dedicated staff who meets them where they are and
                provides a hand up, not a hand out.
              </p>
              <p className="text-lg text-gray-600">
                Our experienced staff specializes in substance use disorders,
                gambling addiction disorders, behavioral/mental health issues,
                co-occurring illnesses and whole person, holistic approaches
                allowing us to identify and address each individual's behavioral
                and mental wellness.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart
                  className="text-brand-blue"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Welcoming Environment
              </h3>
              <p className="text-gray-600">
                Safe, comfortable, and accepting atmosphere for healing
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield
                  className="text-brand-gold"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Dedicated Staff
              </h3>
              <p className="text-gray-600">
                Licensed professionals who meet you where you are
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target
                  className="text-brand-blue"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Holistic Approach
              </h3>
              <p className="text-gray-600">
                Whole person wellness and individualized treatment plans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Coordination */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Care Coordination
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive admission process ensuring whole-person care
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Thorough Admission Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-green-500 mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Intake Paperwork
                    </h4>
                    <p className="text-gray-600">
                      Complete admission documentation and assessments
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-green-500 mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Behavioral Health Assessment
                    </h4>
                    <p className="text-gray-600">
                      Comprehensive evaluation by licensed professionals
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-green-500 mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Initial Treatment Plan
                    </h4>
                    <p className="text-gray-600">
                      Personalized plan approved by medical and mental health
                      professionals
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-green-500 mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Medical Evaluation
                    </h4>
                    <p className="text-gray-600">
                      Complete physical with metabolic blood workup by Medical
                      Director
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Stethoscope
                  className="text-brand-blue mr-3"
                  size={32}
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  Community Partnerships
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our community partnerships ensure that our patient/clients have
                access to the services they need that will best assist them with
                attaining their holistic health goals.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Globe
                    className="text-brand-gold"
                    size={16}
                  />
                  <span className="text-sm text-gray-600">
                    Medical services and specialists
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe
                    className="text-brand-gold"
                    size={16}
                  />
                  <span className="text-sm text-gray-600">
                    Mental health resources
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe
                    className="text-brand-gold"
                    size={16}
                  />
                  <span className="text-sm text-gray-600">
                    Community support services
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe
                    className="text-brand-gold"
                    size={16}
                  />
                  <span className="text-sm text-gray-600">
                    Educational and employment resources
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/*Quote */}
       <section className="py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
          “Sometimes the smallest step in the right direction ends of being the biggest step of your life. Tiptoe if you must, but take the step.”
          </blockquote>
          <cite className="text-xl text-white font-semibold">
            — Naeem Callaway
          </cite>
        </div>
      </section>

      {/* Program Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Program Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive treatment modalities designed to combat addictive
              behaviors from all perspectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Individual Therapy */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <UserCheck
                  className="text-brand-blue mr-3"
                  size={24}
                />
                <h3 className="text-xl font-bold text-gray-900">
                  Individual Therapy
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Weekly individual treatment sessions ensuring each person
                addresses their unique needs and has the opportunity to be heard
                as an active decision maker in their treatment.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Weekly individual sessions</li>
                <li>• In-person or telehealth options</li>
                <li>• Treatment plan updates as needed</li>
                <li>• Qualified Mental Health Professional oversight</li>
              </ul>
            </div>

            {/* Group Therapy */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Users
                  className="text-brand-gold mr-3"
                  size={24}
                />
                <h3 className="text-xl font-bold text-gray-900">
                  Group Therapy
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Daily group sessions allowing patients to see they're not alone
                and learn from others' experiences, failures, and successes on
                their wellness journey.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Daily group sessions</li>
                <li>• Addiction, relapse, and recovery topics</li>
                <li>• Life skills and psychosocial education</li>
                <li>• Meditation, yoga, and arts activities</li>
              </ul>
            </div>

            {/* Family Therapy */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Home
                  className="text-brand-blue mr-3"
                  size={24}
                />
                <h3 className="text-xl font-bold text-gray-900">
                  Family Therapy
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Encouraging reconnection with family in a safe environment,
                moderated by professional staff to repair damaged bonds and
                embrace the future as a unit.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Safe family discussions</li>
                <li>• Parent training and coaching</li>
                <li>• Professional moderation</li>
                <li>• Bond repair and healing</li>
              </ul>
            </div>

            {/* Spiritual Acceptance Therapy */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Heart
                  className="text-brand-gold mr-3"
                  size={24}
                />
                <h3 className="text-xl font-bold text-gray-900">
                  Spiritual Acceptance Therapy
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Supporting all patients in their chosen beliefs or lack thereof,
                with community partnerships providing religious services and
                culturally specific spiritual needs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Inclusive spiritual support</li>
                <li>• Community religious services</li>
                <li>• Cultural spiritual needs</li>
                <li>• Professional counseling sessions</li>
              </ul>
            </div>

            {/* Life Skills Mentoring */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <BookOpen
                  className="text-brand-blue mr-3"
                  size={24}
                />
                <h3 className="text-xl font-bold text-gray-900">
                  Life Skills Mentoring
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive life skills instruction covering basic hygiene,
                cleaning, cooking, appointments, parenting skills, and all
                facets of everyday living.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Basic hygiene and cleaning</li>
                <li>• Cooking and meal planning</li>
                <li>• Appointment management</li>
                <li>• Parenting skills training</li>
              </ul>
            </div>

            {/* PsychoSocial/Educational Counseling */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Lightbulb
                  className="text-brand-gold mr-3"
                  size={24}
                />
                <h3 className="text-xl font-bold text-gray-900">
                  PsychoSocial/Educational Counseling
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Guidance with resume building, job preparedness, financial
                counseling, educational needs, and all tools necessary for
                educational, employment, and financial success.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Resume building and job skills</li>
                <li>• Financial counseling and budgeting</li>
                <li>• Educational support and GED prep</li>
                <li>• Professional development</li>
              </ul>
            </div>

            {/* Health & Nutrition; Fitness */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Activity
                  className="text-brand-blue mr-3"
                  size={24}
                />
                <h3 className="text-xl font-bold text-gray-900">
                  Health & Nutrition; Fitness
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Encouraging physical fitness and proper nutrition through
                community partnerships with nutritionists and fitness centers,
                tailored to each individual's wellness journey.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Personalized fitness plans</li>
                <li>• Nutrition counseling</li>
                <li>• Community fitness partnerships</li>
                <li>• Mental and physical wellness</li>
              </ul>
            </div>

            {/* Mental Clarity Sessions */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Brain
                  className="text-brand-gold mr-3"
                  size={24}
                />
                <h3 className="text-xl font-bold text-gray-900">
                  Mental Clarity Sessions
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Supporting overall brain health through meditation, stretching,
                yoga, mental exercises, relaxation techniques, and coping skills
                for mind, body, and spirit.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Meditation and yoga</li>
                <li>• Mental exercises</li>
                <li>• Relaxation techniques</li>
                <li>• Coping skills development</li>
              </ul>
            </div>

            {/* Peer Support Sessions */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <HandHeart
                  className="text-brand-blue mr-3"
                  size={24}
                />
                <h3 className="text-xl font-bold text-gray-900">
                  Peer Support Sessions
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Sessions led by certified Peer Specialists who speak from lived
                experiences, providing living proof that substance use and
                mental health issues can be overcome.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Certified Peer Specialists</li>
                <li>• Lived experience sharing</li>
                <li>• Real-life success stories</li>
                <li>• Peer-to-peer encouragement</li>
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Additional Program Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Individual/Group Outings
                </h4>
                <p className="text-gray-600 mb-4">
                  Fun, safe activities designed to immerse patients in community
                  settings, teaching socially acceptable behaviors and
                  encouraging healthy, sober community engagement.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Community integration activities</li>
                  <li>• Cultural and ethnic specific events</li>
                  <li>• Social skills development</li>
                  <li>• Life balance support</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  AA/Gamblers A/NA/ALANON
                </h4>
                <p className="text-gray-600 mb-4">
                  Encouraging participation in community support programs to
                  gain different insights on coping, failure, and success from
                  others on similar journeys.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Community meeting referrals</li>
                  <li>• Cultural/ethnic specific groups</li>
                  <li>• Peer support integration</li>
                  <li>• Recovery toolbox building</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Open Sharing/Talking Circle
                </h4>
                <p className="text-gray-600 mb-4">
                  Open sessions for patients to share their journeys, discuss
                  what works and what doesn't, and bond with others while
                  providing mutual support and encouragement.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Open sharing sessions</li>
                  <li>• Peer-to-peer advice</li>
                  <li>• Staff-monitored discussions</li>
                  <li>• Mutual encouragement</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Wellness Team
                </h4>
                <p className="text-gray-600 mb-4">
                  Our comprehensive team includes licensed behavioral/mental
                  health professionals, medical professionals, counselors,
                  community health workers, peer support specialists, and case
                  managers.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Licensed professionals</li>
                  <li>• Medical health professionals</li>
                  <li>• Community health workers</li>
                  <li>• Peer support specialists</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4 gap-3">
                    <h3 className="text-2xl font-bold text-gray-900 flex-1 min-w-0">
                      {program.title}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 ${getIntensityColor(
                        program.intensity
                      )}`}
                    >
                      {program.intensity} Intensity
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">{program.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock
                        className="text-gray-400"
                        size={16}
                      />
                      <span className="text-sm text-gray-600">
                        <strong>Duration:</strong> {program.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar
                        className="text-gray-400"
                        size={16}
                      />
                      <span className="text-sm text-gray-600">
                        <strong>Schedule:</strong> {program.schedule}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Program Features:
                    </h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-2"
                        >
                          <CheckCircle
                            className="text-green-500 mt-1"
                            size={16}
                          />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full bg-brand-blue/10 text-brand-blue border-brand-blue/20 border-2 px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity duration-200 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight
                      className="ml-2"
                      size={16}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Selection Guide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Choose the Right Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team will work with you to determine the most appropriate
              program based on your individual needs, circumstances, and
              recovery goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users
                  className="text-brand-blue"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Assessment
              </h3>
              <p className="text-gray-600 text-center">
                We conduct a comprehensive evaluation to understand your
                specific needs, challenges, and goals before recommending a
                program.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle
                  className="text-brand-gold"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Recommendation
              </h3>
              <p className="text-gray-600 text-center">
                Based on your assessment, we'll recommend the program that best
                fits your needs and provide detailed information about what to
                expect.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight
                  className="text-brand-gold"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Get Started
              </h3>
              <p className="text-gray-600 text-center">
                Once you're ready, we'll help you enroll in your chosen program
                and begin your journey to recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Our Programs Work
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle
                    className="text-green-500 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Evidence-Based Approaches
                    </h3>
                    <p className="text-gray-600">
                      All our programs are grounded in proven therapeutic
                      methods and the latest research in addiction and mental
                      health treatment.
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
                      Personalized Treatment
                    </h3>
                    <p className="text-gray-600">
                      Each program is tailored to your unique needs,
                      circumstances, and recovery goals with regular adjustments
                      as you progress.
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
                      Experienced Professionals
                    </h3>
                    <p className="text-gray-600">
                      Our team includes licensed therapists, counselors, and
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
                      Ongoing Support
                    </h3>
                    <p className="text-gray-600">
                      Recovery is a lifelong journey. We provide continued
                      support and resources to help you maintain your progress
                      long after program completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Start Your Recovery Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us today to learn more about our programs and find the
                right fit for your recovery needs.
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
                Need Immediate Help?
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              If you or someone you know is experiencing a crisis and needs
              immediate support, we're here to help 24/7.
            </p>
            <div className="bg-red-100 border border-red-200 rounded-lg p-6 mb-8">
              <div className="text-2xl font-bold text-red-700 mb-2">
                24/7 Crisis Hotline
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
