import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function PrivacyPolicy() {
  const contentRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(contentRef);

  return (
    <section className="bg-black min-h-screen py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div
          ref={contentRef}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <h1
            className="text-4xl md:text-5xl font-black text-off-white mb-12 leading-tight"
            style={{ letterSpacing: '0.12em' }}
          >
            PRIVACY POLICY
          </h1>

          <div className="space-y-12 text-off-white/80">
            <section>
              <h2 className="text-lg font-semibold text-off-white mb-4" style={{ letterSpacing: '0.08em' }}>
                1. INTRODUCTION
              </h2>
              <p className="text-base leading-relaxed font-light">
                MALICEVISUALS ("we", "our", or "us") operates this website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-off-white mb-4" style={{ letterSpacing: '0.08em' }}>
                2. INFORMATION COLLECTION AND USE
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-off-white/90 mb-2">Contact Form Data</h3>
                  <p className="text-base leading-relaxed font-light">
                    When you submit the contact form, we collect your name, email address, and message. This information is used solely to respond to your inquiry and is not shared with third parties.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-off-white/90 mb-2">YouTube Videos</h3>
                  <p className="text-base leading-relaxed font-light">
                    We embed YouTube videos on our website. YouTube uses cookies and tracking technologies to analyze viewing behavior. By watching videos, you consent to YouTube's data processing. YouTube's privacy policy applies to this data collection.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-off-white mb-4" style={{ letterSpacing: '0.08em' }}>
                3. COOKIES
              </h2>
              <p className="text-base leading-relaxed font-light">
                Our website does not use cookies for tracking purposes. However, embedded YouTube videos may set cookies. You can control cookie settings in your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-off-white mb-4" style={{ letterSpacing: '0.08em' }}>
                4. THIRD-PARTY SERVICES
              </h2>
              <p className="text-base leading-relaxed font-light">
                We use YouTube for video embedding. YouTube is operated by Google and subject to Google's privacy policy. YouTube may collect usage data when you interact with embedded videos. You can learn more at{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blood-red hover:text-blood-red/80">
                  Google's Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-off-white mb-4" style={{ letterSpacing: '0.08em' }}>
                5. DATA SECURITY
              </h2>
              <p className="text-base leading-relaxed font-light">
                We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-off-white mb-4" style={{ letterSpacing: '0.08em' }}>
                6. YOUR RIGHTS
              </h2>
              <p className="text-base leading-relaxed font-light">
                You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us using the information in the Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-off-white mb-4" style={{ letterSpacing: '0.08em' }}>
                7. CHANGES TO THIS PRIVACY POLICY
              </h2>
              <p className="text-base leading-relaxed font-light">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date below.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-off-white mb-4" style={{ letterSpacing: '0.08em' }}>
                8. CONTACT US
              </h2>
              <p className="text-base leading-relaxed font-light">
                If you have questions about this Privacy Policy, please contact us using the information provided in the Impressum.
              </p>
            </section>

            <div className="border-t border-white/10 pt-12 mt-12">
              <p className="text-sm text-off-white/40" style={{ letterSpacing: '0.05em' }}>
                Last updated: {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
