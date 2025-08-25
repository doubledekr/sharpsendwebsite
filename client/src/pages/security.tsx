import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Shield, Lock, Eye, AlertCircle, CheckCircle, Server, Key, FileText, Mail } from "lucide-react";

export default function Security() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Security & Trust</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data's safety and integrity are core to SharpSend. We implement enterprise-grade security measures to protect your information.
            </p>
          </div>
        </section>

        {/* Security Overview */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Program & Governance */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-primary-600" />
                  Program & Governance
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Eye className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Executive Oversight</h3>
                    <p className="text-gray-600 text-sm">Security owned by the CTO with quarterly executive reviews</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Policies</h3>
                    <p className="text-gray-600 text-sm">Access control, incident response, vendor risk, and secure SDLC</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Team Training</h3>
                    <p className="text-gray-600 text-sm">Background checks and annual security training for all employees</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-primary-600" />
                  Data Protection
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Encryption</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm"><strong>In transit:</strong> TLS 1.2+ with HSTS; modern ciphers</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm"><strong>At rest:</strong> AES‑256 for databases, volumes, and backups</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm"><strong>Key management:</strong> Cloud KMS/HSM with rotation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Access Control</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Dedicated secrets manager; no secrets in code</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Logical tenant isolation by account</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Organization-level RBAC</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Application Security */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Key className="w-6 h-6 mr-3 text-primary-600" />
                  Application Security
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Authentication</h3>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Email/password (argon2id hashing)</li>
                      <li>• Optional 2FA</li>
                      <li>• SSO (SAML/OIDC) for Pro/Enterprise</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Authorization</h3>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Role-based access control</li>
                      <li>• Least-privilege service accounts</li>
                      <li>• Audit logs for sensitive actions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Session Security</h3>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Short-lived tokens</li>
                      <li>• Refresh token rotation</li>
                      <li>• Device logout capabilities</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Security Headers & Protection</h4>
                  <p className="text-blue-800 text-sm">
                    CSP, HSTS, X‑Content‑Type‑Options, Referrer‑Policy, CSRF protection, strict rate limiting and bot protection at the edge.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Vulnerability Management */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-3 text-primary-600" />
                  Secure Development & Vulnerability Management
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Development Practices</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Peer code reviews and branch protection</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Infrastructure-as-Code scanning</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">SAST/DAST and dependency scanning</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Patch Management SLAs</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-red-50 rounded-lg p-3">
                        <span className="font-medium text-red-900">Critical</span>
                        <span className="text-red-700 font-bold">≤ 7 days</span>
                      </div>
                      <div className="flex justify-between items-center bg-orange-50 rounded-lg p-3">
                        <span className="font-medium text-orange-900">High</span>
                        <span className="text-orange-700 font-bold">≤ 30 days</span>
                      </div>
                      <div className="flex justify-between items-center bg-yellow-50 rounded-lg p-3">
                        <span className="font-medium text-yellow-900">Medium</span>
                        <span className="text-yellow-700 font-bold">≤ 90 days</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Penetration Testing</h4>
                  <p className="text-gray-600 text-sm">
                    Annual independent penetration testing with remediation tracked to closure. Responsible disclosure via <strong>security@sharpsend.io</strong> with safe-harbor protections.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Infrastructure */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Server className="w-6 h-6 mr-3 text-primary-600" />
                  Infrastructure & Operations
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Cloud Infrastructure</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">ISO 27001/SOC 2/PCI-DSS certified data centers</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">Network segmentation (VPC/VNET)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">WAF/DDoS protection</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Continuity</h3>
                    <div className="space-y-3">
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-green-900">RPO Target</span>
                          <span className="text-green-700 font-bold">≤ 24h</span>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-green-900">RTO Target</span>
                          <span className="text-green-700 font-bold">≤ 24h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Monitoring & Response</h4>
                  <p className="text-blue-800 text-sm">
                    Centralized logs/metrics/traces with 24/7 on‑call. Encrypted backups with periodic restore tests. Runbooks for failover scenarios.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Compliance */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Compliance & Privacy</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Privacy Framework</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Privacy program aligned with <strong>GDPR/UK GDPR</strong> and <strong>CPRA</strong> principles.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• DPA with SCCs available</li>
                      <li>• Current sub‑processors listed</li>
                      <li>• Not a broker‑dealer or investment adviser</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Customer Responsibilities</h3>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Maintain SPF/DKIM/DMARC in your ESP</li>
                      <li>• Keep API keys and OAuth tokens secret</li>
                      <li>• Use SSO/2FA and strong passwords</li>
                      <li>• Configure conversion tracking responsibly</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Incident Response */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Incident Response</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <p className="text-yellow-800">
                    If we become aware of a security incident that materially affects your data, we will notify impacted customers <strong>without undue delay</strong>, and, where required by law (e.g., GDPR), within <strong>72 hours</strong> of becoming aware, including known details and remediation steps.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-primary-600" />
                  Security Contact
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">Security Issues</h3>
                    <p className="text-primary-600 font-medium">security@sharpsend.io</p>
                    <p className="text-gray-500 text-sm mt-1">PGP key available</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">Privacy Questions</h3>
                    <p className="text-primary-600 font-medium">privacy@sharpsend.io</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">Service Status</h3>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Status Page
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
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
                <Link href="/security" className="text-gray-400 hover:text-white text-sm transition-colors">Security</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}