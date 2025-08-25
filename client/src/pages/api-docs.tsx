import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Code, Key, Zap, AlertCircle, CheckCircle, Globe, Shield, Database, RefreshCw, Activity, Clock, Lock, Users, BarChart3, Mail } from "lucide-react";
import { Link } from "wouter";

export default function ApiDocs() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: Code },
    { id: "platforms", label: "Platform Integrations", icon: Globe },
    { id: "authentication", label: "Authentication", icon: Key },
    { id: "endpoints", label: "API Endpoints", icon: Database },
    { id: "webhooks", label: "Webhooks", icon: Activity },
    { id: "examples", label: "Code Examples", icon: Code },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <div className="flex items-center space-x-3 cursor-pointer">
                  <img src="/sharpsend-logo.png" alt="SharpSend" className="w-8 h-8" />
                  <span className="text-xl font-bold text-gray-900">SharpSend</span>
                </div>
              </Link>
              <span className="text-gray-400">/ API Documentation</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                <img src="/sharpsend-logo.png" alt="SharpSend" className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">SharpSend API Documentation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete REST API documentation for integrating SharpSend's AI-powered newsletter 
              optimization platform with your existing email marketing stack.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? "bg-white text-primary-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    data-testid={`tab-${tab.id}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            {activeTab === "overview" && (
              <div className="space-y-12">
                {/* Quick Start */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-primary-600" />
                      Quick Start Guide
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">1. Get Your API Keys</h4>
                      <p className="text-gray-600 mb-4">
                        Generate your API keys from the SharpSend dashboard under Settings → API Keys.
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <code className="text-green-400 text-sm">
                          Authorization: Bearer sk_live_1234567890abcdef
                        </code>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">2. Make Your First Request</h4>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <code className="text-green-400 text-sm">
                          curl -X GET "https://api.sharpsend.io/v1/campaigns" \<br />
                          &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \<br />
                          &nbsp;&nbsp;-H "Content-Type: application/json"
                        </code>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">3. Base URL & Versioning</h4>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-blue-800">
                          <strong>Base URL:</strong> <code>https://api.sharpsend.io/v1</code><br />
                          <strong>Current Version:</strong> v1<br />
                          <strong>API Style:</strong> REST with JSON payloads
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Rate Limits */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-orange-600" />
                      Rate Limits & Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center p-6 bg-gray-50 rounded-xl">
                        <div className="text-3xl font-bold text-primary-600 mb-2">1,000</div>
                        <div className="text-sm text-gray-600">requests per minute</div>
                      </div>
                      <div className="text-center p-6 bg-gray-50 rounded-xl">
                        <div className="text-3xl font-bold text-primary-600 mb-2">10,000</div>
                        <div className="text-sm text-gray-600">requests per hour</div>
                      </div>
                      <div className="text-center p-6 bg-gray-50 rounded-xl">
                        <div className="text-3xl font-bold text-primary-600 mb-2">&lt;50ms</div>
                        <div className="text-sm text-gray-600">average response time</div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="text-yellow-800">
                        <strong>Rate Limit Headers:</strong> All responses include <code>X-RateLimit-Limit</code>, 
                        <code>X-RateLimit-Remaining</code>, and <code>X-RateLimit-Reset</code> headers for monitoring usage.
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Core Features */}
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                        Analytics & Attribution
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Revenue attribution tracking</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Campaign performance metrics</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Subscriber engagement analytics</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-gray-700">A/B test results & insights</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Users className="w-5 h-5 mr-2 text-blue-600" />
                        Subscriber Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Contact list management</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Dynamic segmentation</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Preference management</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-gray-700">Behavioral tracking</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "platforms" && (
              <div className="space-y-12">
                {/* Platform Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-primary-600" />
                      Supported Email Platforms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-8">
                      SharpSend integrates with major email service providers to give you unified control 
                      across your entire email marketing stack. Our platform abstracts the complexity 
                      while giving you access to each platform's unique capabilities.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Traditional Platforms */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Traditional Email Platforms</h4>
                        <div className="space-y-4">
                          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                              SG
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">SendGrid</div>
                              <div className="text-sm text-gray-600">Transactional & marketing emails</div>
                            </div>
                          </div>
                          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                              MC
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Mailchimp</div>
                              <div className="text-sm text-gray-600">Advanced segmentation & automation</div>
                            </div>
                          </div>
                          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                              MG
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Mailgun</div>
                              <div className="text-sm text-gray-600">High-volume delivery & tracking</div>
                            </div>
                          </div>
                          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                              SF
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Salesforce Marketing Cloud</div>
                              <div className="text-sm text-gray-600">Enterprise journey orchestration</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Advanced Platforms */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Advanced Cross-Channel Platforms</h4>
                        <div className="space-y-4">
                          <div className="flex items-center p-4 bg-primary-50 rounded-lg border border-primary-200">
                            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                              IT
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Iterable</div>
                              <div className="text-sm text-gray-600">AI-powered cross-channel messaging</div>
                            </div>
                          </div>
                          <div className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                              CIO
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Customer.io</div>
                              <div className="text-sm text-gray-600">Behavioral triggers & journeys</div>
                            </div>
                          </div>
                          <div className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200">
                            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                              K
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Keap</div>
                              <div className="text-sm text-gray-600">CRM with sales automation</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Platform Capabilities Matrix */}
                <Card>
                  <CardHeader>
                    <CardTitle>Platform Capabilities Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Operation</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-900">SendGrid</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-900">Mailchimp</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-900">SFMC</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-900">Mailgun</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          <tr className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium">Create Groups/Tags</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">⚠️</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium">Trigger Email Sends</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">✅</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium">Dynamic Segmentation</td>
                            <td className="py-3 px-4 text-center">⚠️</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">❌</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium">A/B Testing</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">❌</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium">Automation Workflows</td>
                            <td className="py-3 px-4 text-center">⚠️</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">❌</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium">Real-time Webhooks</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">✅</td>
                            <td className="py-3 px-4 text-center">✅</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 flex items-start space-x-8 text-sm text-gray-600">
                      <div>✅ = Full Support</div>
                      <div>⚠️ = Partial Support</div>
                      <div>❌ = Not Supported</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Multi-Platform Benefits */}
                <Card className="bg-gradient-to-br from-primary-50 to-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-primary-600" />
                      Multi-Platform Architecture Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">99.95% Uptime</h4>
                        <p className="text-sm text-gray-600">Automatic failover between platforms ensures maximum reliability</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <RefreshCw className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Smart Routing</h4>
                        <p className="text-sm text-gray-600">AI selects optimal platform based on performance and cost</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Database className="w-6 h-6 text-purple-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Unified Data</h4>
                        <p className="text-sm text-gray-600">Consolidated reporting and subscriber management across all platforms</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "authentication" && (
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Key className="w-5 h-5 mr-2 text-primary-600" />
                      API Authentication
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Bearer Token Authentication</h4>
                      <p className="text-gray-600 mb-4">
                        All API requests must include an Authorization header with a valid API key:
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <code className="text-green-400 text-sm">
                          Authorization: Bearer sk_live_1234567890abcdef
                        </code>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h4 className="font-semibold text-blue-900 mb-3">🧪 Test Environment</h4>
                        <p className="text-sm text-blue-800 mb-3">
                          Use test keys for development and testing:
                        </p>
                        <code className="text-xs bg-blue-100 px-2 py-1 rounded text-blue-800">sk_test_...</code>
                        <ul className="text-sm text-blue-700 mt-3 space-y-1">
                          <li>• Safe for development</li>
                          <li>• No real emails sent</li>
                          <li>• Simulated responses</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 rounded-lg p-6">
                        <h4 className="font-semibold text-green-900 mb-3">🚀 Live Environment</h4>
                        <p className="text-sm text-green-800 mb-3">
                          Use live keys for production:
                        </p>
                        <code className="text-xs bg-green-100 px-2 py-1 rounded text-green-800">sk_live_...</code>
                        <ul className="text-sm text-green-700 mt-3 space-y-1">
                          <li>• Real email delivery</li>
                          <li>• Billable operations</li>
                          <li>• Production data</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lock className="w-5 h-5 mr-2 text-red-600" />
                      Security Best Practices
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">API Key Management</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Store keys in environment variables, never in code</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Rotate keys regularly (every 90 days recommended)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Use separate keys for different environments</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Monitor key usage through dashboard</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Network Security</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">All requests must use HTTPS (TLS 1.2+)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Implement request signing for sensitive operations</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Whitelist IP addresses for production keys</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Verify webhook signatures for incoming data</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "endpoints" && (
              <div className="space-y-8">
                {/* Campaigns */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-blue-600" />
                      Campaigns API
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">Create Campaign</h4>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">POST</span>
                        </div>
                        <code className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded">/v1/campaigns</code>
                        <div className="mt-4 bg-gray-900 rounded-lg p-4">
                          <code className="text-green-400 text-sm">
                            {JSON.stringify({
                              name: "Weekly Market Update",
                              subject: "{{subscriber.first_name}}, Markets Up 2.3% Today",
                              platform: "mailchimp",
                              audience_id: "aud_12345",
                              template_id: "tpl_67890",
                              send_at: "2025-02-01T10:00:00Z"
                            }, null, 2)}
                          </code>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">Get Campaign Performance</h4>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">GET</span>
                        </div>
                        <code className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded">/v1/campaigns/{'{campaign_id}'}/performance</code>
                        <div className="mt-4 bg-gray-900 rounded-lg p-4">
                          <code className="text-blue-400 text-sm">
                            {JSON.stringify({
                              campaign_id: "cmp_12345",
                              sent: 25000,
                              delivered: 24750,
                              opened: 6188,
                              clicked: 1238,
                              revenue_attributed: 15750.00,
                              open_rate: 0.25,
                              click_rate: 0.05,
                              conversion_rate: 0.023
                            }, null, 2)}
                          </code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Subscribers */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-green-600" />
                      Subscribers API
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">Add Subscriber</h4>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">POST</span>
                        </div>
                        <code className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded">/v1/subscribers</code>
                        <div className="mt-4 bg-gray-900 rounded-lg p-4">
                          <code className="text-green-400 text-sm">
                            {JSON.stringify({
                              email: "investor@example.com",
                              first_name: "John",
                              last_name: "Smith",
                              tags: ["premium", "day_trader"],
                              custom_fields: {
                                portfolio_value: 250000,
                                risk_tolerance: "high",
                                investment_focus: ["stocks", "options"]
                              }
                            }, null, 2)}
                          </code>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">Create Segment</h4>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">POST</span>
                        </div>
                        <code className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded">/v1/segments</code>
                        <div className="mt-4 bg-gray-900 rounded-lg p-4">
                          <code className="text-green-400 text-sm">
                            {JSON.stringify({
                              name: "High-Value Active Traders",
                              conditions: [
                                {
                                  field: "portfolio_value",
                                  operator: "greater_than",
                                  value: 100000
                                },
                                {
                                  field: "tags",
                                  operator: "contains",
                                  value: "active_trader"
                                }
                              ]
                            }, null, 2)}
                          </code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Analytics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                      Analytics API
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">Revenue Attribution Report</h4>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">GET</span>
                        </div>
                        <code className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded">/v1/analytics/revenue?start_date=2025-01-01&end_date=2025-01-31</code>
                        <div className="mt-4 bg-gray-900 rounded-lg p-4">
                          <code className="text-blue-400 text-sm">
                            {JSON.stringify({
                              total_revenue: 125750.00,
                              attributed_revenue: 89025.00,
                              attribution_rate: 0.708,
                              campaigns: [
                                {
                                  campaign_id: "cmp_12345",
                                  revenue: 25000.00,
                                  conversions: 156
                                }
                              ]
                            }, null, 2)}
                          </code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "webhooks" && (
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-primary-600" />
                      Webhook Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">
                      Webhooks allow you to receive real-time notifications when events occur in your SharpSend account. 
                      Configure webhook URLs to receive HTTP POST requests with event data.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Available Events</h4>
                        <div className="space-y-2">
                          <div className="flex items-center p-3 bg-green-50 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                            <code className="text-sm">campaign.sent</code>
                          </div>
                          <div className="flex items-center p-3 bg-green-50 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                            <code className="text-sm">email.delivered</code>
                          </div>
                          <div className="flex items-center p-3 bg-green-50 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                            <code className="text-sm">email.opened</code>
                          </div>
                          <div className="flex items-center p-3 bg-green-50 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                            <code className="text-sm">email.clicked</code>
                          </div>
                          <div className="flex items-center p-3 bg-green-50 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                            <code className="text-sm">subscriber.updated</code>
                          </div>
                          <div className="flex items-center p-3 bg-green-50 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                            <code className="text-sm">conversion.tracked</code>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Webhook Configuration</h4>
                        <div className="bg-gray-900 rounded-lg p-4">
                          <code className="text-green-400 text-sm">
                            POST /v1/webhooks<br />
                            {JSON.stringify({
                              url: "https://yoursite.com/webhook",
                              events: ["email.opened", "conversion.tracked"],
                              secret: "whsec_abc123"
                            }, null, 2)}
                          </code>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="flex">
                        <AlertCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-yellow-800">Security Verification</h4>
                          <p className="text-yellow-700 text-sm mt-1">
                            Always verify webhook signatures using the provided secret to ensure requests 
                            are coming from SharpSend and haven't been tampered with.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Example Webhook Payload</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <code className="text-green-400 text-sm">
                        {JSON.stringify({
                          event: "email.opened",
                          timestamp: "2025-02-01T10:30:00Z",
                          data: {
                            campaign_id: "cmp_12345",
                            subscriber_id: "sub_67890",
                            email: "investor@example.com",
                            user_agent: "Mozilla/5.0...",
                            ip_address: "192.168.1.1",
                            location: {
                              city: "San Francisco",
                              country: "US"
                            }
                          }
                        }, null, 2)}
                      </code>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "examples" && (
              <div className="space-y-8">
                {/* JavaScript Example */}
                <Card>
                  <CardHeader>
                    <CardTitle>JavaScript/Node.js Example</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <code className="text-green-400 text-sm">
                        {`// Initialize SharpSend client
const SharpSend = require('sharpsend-node');
const client = new SharpSend('sk_live_your_api_key');

// Create a new campaign
async function createCampaign() {
  try {
    const campaign = await client.campaigns.create({
      name: 'Weekly Market Update',
      subject: 'Markets Rally 3% - Your Portfolio Update',
      platform: 'mailchimp',
      audience_id: 'aud_12345',
      template_id: 'tpl_67890',
      send_at: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now
    });
    
    console.log('Campaign created:', campaign.id);
    return campaign;
  } catch (error) {
    console.error('Error creating campaign:', error);
  }
}

// Add subscribers with financial data
async function addFinancialSubscriber(email, profile) {
  const subscriber = await client.subscribers.create({
    email: email,
    first_name: profile.firstName,
    tags: [profile.riskProfile, profile.investorType],
    custom_fields: {
      portfolio_value: profile.portfolioValue,
      investment_focus: profile.focus,
      preferred_contact_time: profile.contactTime
    }
  });
  
  return subscriber;
}

// Get revenue attribution data
async function getRevenueReport(startDate, endDate) {
  const report = await client.analytics.revenue({
    start_date: startDate,
    end_date: endDate,
    include_breakdown: true
  });
  
  console.log(\`Total attributed revenue: $\${report.attributed_revenue}\`);
  return report;
}`}
                      </code>
                    </div>
                  </CardContent>
                </Card>

                {/* Python Example */}
                <Card>
                  <CardHeader>
                    <CardTitle>Python Example</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <code className="text-green-400 text-sm">
                        {`import sharpsend
from datetime import datetime, timedelta

# Initialize client
client = sharpsend.Client('sk_live_your_api_key')

# Create targeted segment for high-value traders
def create_trader_segment():
    segment = client.segments.create({
        'name': 'High-Value Day Traders',
        'conditions': [
            {
                'field': 'portfolio_value',
                'operator': 'greater_than',
                'value': 100000
            },
            {
                'field': 'tags',
                'operator': 'contains',
                'value': 'day_trader'
            }
        ]
    })
    return segment

# Send personalized market alert
def send_market_alert(volatility_level, affected_sectors):
    campaign = client.campaigns.create({
        'name': f'Market Alert - Volatility {volatility_level}%',
        'subject': 'URGENT: Market Volatility Alert',
        'segment_id': 'seg_traders_12345',
        'personalization': {
            'volatility_level': volatility_level,
            'affected_sectors': affected_sectors,
            'recommendation': get_recommendation(volatility_level)
        }
    })
    
    # Send immediately
    result = client.campaigns.send(campaign['id'])
    return result

# Track conversion events
def track_subscription_conversion(subscriber_email, plan_type, revenue):
    event = client.events.track({
        'subscriber_email': subscriber_email,
        'event_type': 'subscription_purchased',
        'value': revenue,
        'properties': {
            'plan_type': plan_type,
            'source_campaign': 'market_alert_123'
        }
    })
    return event`}
                      </code>
                    </div>
                  </CardContent>
                </Card>

                {/* cURL Examples */}
                <Card>
                  <CardHeader>
                    <CardTitle>cURL Examples</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Create a subscriber</h4>
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                          <code className="text-green-400 text-sm">
                            {`curl -X POST "https://api.sharpsend.io/v1/subscribers" \\
  -H "Authorization: Bearer sk_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "trader@example.com",
    "first_name": "Alex",
    "tags": ["premium", "options_trader"],
    "custom_fields": {
      "portfolio_value": 500000,
      "risk_tolerance": "aggressive"
    }
  }'`}
                          </code>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Get campaign performance</h4>
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                          <code className="text-green-400 text-sm">
                            {`curl -X GET "https://api.sharpsend.io/v1/campaigns/cmp_12345/performance" \\
  -H "Authorization: Bearer sk_live_your_api_key"`}
                          </code>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Track revenue event</h4>
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                          <code className="text-green-400 text-sm">
                            {`curl -X POST "https://api.sharpsend.io/v1/events" \\
  -H "Authorization: Bearer sk_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "event_type": "purchase",
    "subscriber_email": "trader@example.com",
    "value": 199.00,
    "properties": {
      "product": "premium_subscription",
      "campaign_source": "weekly_newsletter"
    }
  }'`}
                          </code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Support CTA */}
          <div className="mt-16 text-center bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Integration?</h3>
              <p className="text-gray-600 mb-8">
                Our technical team provides white-glove integration support to get you up and running quickly. 
                From initial setup to advanced automation, we're here to help.
              </p>
              <div className="flex justify-center space-x-4">
                <Button asChild>
                  <a href="mailto:developers@sharpsend.io">Contact API Support</a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Schedule Integration Call</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}