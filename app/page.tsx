'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold text-slate-900">
                StrataWrite
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
                Features
              </a>
              <a href="#samples" className="text-slate-600 hover:text-slate-900 transition-colors">
                Samples
              </a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-slate-200">
              <a
                href="#features"
                className="block text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#samples"
                className="block text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Samples
              </a>
              <a
                href="#pricing"
                className="block text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6">
            High-converting landing pages + SEO content systems — delivered in 48 hours.
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Fast, clean Next.js + Tailwind builds, plus SEO-ready structure and copy that actually ships.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:erabdullahmesut04@gmail.com?subject=Landing%20page%20/%20SEO%20request&body=Hi%2C%0A%0AI'm%20interested%20in%20a%20landing%20page%20or%20SEO%20content%20project.%0A%0AProject%20details%3A%0A%0A"
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
            >
              Get a quote
            </a>
            <a
              href="#samples"
              className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold text-lg hover:bg-slate-50 transition-colors border-2 border-slate-200"
            >
              See sample deliverables
            </a>
          </div>
        </div>
      </section>

      {/* Deliverables Band */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="font-semibold text-slate-900">Landing page (Next.js/Tailwind)</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span className="font-semibold text-slate-900">Copy + SEO headings</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold text-slate-900">Mobile-first responsive</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              <span className="font-semibold text-slate-900">Deploy (Vercel)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 text-center mb-16">
            What you get
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-shadow bg-slate-50">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">SEO-optimized structure</h3>
              <p className="text-slate-600 leading-relaxed">
                Proper heading hierarchy, meta descriptions, and content organization built for search visibility from day one.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-shadow bg-slate-50">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Fast turnaround</h3>
              <p className="text-slate-600 leading-relaxed">
                Complete landing pages delivered in 48 hours. Clean code, conversion-focused copy, and ready to deploy.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-shadow bg-slate-50">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Full ownership</h3>
              <p className="text-slate-600 leading-relaxed">
                You own the code, the copy, and the deployment. No subscriptions, no vendor lock-in. Just clean assets you control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 text-center mb-6">
            How it works
          </h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            Three simple steps to publishing. Fast, clear, and built for teams who ship.
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col sm:flex-row items-start gap-6 p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Pick a topic</h3>
                <p className="text-slate-600 leading-relaxed">
                  Tell me your business, audience, and goals. I handle the structure and copy strategy.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col sm:flex-row items-start gap-6 p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Build and iterate</h3>
                <p className="text-slate-600 leading-relaxed">
                  Get a complete draft with code, copy, and SEO structure. Review and request changes.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col sm:flex-row items-start gap-6 p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Deploy and launch</h3>
                <p className="text-slate-600 leading-relaxed">
                  Final version deployed to Vercel with full handoff. Clean code, zero bloat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Samples Section */}
      <section id="samples" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 text-center mb-6">
            Sample deliverables
          </h2>
          <p className="text-xl text-slate-600 text-center mb-16">
            Here&apos;s what you get — real outputs, not promises.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sample 1 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Dental Clinic Landing Page</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-slate-700 mb-1">Meta Title:</p>
                  <p className="text-slate-600">Family Dental Care in Brooklyn | Same-Day Appointments</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 mb-1">Meta Description:</p>
                  <p className="text-slate-600">Gentle, affordable dental care for families. Cleanings, fillings, cosmetic work. Accept most insurance. Book online today.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 mb-1">H2 Outline:</p>
                  <ul className="text-slate-600 space-y-1 pl-4">
                    <li>• Services We Offer</li>
                    <li>• Why Families Choose Us</li>
                    <li>• Insurance & Payment Options</li>
                    <li>• Book Your Appointment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sample 2 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fitness Coach Landing Page</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-slate-700 mb-1">Meta Title:</p>
                  <p className="text-slate-600">Online Personal Training for Busy Professionals | 12-Week Programs</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 mb-1">Meta Description:</p>
                  <p className="text-slate-600">Custom workout plans + nutrition coaching. Train anywhere, anytime. Results in 12 weeks or your money back.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700 mb-1">H2 Outline:</p>
                  <ul className="text-slate-600 space-y-1 pl-4">
                    <li>• How It Works</li>
                    <li>• Training Plans & Pricing</li>
                    <li>• Success Stories</li>
                    <li>• Start Your Transformation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sample 3 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Landing Section Copy</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-slate-700 mb-2">Problem → Solution → Proof</p>
                  <div className="space-y-3 text-slate-600">
                    <p><span className="font-semibold text-slate-700">Problem:</span> &quot;Spending hours on landing pages that don&apos;t convert?&quot;</p>
                    <p><span className="font-semibold text-slate-700">Solution:</span> &quot;Get a high-converting page built in 48 hours — optimized for SEO, mobile-first, and ready to launch.&quot;</p>
                    <p><span className="font-semibold text-slate-700">Proof:</span> &quot;Clean Next.js code, Tailwind styling, deployed to Vercel with full documentation.&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 text-center mb-4">
            Pricing
          </h2>
          <p className="text-center text-slate-600 mb-12">Project-based pricing — pay once, own forever.</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Landing Page */}
            <div className="p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-600 transition-colors bg-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Landing Page</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-slate-900">$497</span>
                <span className="text-slate-600"> one-time</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Next.js + Tailwind build</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">SEO-ready copy + structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Mobile-first responsive</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Deployed to Vercel</span>
                </li>
              </ul>
              <a
                href="mailto:erabdullahmesut04@gmail.com?subject=Landing%20page%20quote&body=Hi%2C%0A%0AI'm%20interested%20in%20a%20landing%20page.%0A%0AProject%20details%3A%0A%0A"
                className="block w-full py-3 px-6 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors text-center"
              >
                Get a quote
              </a>
            </div>

            {/* Landing + Content System */}
            <div className="p-8 rounded-2xl border-2 border-blue-600 bg-blue-50 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Best Value
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Landing + Content System</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-slate-900">$997</span>
                <span className="text-slate-600"> one-time</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Everything in Landing Page</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">10 SEO blog post outlines</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Content strategy doc</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Keyword research</span>
                </li>
              </ul>
              <a
                href="mailto:erabdullahmesut04@gmail.com?subject=Landing%20%2B%20Content%20quote&body=Hi%2C%0A%0AI'm%20interested%20in%20the%20Landing%20%2B%20Content%20System.%0A%0AProject%20details%3A%0A%0A"
                className="block w-full py-3 px-6 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 text-center"
              >
                Get a quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 text-center mb-16">
            Results you can expect
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Result 1 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Improved clarity & structure</h3>
              <p className="text-slate-600 leading-relaxed">
                Clear hierarchy, logical flow, and purpose-driven sections that guide visitors to take action.
              </p>
            </div>

            {/* Result 2 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">SEO-ready outlines and headings</h3>
              <p className="text-slate-600 leading-relaxed">
                Proper heading tags, meta descriptions, and content structure optimized for search visibility.
              </p>
            </div>

            {/* Result 3 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fast iterations and clean handoff</h3>
              <p className="text-slate-600 leading-relaxed">
                Quick turnaround on revisions, organized code, and clear documentation for easy maintenance.
              </p>
            </div>

            {/* Result 4 */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Performance-minded, mobile-first layout</h3>
              <p className="text-slate-600 leading-relaxed">
                Fast page loads, responsive on all devices, and built with modern best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-6">
            Contact
          </h2>
          <p className="text-xl text-blue-100 text-center mb-10">
            Tell me what you need — I&apos;ll reply with a plan + quote.
          </p>

          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');

              const mailtoUrl = `mailto:erabdullahmesut04@gmail.com?subject=Landing page / SEO request&body=Name: ${encodeURIComponent(name as string)}%0AEmail: ${encodeURIComponent(email as string)}%0A%0AMessage:%0A${encodeURIComponent(message as string)}`;
              window.location.href = mailtoUrl;
            }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Send
              </button>
            </div>
          </form>

          {/* Fallback mailto link */}
          <div className="text-center mt-6">
            <p className="text-blue-100">
              Or email me directly at{' '}
              <a
                href="mailto:erabdullahmesut04@gmail.com"
                className="text-white font-semibold underline hover:no-underline"
              >
                erabdullahmesut04@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-semibold text-slate-300 mb-2">Built with Next.js + Tailwind.</p>
              <p className="text-sm">© 2026 — All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
              <a href="#features" className="hover:text-slate-200 transition-colors">
                Features
              </a>
              <a href="#samples" className="hover:text-slate-200 transition-colors">
                Samples
              </a>
              <a href="#pricing" className="hover:text-slate-200 transition-colors">
                Pricing
              </a>
              <a href="#contact" className="hover:text-slate-200 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
