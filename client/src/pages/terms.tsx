import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Calendar, Target, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4" data-testid="back-link">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-600">
            Performance Promise guarantee terms and service conditions
          </p>
        </div>

        {/* Performance Promise Section */}
        <section id="terms" className="mb-12">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary-600" />
                Performance Promise Key Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Baseline Measurement</h3>
                <p className="text-gray-600">
                  Average attributable newsletter revenue over the 90 days prior to go-live, 
                  or a matched holdout during the test period.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Revenue Attribution</h3>
                <p className="text-gray-600">
                  Revenue from sessions tagged <code className="bg-gray-100 px-1 rounded">utm_source=newsletter</code> + 
                  <code className="bg-gray-100 px-1 rounded ml-1">utm_medium=email</code> with a 7-day post-click window; 
                  excludes refunds and chargebacks.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Implementation Timeline</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                        <span className="font-medium">Days 0–45: Setup/Warmup</span>
                      </div>
                      <p className="text-sm text-gray-600">Initial setup, configuration, and optimization period</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <Target className="w-4 h-4 mr-2 text-green-600" />
                        <span className="font-medium">Days 46–135: Guarantee Window</span>
                      </div>
                      <p className="text-sm text-gray-600">90-day measurement period for performance evaluation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Success Metric Calculation</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-2">Performance is measured as:</p>
                  <div className="font-mono text-sm bg-white p-3 rounded border">
                    [(Test Group Revenue ÷ Delivered Emails) – (Holdout Revenue ÷ Delivered Emails)] 
                    <br />÷ (Holdout Revenue ÷ Delivered Emails) ≥ 15%
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Eligibility Requirements</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Technical Requirements</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Sender authentication (SPF/DKIM/DMARC)</li>
                      <li>• List hygiene maintenance</li>
                      <li>• Complaint rate &lt;0.1%</li>
                      <li>• Tracking pixels enabled</li>
                      <li>• Conversion events enabled</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Operational Requirements</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Stable send cadence/volume (±10%)</li>
                      <li>• Adoption of recommended templates</li>
                      <li>• Implementation of suggested segments</li>
                      <li>• Participation in A/B tests</li>
                      <li>• Current account status</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Exclusions</h3>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-700 mb-2">The Performance Promise does not apply in cases of:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Force majeure events</li>
                        <li>• Major pricing, offer, or website changes during guarantee period</li>
                        <li>• Email service provider outages beyond our control</li>
                        <li>• Domain blacklisting occurring prior to service start</li>
                        <li>• Non-compliance with eligibility requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Remedy & Limitations</h3>
                <div className="bg-green-50 rounded-lg p-4">
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• <strong>Remedy:</strong> Service credit up to fees paid during the Guarantee Window</li>
                    <li>• <strong>Limitation:</strong> One Performance Promise credit per customer account</li>
                    <li>• <strong>Requirement:</strong> Account must be current and in good standing</li>
                    <li>• <strong>Process:</strong> Written request required within 30 days of guarantee period end</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* General Terms */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>General Terms of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Service Description</h3>
                <p className="text-gray-600">
                  SharpSend provides AI-powered newsletter analytics, personalization, and optimization services 
                  for financial publishers through SaaS platform integration.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Data Privacy & Security</h3>
                <p className="text-gray-600">
                  All customer data is processed in accordance with our Privacy Policy. We maintain SOC 2 
                  compliance and GDPR readiness for data protection and security.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h3>
                <p className="text-gray-600">
                  SharpSend's total liability is limited to the fees paid for services during the applicable 
                  guarantee or dispute period. We are not liable for indirect, consequential, or special damages.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact for Support</h3>
                <p className="text-gray-600">
                  For questions about these terms or to request Performance Promise evaluation, 
                  contact our support team at{" "}
                  <a href="mailto:support@sharpsend.io" className="text-primary-600 hover:text-primary-700">
                    support@sharpsend.io
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>Last updated: August 2025</p>
          <p className="mt-2">
            <Link href="/" className="text-primary-600 hover:text-primary-700">
              Return to SharpSend homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}