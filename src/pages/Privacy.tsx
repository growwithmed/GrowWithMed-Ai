import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, Mail, Zap } from 'lucide-react';

export default function Privacy() {
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
            <Shield className="w-8 h-8 text-brand-primary" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6 tracking-tight"
          >
            Privacy Policy
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
              At Grow With Med ("we," "our," or "us"), your privacy is a priority. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
            </p>

            <div className="pt-8 border-t border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl m-0">Information We Collect</h2>
              </div>
              <p>We only collect information that helps us provide you with the best experience on our site:</p>
              <ul>
                <li><strong>Personal Information:</strong> If you subscribe to our newsletter, download free resources, or contact us, we may collect your name and email address.</li>
                <li><strong>Usage Data:</strong> We automatically collect non-personally identifiable information, such as your IP address, browser type, device information, and browsing behavior on our site (e.g., pages visited and time spent).</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience, track affiliate link clicks, and analyze website traffic. You can disable cookies in your browser settings at any time.</li>
              </ul>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-2xl m-0">How We Use Your Information</h2>
              </div>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Send you our weekly growth breakdown, tool reviews, and free resources (if you’ve opted in).</li>
                <li>Improve our website's functionality, content, and user experience.</li>
                <li>Respond to your inquiries or support requests.</li>
                <li>Track affiliate link clicks to properly credit our partner programs.</li>
              </ul>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-2xl m-0">Affiliate Links and Third-Party Sites</h2>
              </div>
              <p>
                Grow With Med is a review and comparison site. We use affiliate links to monetize our content. This means if you click on a link to a product (e.g., Systeme.io, Hostinger, or Make.com) and make a purchase, we may earn a commission at no extra cost to you.
              </p>
              <p>
                Please note that when you click on an affiliate link or an external resource, you will be directed to a third-party website. We do not control and are not responsible for the privacy practices or content of these external sites. We encourage you to read their privacy policies.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                  <Lock className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-2xl m-0">Sharing Your Information</h2>
              </div>
              <p>
                We respect your privacy and will never sell, trade, or rent your personal information to third parties. We may only share data with trusted service providers (like our email marketing platform) solely to help us operate our business, provided they agree to keep your information confidential.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <h2 className="text-2xl mb-6">Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li><strong>Opt-out:</strong> You can unsubscribe from our email newsletter at any time using the link at the bottom of our emails.</li>
                <li><strong>Request Data Access/Deletion:</strong> You may contact us to request access to the personal data we hold about you or ask us to delete it.</li>
              </ul>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <h2 className="text-2xl mb-6">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by updating the "Effective Date" at the top of this page.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-primary" />
                </div>
                <h2 className="text-2xl m-0">Contact Us</h2>
              </div>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at: 
                <a href="mailto:info@growwithmed.site" className="text-brand-primary font-bold no-underline ml-1">info@growwithmed.site</a>.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
