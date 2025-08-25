import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Target, Users, Zap, Shield, Globe, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function About() {
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
              <span className="text-gray-400">/ About Us</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                <img src="/sharpsend-logo.png" alt="SharpSend" className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About SharpSend</h1>
            <p className="text-xl text-gray-600">
              Empowering financial publishers to maximize newsletter revenue through AI-powered 
              personalization and precise attribution tracking.
            </p>
          </div>

        {/* Mission Statement */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-primary-50 to-blue-50">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                We believe every financial publisher deserves to understand and maximize the true revenue 
                impact of their newsletters. SharpSend combines cutting-edge AI personalization with 
                industry-leading attribution technology to transform how publishers measure, optimize, 
                and scale their email marketing programs.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              SharpSend was founded by a team of newsletter optimization experts who spent years helping 
              financial publishers at companies like The Motley Fool, MarketWatch, and Seeking Alpha 
              maximize their email revenue. Time and again, we encountered the same fundamental challenges:
            </p>
            
            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span><strong>Attribution Blind Spots:</strong> Publishers couldn't accurately measure which newsletters drove real revenue vs. just clicks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span><strong>Manual Personalization:</strong> Creating targeted content for different subscriber segments required massive manual effort</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span><strong>Fragmented Tools:</strong> Publishers juggled multiple platforms for email, analytics, and attribution without unified insights</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span><strong>Technical Complexity:</strong> Implementing proper tracking required significant engineering resources most teams didn't have</span>
                </li>
              </ul>
            </div>

            <p className="mb-6">
              We knew there had to be a better way. So in 2023, we set out to build the comprehensive 
              newsletter optimization platform we wished existed when we were in-house: one that combined 
              AI-powered personalization with bulletproof attribution tracking, delivered through seamless 
              integrations that required zero technical overhead.
            </p>

            <p className="mb-6">
              After 18 months of development and testing with leading financial publishers, SharpSend 
              officially launched in early 2024. Today, we help publishers across the financial industry 
              increase their newsletter revenue by an average of 23% while reducing the time spent on 
              manual optimization by over 75%.
            </p>
          </div>
        </section>

        {/* Core Beliefs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Believe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Measurement Drives Growth</h3>
                </div>
                <p className="text-gray-600">
                  You can't optimize what you can't measure. Every revenue optimization strategy 
                  must start with precise, actionable attribution data that shows exactly how 
                  your newsletters impact your bottom line.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">AI Should Enhance, Not Replace</h3>
                </div>
                <p className="text-gray-600">
                  The best AI tools amplify human expertise rather than replacing it. Our AI learns 
                  from your editorial judgment and subscriber behavior to suggest optimizations 
                  you'd never think of on your own.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Personalization at Scale</h3>
                </div>
                <p className="text-gray-600">
                  Every subscriber is unique, but manual segmentation doesn't scale. True 
                  personalization requires automated systems that can adapt content, timing, 
                  and delivery for thousands of individual preferences simultaneously.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Trust Through Transparency</h3>
                </div>
                <p className="text-gray-600">
                  Publishers need to understand exactly how our AI makes recommendations and 
                  how our attribution works. Black box solutions erode trust and make it 
                  impossible to learn and improve over time.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How We Help */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How We Help Financial Publishers</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Increase Revenue</h3>
                <p className="text-gray-600">
                  Our clients see an average 23% increase in attributable newsletter revenue within 
                  90 days through AI-powered personalization and optimization.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Perfect Attribution</h3>
                <p className="text-gray-600">
                  Track every dollar generated by your newsletters with 7-day post-click attribution, 
                  holdout testing, and cross-device revenue matching.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Seamless Integration</h3>
                <p className="text-gray-600">
                  Connect with 16+ email platforms in minutes. No engineering required, no 
                  disruption to existing workflows, no learning curve for your team.
                </p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Designed Specifically for Financial Content</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    Pre-trained on financial industry content
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    Compliance-aware subject line generation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    Market sentiment-based send time optimization
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    Risk tolerance-based content personalization
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    Investment timeline-aware segmentation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    Premium subscription revenue tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Company Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Company Information</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Corporate Details</h3>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>Legal Name:</strong> SharpSend, Inc.</p>
                    <p><strong>Incorporation:</strong> Delaware, USA</p>
                    <p><strong>Founded:</strong> 2023</p>
                    <p><strong>Headquarters:</strong> San Francisco, CA</p>
                    <p><strong>Website:</strong> sharpsend.io</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>General:</strong> hello@sharpsend.io</p>
                    <p><strong>Sales:</strong> sales@sharpsend.io</p>
                    <p><strong>Support:</strong> support@sharpsend.io</p>
                    <p><strong>Security:</strong> security@sharpsend.io</p>
                    <p><strong>Privacy:</strong> privacy@sharpsend.io</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Newsletter Revenue?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join the growing number of financial publishers who trust SharpSend to optimize 
            their newsletter performance and maximize subscriber value.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild className="bg-white text-primary-700 hover:bg-gray-100">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-primary-100 hover:bg-white hover:text-primary-700">
              <Link href="/careers">Join Our Mission</Link>
            </Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}