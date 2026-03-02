import { motion } from 'motion/react';
import { Scale, Info, DollarSign, Copyright, ExternalLink, UserCheck, AlertTriangle, Gavel, RefreshCw, Mail } from 'lucide-react';

export default function Terms() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-white border-b border-slate-100 pt-20 pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <Scale className="w-8 h-8 text-brand-secondary" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6 tracking-tight"
          >
            Terms of Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 font-medium"
          >
            Effective Date: February 25, 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 -mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-8 md:p-16 space-y-12"
        >
          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-extrabold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
            <p className="text-lg font-medium text-slate-700">
              Welcome to Grow With Med ("we," "our," or "us"). By accessing or using our website and downloading any of our free resources, guides, or templates, you agree to comply with and be bound by the following Terms of Service. If you do not agree with these terms, please do not use our website.
            </p>

            <div className="pt-8 border-t border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl m-0">1. Acceptance of Terms</h2>
              </div>
              <p>
                By using Grow With Med, you agree to these Terms of Service and our Privacy Policy. This agreement outlines the rules for using our website, protects our intellectual property, and limits our legal liability.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <Info className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-2xl m-0">2. Informational Purposes Only</h2>
              </div>
              <p>
                The content provided on Grow With Med—including tool reviews, marketing guides, tutorials, and financial roadmaps (e.g., "The complete roadmap to your first $1,000/mo")—is for educational and informational purposes only. We are not financial, legal, or professional advisors. While we spend hours testing each service to provide data-driven insights, we do not guarantee specific results or financial success from using the tools or strategies mentioned.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-2xl m-0">3. Affiliate Disclosure</h2>
              </div>
              <p>
                Grow With Med is a review and comparison platform that participates in affiliate marketing. Regulatory guidelines require clear disclosures when a website uses affiliate links.
              </p>
              <p>
                This means that when you click on links to various tools or services (such as Systeme.io, Hostinger, Make.com, or vidIQ) and make a purchase, we may earn a commission at no additional cost to you. We only recommend products we have reviewed and believe bring value to creators and solopreneurs.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                  <Copyright className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-2xl m-0">4. Intellectual Property</h2>
              </div>
              <p>
                All content on this website, including but not limited to articles, tool reviews, graphics, logos, and downloadable resources (such as the SEO Checklist, High-Converting Funnel Template, and AI Automation Workflow Map), is the exclusive property of Grow With Med. You may use these materials for your personal, non-commercial business growth. You may not reproduce, distribute, or sell our content or templates as your own.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-2xl m-0">5. Third-Party Links and Services</h2>
              </div>
              <p>
                Our website contains links to third-party websites and tools. These links are provided for your convenience. We have no control over the content, terms, or privacy policies of these external sites. Once you leave Grow With Med to visit a third-party platform, you are subject to their specific terms and conditions. We are not responsible for any issues or disputes that arise between you and a third-party service provider.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                </div>
                <h2 className="text-2xl m-0">6. User Conduct</h2>
              </div>
              <p>When interacting with our website, subscribing to our newsletter, or downloading our resources, you agree not to:</p>
              <ul>
                <li>Use our site for any unlawful purpose.</li>
                <li>Attempt to hack, scrape, or disrupt the functionality of our website.</li>
                <li>Submit false information or use our platform to distribute spam.</li>
              </ul>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <h2 className="text-2xl mb-6">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Grow With Med and its owner(s) shall not be held liable for any direct, indirect, incidental, or consequential damages arising from your use of the website, the tools we recommend, or the strategies we share. All content and resources are provided on an "as-is" and "as-available" basis without warranties of any kind.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Gavel className="w-5 h-5 text-slate-600" />
                </div>
                <h2 className="text-2xl m-0">8. Governing Law</h2>
              </div>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of Tunisia, without regard to its conflict of law principles. Any legal action or proceeding related to this website shall be brought exclusively in the applicable courts located in Tunis, Tunisia.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-sky-600" />
                </div>
                <h2 className="text-2xl m-0">9. Changes to These Terms</h2>
              </div>
              <p>
                We reserve the right to modify or replace these Terms of Service at any time. Any changes will be updated on this page with a revised "Effective Date" at the top. Your continued use of the website after changes are posted constitutes your acceptance of the new terms.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-primary" />
                </div>
                <h2 className="text-2xl m-0">10. Contact Us</h2>
              </div>
              <p>
                If you have any questions regarding these Terms of Service, please contact us at: 
                <a href="mailto:info@growwithmed.site" className="text-brand-primary font-bold no-underline ml-1">info@growwithmed.site</a>.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
