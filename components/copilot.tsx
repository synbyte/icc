"use client"
import { CopilotPopup, ButtonProps, useChatContext, useCopilotChatSuggestions} from "@copilotkit/react-ui";
import { useCopilotReadable, SuggestionItem, useCopilotAdditionalInstructions } from "@copilotkit/react-core";
import { useState, ReactNode } from "react";


interface CopilotWrapperProps {
    children?: ReactNode;
}

const CopilotWrapper = ({ children }: CopilotWrapperProps) => {
    
    const [programs, setPrograms] = useState([
        {
            title: "Partial Hospitalization Program Services",
            duration: "16-24 weeks",
            schedule: "4-6 sessions per week",
            description:
              "Partial Hospitalization Programming (PHP) is a type of counseling services that is performed in four (4) hour blocks of time that combines individual, group, peer services and other sessions, Monday - Friday.  PHP services offer a more structured, intense therapy utilizing a wide range of techniques that include CBT, DBT, TF-CBT, MI and Contingency Management.  Individuals whose intake confirms they meet the ASAM criteria for this program go home each day",
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
            title: "Intensive Outpatient Treatment",
            duration: "12-24 weeks",
            schedule: "3-5 sessions per week",
            description:
              "Another intensive treatment program, combining individual, group and other sessions in a three (3) hour block of time Monday - Friday.  IOP programming utilizes many of the same techniques mentioned above under PHP services and is similar in that its sessions are more intense but offer the same comprehensive support services",
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
            title: "Gambling Addiction Recovery",
            duration: "12-20 weeks",
            schedule: "3-4 sessions per week suggested, but numbers can vary",
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
            schedule: "2-3 sessions per week suggested, but numbers can vary",
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
            schedule: "2-3 sessions per week suggested, but numbers can vary",
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
        {
            title: "Individual Therapy",
            discription: "Weekly individual treatment sessions ensuring each person addresses their unique needs and has the opportunity to be heard as an active decision maker in their treatment.",
            features: [
                "Weekly individual sessions",
                "In-person or telehealth options",
                "Treatment plan updates as needed",
                "Qualified mental health professional oversight"
            ],
        },
        {
            title: "Group Therapy",
            discription: "Daily group sessions allowing patients to see they're not alone and learn from others' experiences, failures, and successes on their wellness journey.",
            features: [
                "Daily group sessions",
                "Addiction, relapse, and recovery topics",
                "Life skills and psychosocial education",
                "Meditation, yoga, and arts activities"
            ],
        },
        {
            title: "Family Therapy",
            discription: "Encouraging reconnection with family in a safe environment, moderated by professional staff to repair damaged bonds and embrace the future as a unit.",
            features: [
                "Safe family discussions",
                "Parent training and coaching",
                "Professional moderation",
                "Bond repair and healing"
            ],
        },
        {
            title: "Spiritual Acceptance Therapy",
            discription: "Supporting all patients in their chosen beliefs or lack thereof, with community partnerships providing religious services and culturally specific spiritual needs.",
            features: [
                "Inclusive spiritual support",
                "Community religious services",
                " Cultural spiritual needs",
                "Professional counseling sessions"
            ],
        },
        {
            title: "Life Skills Mentoring",
            discription: "Supporting all patients in their chosen beliefs or lack thereof, with community partnerships providing religious services and culturally specific spiritual needs.",
            features: [
                "Inclusive spiritual support",
                "Community religious services",
                " Cultural spiritual needs",
                "Professional counseling sessions"
            ],
        },
        {
            title: "PsychoSocial/Educational Counseling",
            description: "Guidance with resume building, job preparedness, financial counseling, educational needs, and all tools necessary for educational, employment, and financial success.",
            features: [
                "Resume building and job skills",
                "Financial counseling and budgeting",
                "Educational support and GED prep",
                "Professional development"
            ],
        },
        {
            title: "Health & Nutrition; Fitness",
            description: "Encouraging physical fitness and proper nutrition through community partnerships with nutritionists and fitness centers, tailored to each individual's wellness journey.",
            features: [
                "Personalized fitness plans",
                "Nutrition counseling",
                "Community fitness partnerships",
                "Mental and physical wellness"
            ],
        },
        {
            title: "Mental Clarity Sessions",
            description: "Supporting overall brain health through meditation, stretching, yoga, mental exercises, relaxation techniques, and coping skills for mind, body, and spirit.",
            features: [
                "Meditation and yoga",
                "Mental exercises",
                "Relaxation techniques",
                "Coping skills development"
            ],
        },
        {
            title: "Peer Support Sessions",
            description: "Sessions led by certified Peer Specialists who speak from lived experiences, providing living proof that substance use and mental health issues can be overcome.",
            features: [
                "Certified Peer Specialists",
                "Lived experience sharing",
                "Real-life success stories",
                "Peer-to-peer encouragement"
            ],
        },
        {
            title: "Individual/Group Outings",
            description: "Fun, safe activities designed to immerse patients in community settings, teaching socially acceptable behaviors and encouraging healthy, sober community engagement.",
            features: [
                "Community integration activities",
                "Cultural and ethnic specific events",
                "Social skills development",
                "Life balance support"
            ],
        },
        {
            title: "AA/Gamblers A/NA/ALANON",
            description: "Encouraging participation in community support programs to gain different insights on coping, failure, and success from others on similar journeys.",
            features: [
                "Community meeting referrals",
                "Cultural/ethnic specific groups",
                "Peer support integration",
                "Recovery toolbox building"
            ],
        },
        {
            title: "Open Sharing/Talking Circle",
            description: "Open sessions for patients to share their journeys, discuss what works and what doesn't, and bond with others while providing mutual support and encouragement.",
            features: [
                "Open sharing sessions",
                "Peer-to-peer advice",
                "Staff-monitored discussions",
                "Mutual encouragement"
            ],
        },
        {
            title: "Wellness Team",
            description: "Our comprehensive team includes licensed behavioral/mental health professionals, medical professionals, counselors, community health workers, peer support specialists, and case managers.",
            features: [
                "Licensed professionals",
                "Medical health professionals",
                "Community health workers",
                "Peer support specialists"
            ],
        }
    ])
    
    useCopilotReadable({
        description: "Available treatment programs at Integrity Care Connection",
        value: programs,
    });
    useCopilotChatSuggestions({
        instructions: "Suggest questions that can be asked.",
        maxSuggestions:3
    })
    useCopilotAdditionalInstructions({
        instructions:"If you cannot find an answer in programs data provided, tell them to contact Integrity Care Connection by submitting the contact form or calling 555-555-1234."
    })
    
  return (
    <div className="relative z-50">
      {children}
          <CopilotPopup
              Button={Button}
        className="z-50"
        instructions={"You are an assistant working for a treatment center called Integrity Care Connection. Your job is to provide information about services and programs and to answer any questions related to the center and its services. If you aren't sure about the answer tell the person to contact Integrity Care Connection by submitting the contact form or calling 555-555-1234."}
        labels={{
          title: "Integrity Care Connection Assistant",
          initial: "How can I help you?",
              }}
       
        
      />
    </div>
  );
};

function Button({}: ButtonProps) {
    const { open, setOpen } = useChatContext();
    const wrapperStyles = "w-24 bg-brand-blue text-white p-4 rounded-full text-center cursor-pointer";
    return (
      <div onClick={() => setOpen(!open)} className={wrapperStyles}>
        <button
          className={`${open ? "open" : ""}`}
          aria-label={open ? "Close Chat" : "Open Chat"}
        >
          Ask AI
        </button>
      </div>
    );
  };

export default CopilotWrapper