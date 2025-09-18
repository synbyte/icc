"use client"
import { CopilotPopup, ButtonProps, useChatContext } from "@copilotkit/react-ui";
import { useCopilotReadable } from "@copilotkit/react-core";
import { useState } from "react";

const CopilotWrapper = ({ children }) => {
    
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
          }
    ])
    
    useCopilotReadable({
        description: "Available treatment programs at Integrity Care Connection",
        value: programs,
    });
  return (
    <div className="relative">
      {children}
          <CopilotPopup
              Button={Button}
        className="z-50"
        instructions={"You are an assistant working for a treatment center called Integrity Care Connection. Your job is to provide information about services and programs and to answer any questions related to the center and its services."}
        labels={{
          title: "Popup Assistant",
          initial: "Need any help?",
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