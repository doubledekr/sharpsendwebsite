import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Code, Key, Zap, AlertCircle, CheckCircle, Globe } from "lucide-react";
import { Link } from "wouter";

export default function ApiDocs() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4" data-testid="back-link">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">API Documentation</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Complete REST API documentation for integrating SharpSend's AI-powered newsletter 
            optimization platform with your existing systems.
          </p>
        </div>

        {/* Quick Start */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-primary-600" />
                Quick Start
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <code className="text-green-400 text-sm">
                  curl -X GET "https://api.sharpsend.io/v1/tracking/pixels" \<br />
                  &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \<br />
                  &nbsp;&nbsp;-H "Content-Type: application/json"
                </code>
              </div>
              <p className="text-gray-600">
                Base URL: <code className="bg-gray-100 px-2 py-1 rounded">https://api.sharpsend.io/v1</code>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Authentication */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="w-5 h-5 mr-2 text-primary-600" />
                Authentication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                SharpSend uses API keys to authenticate requests. Include your API key in the Authorization header:
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <code className="text-green-400 text-sm">
                  Authorization: Bearer sk_live_1234567890abcdef
                </code>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Test Keys</h4>
                  <p className="text-sm text-gray-600">Start with <code>sk_test_</code> for development</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Live Keys</h4>
                  <p className="text-sm text-gray-600">Use <code>sk_live_</code> for production</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Rate Limits */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Rate Limits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-1">1,000</div>
                  <div className="text-sm text-gray-600">requests per minute</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-1">10,000</div>
                  <div className="text-sm text-gray-600">requests per hour</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600 mb-1">100,000</div>
                  <div className="text-sm text-gray-600">requests per day</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Rate limit headers are included in all responses: <code>X-RateLimit-Limit</code>, <code>X-RateLimit-Remaining</code>, <code>X-RateLimit-Reset</code>
              </p>
            </CardContent>
          </Card>
        </section>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tracking Pixels */}
          <Card>
            <CardHeader>
              <CardTitle>Tracking Pixels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Generate Pixel</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-xs">
                  <code className="text-green-400">
                    POST /tracking/pixels<br />
                    {JSON.stringify({
                      campaign_id: "camp_123",
                      subscriber_id: "sub_456",
                      email: "user@example.com"
                    }, null, 2)}
                  </code>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Response</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-xs">
                  <code className="text-blue-400">
                    {JSON.stringify({
                      pixel_url: "https://track.sharpsend.io/p/abc123.gif",
                      pixel_id: "pix_789"
                    }, null, 2)}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Click Redirects */}
          <Card>
            <CardHeader>
              <CardTitle>Click Redirects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Create Redirect</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-xs">
                  <code className="text-green-400">
                    POST /tracking/redirects<br />
                    {JSON.stringify({
                      destination_url: "https://example.com/product",
                      campaign_id: "camp_123",
                      subscriber_id: "sub_456"
                    }, null, 2)}
                  </code>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Response</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-xs">
                  <code className="text-blue-400">
                    {JSON.stringify({
                      redirect_url: "https://track.sharpsend.io/r/def456",
                      redirect_id: "red_789"
                    }, null, 2)}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Events API */}
          <Card>
            <CardHeader>
              <CardTitle>Events & Conversions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Track Event</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-xs">
                  <code className="text-green-400">
                    POST /events<br />
                    {JSON.stringify({
                      event_type: "conversion",
                      subscriber_id: "sub_456",
                      value: 49.99,
                      currency: "USD",
                      properties: {
                        product_id: "prod_123",
                        category: "subscription"
                      }
                    }, null, 2)}
                  </code>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3">
                <p className="text-sm text-gray-600">
                  <strong>Event Types:</strong> page_view, click, conversion, subscription, cancellation, refund
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Reporting */}
          <Card>
            <CardHeader>
              <CardTitle>Reporting & Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Campaign Performance</h4>
                <div className="bg-gray-900 rounded-lg p-3 text-xs">
                  <code className="text-green-400">
                    GET /campaigns/camp_123/performance<br />
                    ?start_date=2024-01-01<br />
                    &end_date=2024-01-31
                  </code>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Response Data</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Opens, clicks, conversions</li>
                  <li>• Revenue attribution</li>
                  <li>• Engagement metrics</li>
                  <li>• A/B test results</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Webhooks */}
        <section className="mt-12 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-primary-600" />
                Webhooks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Available Events</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <code>email.delivered</code>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <code>email.opened</code>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <code>link.clicked</code>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <code>conversion.tracked</code>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <code>subscriber.updated</code>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Webhook Configuration</h4>
                  <div className="bg-gray-900 rounded-lg p-3 text-xs">
                    <code className="text-green-400">
                      POST /webhooks<br />
                      {JSON.stringify({
                        url: "https://yoursite.com/webhook",
                        events: ["email.opened", "conversion.tracked"],
                        secret: "whsec_abc123"
                      }, null, 2)}
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Error Codes */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-red-500" />
                Error Codes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <code className="font-semibold">400</code>
                    <span className="text-sm text-gray-600">Bad Request</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <code className="font-semibold">401</code>
                    <span className="text-sm text-gray-600">Unauthorized</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <code className="font-semibold">403</code>
                    <span className="text-sm text-gray-600">Forbidden</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <code className="font-semibold">404</code>
                    <span className="text-sm text-gray-600">Not Found</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <code className="font-semibold">429</code>
                    <span className="text-sm text-gray-600">Rate Limited</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <code className="font-semibold">500</code>
                    <span className="text-sm text-gray-600">Server Error</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Security</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Store API keys securely (environment variables)</li>
                    <li>• Use HTTPS for all webhook endpoints</li>
                    <li>• Verify webhook signatures</li>
                    <li>• Rotate API keys regularly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Performance</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Batch API requests when possible</li>
                    <li>• Implement retry logic with exponential backoff</li>
                    <li>• Cache responses when appropriate</li>
                    <li>• Monitor rate limit headers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Support */}
        <div className="text-center bg-primary-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-6">
            Our technical team is here to help you integrate SharpSend successfully.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <a href="mailto:developers@sharpsend.io">Contact Support</a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}