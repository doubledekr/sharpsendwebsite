import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Shield, FileText, Lock, Calendar, Mail, ExternalLink } from "lucide-react";

export default function Privacy() {
  return (
    <div className="font-sans antialiased bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer">
                <img src="/sharpsend-logo.png" alt="SharpSend" className="w-8 h-8" />
                <span className="text-xl font-bold text-gray-900">SharpSend</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/api-docs" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">API Docs</Link>
              <Link href="/integrations" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Integrations</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">About</Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Blog</Link>
              <Link href="/careers" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Careers</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                <img src="/sharpsend-logo.png" alt="SharpSend" className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy and data protection are fundamental to how we build and operate SharpSend.
            </p>
            <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Effective Date: August 25, 2025</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              {/* Overview */}
              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
                <p className="text-gray-700">
                  This Privacy Policy explains how <strong>SharpSend, Inc.</strong> ("SharpSend," "we," "us," or "our") collects, uses, shares, and protects personal information in connection with our websites, apps, APIs, and services (the "Service"). This policy distinguishes between data we process <strong>as a controller</strong> (e.g., your account and billing info) and <strong>as a processor</strong> on behalf of our customers (e.g., end‑user pixel, click, and conversion events).
                </p>
              </div>

              {/* Roles & Scope */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-primary-600" />
                    Roles & Scope
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Controller</h3>
                      <p className="text-gray-600 text-sm">We act as a controller for <strong>Account, Billing, Site Visitor, and Marketing</strong> data.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Processor</h3>
                      <p className="text-gray-600 text-sm">We act as a processor for <strong>End‑User Event Data</strong> that customers capture via our pixels, redirects, SDKs, and APIs.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories of Information */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-primary-600" />
                    Categories of Information We Process
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Account & Billing (Controller)</h3>
                      <p className="text-gray-600 text-sm">Name, email, role, company, login metadata, seats, plan info, invoices, payment tokens (stored by our PCI‑compliant processor), support tickets.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Integration Settings (Controller/Processor)</h3>
                      <p className="text-gray-600 text-sm">Connector settings, API keys/OAuth tokens (stored encrypted at rest), field mappings.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">End‑User Event Data (Processor)</h3>
                      <p className="text-gray-600 text-sm">Message/campaign/deck IDs, pseudonymous user IDs, timestamps, IP address and coarse geolocation, user agent, UTM parameters, referral data, clickthrough URLs, conversion details (order value, currency, order_id, item SKUs/qty). <strong>Avoid</strong> placing sensitive data in URLs or metadata.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Technical Logs (Controller)</h3>
                      <p className="text-gray-600 text-sm">Request IDs, error traces, performance metrics.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Information */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Information</h2>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></div>
                      Provide and operate the Service; measure attribution and revenue
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></div>
                      Secure the platform; detect/prevent fraud and abuse
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></div>
                      Customer support; service communications and product updates
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></div>
                      Improve features, models, and performance using de‑identified/aggregated data
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></div>
                      Billing, accounting, compliance with law
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></div>
                      Limited B2B marketing to business contacts (opt‑out any time)
                    </li>
                  </ul>
                  <div className="bg-blue-50 rounded-lg p-4 mt-4">
                    <p className="text-blue-800 text-sm">
                      <strong>EEA/UK legal bases:</strong> contract, legitimate interests (product improvement, security, B2B marketing), consent (optional cookies/trackers), and legal obligation (tax, accounting).
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Data Retention */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Lock className="w-6 h-6 mr-3 text-primary-600" />
                    Data Retention
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <h3 className="font-semibold text-gray-900">Starter</h3>
                      <p className="text-primary-600 font-bold text-lg">90 days</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <h3 className="font-semibold text-gray-900">Growth</h3>
                      <p className="text-primary-600 font-bold text-lg">12 months</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <h3 className="font-semibold text-gray-900">Pro</h3>
                      <p className="text-primary-600 font-bold text-lg">24 months</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Backups typically persist up to <strong>35 days</strong>. Account records are retained as required by law. Upon termination, export is available for 30 days; deletion follows within commercially reasonable time.
                  </p>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights & Choices</h2>
                  <p className="text-gray-600 mb-4">
                    Depending on your location, you may have rights to <strong>access, correct, delete, restrict</strong>, or <strong>port</strong> your data; to <strong>object</strong> to processing; and to withdraw consent.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">End‑User Event Data</h3>
                      <p className="text-gray-600 text-sm">For data we process as a processor, contact the applicable customer/controller.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Account Data</h3>
                      <p className="text-gray-600 text-sm">For your account or site‑visitor data, email <strong>privacy@sharpsend.io</strong>.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Security</h2>
                  <p className="text-gray-600 mb-4">
                    We use industry‑standard safeguards, including <strong>TLS 1.2+ in transit</strong>, <strong>AES‑256 at rest</strong>, RBAC, and regular testing.
                  </p>
                  <Button asChild variant="outline" className="flex items-center">
                    <Link href="/security">
                      View Full Security Details <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Mail className="w-6 h-6 mr-3 text-primary-600" />
                    Contact Us
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Privacy Questions</h3>
                      <p className="text-gray-600 text-sm">privacy@sharpsend.io</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Postal Address</h3>
                      <p className="text-gray-600 text-sm">
                        SharpSend, Inc.<br />
                        651 N Broad St, Suite 206<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Governing Law */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Governing Law</h2>
                <p className="text-gray-600 text-sm">
                  Where permitted by law, this Policy and any disputes relating to it are governed by <strong>Delaware law</strong>, without regard to conflicts of law. Dispute resolution and venue are as stated in our Terms & Conditions.
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p><strong>Data Processing Addendum (DPA):</strong> available at <strong>/legal/dpa</strong></p>
                  <p><strong>Sub‑processors:</strong> listed at <strong>/legal/subprocessors</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <img src="/sharpsend-logo.png" alt="SharpSend" className="w-8 h-8 filter brightness-0 invert" />
                  <span className="text-xl font-bold text-white">SharpSend</span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  AI-powered newsletter optimization for financial publishers. Increase revenue, 
                  improve attribution, and optimize every aspect of your email marketing.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link href="/api-docs" className="hover:text-white transition-colors">API Docs</Link></li>
                  <li><Link href="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
                  <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 SharpSend. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</Link>
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}