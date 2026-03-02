import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  Search, 
  Users, 
  Clock, 
  ShieldCheck, 
  Gift, 
  DollarSign, 
  Mail,
  MessageCircle
} from 'lucide-react';
import { cn } from '../lib/utils';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={cn(
          "text-lg font-bold transition-colors",
          isOpen ? "text-brand-primary" : "text-slate-800 group-hover:text-brand-primary"
        )}>
          {question}
        </span>
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center transition-all",
          isOpen ? "bg-brand-primary text-white rotate-180" : "bg-slate-50 text-slate-400"
        )}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-slate-600 leading-relaxed font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const sections = [
    {
      title: "General Questions",
      icon: <HelpCircle className="w-5 h-5 text-blue-600" />,
      bg: "bg-blue-50",
      questions: [
        {
          question: "What is Grow With Med?",
          answer: "Grow With Med is a platform dedicated to helping creators, marketers, and solopreneurs discover the best AI tools, marketing platforms, and digital services. We provide unbiased reviews, side-by-side comparisons, and actionable step-by-step guides to help you scale your online business faster."
        },
        {
          question: "Who is this website for?",
          answer: "Our content is designed for digital entrepreneurs of all levels. Whether you are a complete beginner looking to build your first sales funnel, or an experienced solopreneur wanting to automate workflows with AI, our resources are broken down to be simple and highly actionable."
        },
        {
          question: "How often do you update your reviews and tool lists?",
          answer: "The digital landscape moves fast, and so do we. Our tool database, top-rated lists, and software deals are updated daily to ensure you always have access to the most accurate pricing and features."
        }
      ]
    },
    {
      title: "Our Review Process",
      icon: <Search className="w-5 h-5 text-emerald-600" />,
      bg: "bg-emerald-50",
      questions: [
        {
          question: "How do you choose which tools to review?",
          answer: (
            <>
              We focus on software that solves real problems for digital creators. We look at market trends, community requests, and tools we personally use. We cover a wide range of categories, including AI writing (like SEOWriting AI), funnel building (<a href="https://systeme.io/?sa=sa0140081910bbe4c0e3a0bcc243f26de05a0a3535" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold hover:underline">Systeme.io</a>), YouTube growth (vidIQ, TubeBuddy), and automation (Make.com).
            </>
          )
        },
        {
          question: "Do you really test the tools yourself?",
          answer: "Yes. Our mission is to bring transparency to the digital growth space. We spend over 40 hours testing each service, exploring its features, pushing its limits, and analyzing its pricing before we write a single word of a review."
        },
        {
          question: "Are your rankings paid or sponsored?",
          answer: "No. We have a strict data-driven approach, and we do not accept payment to inflate a tool's rating or rank it artificially. If a tool has a \"Sponsored\" tag (like Blogify in some instances), it will be clearly labeled so you always know exactly what you are clicking on."
        }
      ]
    },
    {
      title: "Free Resources & Newsletter",
      icon: <Gift className="w-5 h-5 text-purple-600" />,
      bg: "bg-purple-50",
      questions: [
        {
          question: "Are your growth resources actually free?",
          answer: "Absolutely. All of our curated resources—including the SEO Checklist for 2026, High-Converting Funnel Template, YouTube Growth Starter Kit, and AI Automation Workflow Map—are 100% free forever."
        },
        {
          question: "What do I get when I join the newsletter?",
          answer: "When you join our community of 50,000+ creators, you will receive our weekly growth breakdown. This includes the latest tool reviews, exclusive software deals, and actionable strategies to grow your traffic and revenue. We promise no spam—only growth. You can unsubscribe at any time."
        }
      ]
    },
    {
      title: "Affiliate Links & Monetization",
      icon: <DollarSign className="w-5 h-5 text-amber-600" />,
      bg: "bg-amber-50",
      questions: [
        {
          question: "How does Grow With Med make money?",
          answer: "Grow With Med is reader-supported. We monetize our site through affiliate marketing. This means that if you click on a link to a tool we recommend and make a purchase, we may earn a small commission from the software provider."
        },
        {
          question: "Does buying through your links cost me more?",
          answer: "Not at all! Buying through our affiliate links never costs you extra. In fact, because of our partnerships with these platforms, clicking our links will sometimes get you access to exclusive extended free trials or discounts."
        }
      ]
    },
    {
      title: "Contact & Support",
      icon: <MessageCircle className="w-5 h-5 text-rose-600" />,
      bg: "bg-rose-50",
      questions: [
        {
          question: "Can I suggest a tool for your team to review?",
          answer: "We love discovering new tools! If there is an AI tool, SEO software, or marketing platform you want us to test, please get in touch with us at info@growwithmed.site."
        },
        {
          question: "I need help with a tool I purchased through your site. Can you help?",
          answer: (
            <>
              While we provide detailed guides and tutorials, we do not provide direct technical support for third-party software. If you are experiencing technical issues with a platform like Hostinger or <a href="https://systeme.io/?sa=sa0140081910bbe4c0e3a0bcc243f26de05a0a3535" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold hover:underline">Systeme.io</a>, please reach out directly to their official customer support teams.
            </>
          )
        }
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white border-b border-slate-100 pt-20 pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <HelpCircle className="w-8 h-8 text-brand-primary" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 font-medium max-w-2xl mx-auto"
          >
            Welcome to the Grow With Med FAQ! If you have a question that isn't answered here, feel free to reach out to us.
          </motion.p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="max-w-4xl mx-auto px-4 -mt-12">
        <div className="space-y-8">
          {sections.map((section, sectionIdx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + sectionIdx * 0.1 }}
              className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", section.bg)}>
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-display font-black text-slate-900">{section.title}</h2>
                </div>
                <div className="space-y-2">
                  {section.questions.map((q) => (
                    <FAQItem key={q.question} {...q} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-brand-primary rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-primary/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h3 className="text-3xl font-display font-black mb-4">Still have questions?</h3>
            <p className="text-white/80 mb-8 font-medium max-w-lg mx-auto">
              We're here to help you navigate the digital growth landscape. Send us an email and we'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:info@growwithmed.site"
              className="inline-flex items-center gap-3 bg-white text-brand-primary px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-colors shadow-lg"
            >
              <Mail className="w-5 h-5" />
              info@growwithmed.site
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
