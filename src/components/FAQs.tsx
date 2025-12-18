"use client";
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import { motion, AnimatePresence } from "framer-motion";
const items = [
  {
    question: "What types of IT services do you provide?",
    answer:
      "We offer comprehensive IT consulting services including cloud infrastructure, cybersecurity solutions, software development, system integration, digital transformation, and ongoing technical support. Our services are tailored to meet your specific business needs and industry requirements.",
  },
  {
    question: "How do you ensure service quality and reliability?",
    answer:
      "We maintain strict SLA commitments with 99.9% uptime guarantees, 24/7 monitoring, and dedicated support teams. Our ISO-certified processes and rigorous quality assurance protocols ensure consistent, reliable service delivery across all engagements.",
  },
  {
    question:
      "Can you integrate with our existing systems and third-party tools?",
    answer:
      "Absolutely. We specialize in seamless integration with existing infrastructure and third-party platforms. Our team conducts thorough compatibility assessments and implements custom integration solutions to ensure smooth interoperability without disrupting your current operations.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "Security and compliance are foundational to our service delivery. We adhere to industry standards including ISO 27001, SOC 2, GDPR, and HIPAA where applicable. All data is encrypted in transit and at rest, with multi-layered security controls, regular audits, and strict access management protocols to protect your sensitive information.",
  },
];

const AccordinationItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className=" py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black ">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordinationItem
              question={question}
              answer={answer}
              key={question}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
