import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { WaitlistForm } from "@/components/waitlist-form";
import { useQuery } from "@tanstack/react-query";
import { 
  Zap, 
  ShieldCheck, 
  Lock, 
  Clock, 
  Menu, 
  X,
  Brain,
  DollarSign,
  Users,
  Activity,
  TrendingUp,
  Shield,
  CheckCircle,
  Check,
  Star,
  RefreshCw,
  BarChart3,
  Target,
  Percent,
  Calendar,
  CreditCard,
  Twitter,
  Linkedin,
  Github
} from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Get waitlist count
  const { data: waitlistStats } = useQuery({
    queryKey: ['/api/waitlist/stats'],
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  const waitlistCount = waitlistStats?.count || 847;

  const handleWaitlistSuccess = () => {
    setIsWaitlistOpen(false);
    setShowSuccessModal(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-sans antialiased bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">SharpSend</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                data-testid="nav-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('integrations')} 
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                data-testid="nav-integrations"
              >
                Integrations
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                data-testid="nav-pricing"
              >
                Pricing
              </button>
              <Button 
                onClick={() => setIsWaitlistOpen(true)} 
                className="bg-primary-600 hover:bg-primary-700"
                data-testid="nav-waitlist-btn"
              >
                Join Waitlist
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white" data-testid="mobile-menu">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('features')} 
                className="block text-gray-600 hover:text-gray-900 font-medium"
                data-testid="mobile-nav-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('integrations')} 
                className="block text-gray-600 hover:text-gray-900 font-medium"
                data-testid="mobile-nav-integrations"
              >
                Integrations
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="block text-gray-600 hover:text-gray-900 font-medium"
                data-testid="mobile-nav-pricing"
              >
                Pricing
              </button>
              <Button 
                onClick={() => {
                  setIsWaitlistOpen(true);
                  setIsMobileMenuOpen(false);
                }} 
                className="w-full bg-primary-600 hover:bg-primary-700"
                data-testid="mobile-nav-waitlist-btn"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              {/* Trust Badge */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4 inline mr-1" />
                  AI-Powered Analytics
                </div>
                <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  16+ Platform Integrations
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Maximize Newsletter{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-gold-500">
                  Revenue
                </span>{" "}
                with AI
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                SharpSend uses advanced AI to personalize newsletters for financial publishers, 
                optimize send times, and track revenue attribution across your entire subscriber journey.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center" data-testid="stat-revenue">
                  <div className="text-2xl font-bold text-primary-600">3.2x</div>
                  <div className="text-sm text-gray-500">Revenue Increase</div>
                </div>
                <div className="text-center" data-testid="stat-open-rates">
                  <div className="text-2xl font-bold text-primary-600">47%</div>
                  <div className="text-sm text-gray-500">Higher Open Rates</div>
                </div>
                <div className="text-center" data-testid="stat-setup">
                  <div className="text-2xl font-bold text-primary-600">12min</div>
                  <div className="text-sm text-gray-500">Setup Time</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
                  data-testid="hero-waitlist-btn"
                >
                  Join Waitlist - Early Access
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-primary-200 text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg"
                  data-testid="hero-demo-btn"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 mt-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-2 text-green-500" />
                  SOC 2 Compliant
                </div>
                <div className="flex items-center">
                  <Lock className="w-4 h-4 mr-2 text-green-500" />
                  GDPR Ready
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-green-500" />
                  99.9% Uptime
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 mt-12 lg:mt-0">
              {/* Hero Dashboard Preview */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
                  alt="SharpSend Analytics Dashboard" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                
                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Revenue Attribution</div>
                      <div className="text-xs text-gray-500">+$127K this month</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">AI Optimization</div>
                      <div className="text-xs text-gray-500">47% improvement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-500 font-medium">Trusted by Leading Financial Publishers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="bg-gray-100 h-12 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-400">FinanceDaily</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-12 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-400">MarketPro</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-12 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-400">InvestorHub</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-12 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-400">WealthWeek</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Features Built for Financial Publishers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to optimize newsletter performance, track revenue impact, 
              and grow your subscriber base with intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Content Generation */}
            <Card className="bg-white hover:shadow-lg transition-shadow" data-testid="feature-ai-personalization">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Content Personalization</h3>
                <p className="text-gray-600 mb-4">
                  Generate personalized financial content based on subscriber behavior, risk profiles, 
                  and market conditions with GPT-4 powered intelligence.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Risk profile analysis</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Market timing optimization</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Dynamic subject lines</li>
                </ul>
              </CardContent>
            </Card>

            {/* Revenue Attribution */}
            <Card className="bg-white hover:shadow-lg transition-shadow" data-testid="feature-revenue-attribution">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-700 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Revenue Attribution</h3>
                <p className="text-gray-600 mb-4">
                  Track every dollar back to specific newsletters with 7-day attribution windows 
                  and multi-touch conversion tracking.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />7-day attribution window</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Multi-touch tracking</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />ROI reporting</li>
                </ul>
              </CardContent>
            </Card>

            {/* Smart Segmentation */}
            <Card className="bg-white hover:shadow-lg transition-shadow" data-testid="feature-smart-segmentation">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Cohort Detection</h3>
                <p className="text-gray-600 mb-4">
                  Automatically identify and segment subscribers based on investment behavior, 
                  engagement patterns, and financial interests.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Behavioral segmentation</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Risk assessment</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Auto-updating cohorts</li>
                </ul>
              </CardContent>
            </Card>

            {/* A/B Testing */}
            <Card className="bg-white hover:shadow-lg transition-shadow" data-testid="feature-ab-testing">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced A/B Testing</h3>
                <p className="text-gray-600 mb-4">
                  Test subject lines, content variations, and send times with statistical significance 
                  tracking and automatic winner selection.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Multi-variate testing</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Auto-winner selection</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Revenue-based optimization</li>
                </ul>
              </CardContent>
            </Card>

            {/* Market Intelligence */}
            <Card className="bg-white hover:shadow-lg transition-shadow" data-testid="feature-market-intelligence">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Market Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Integrate live market data, news events, and volatility indicators to optimize 
                  content timing and relevance.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Live market data</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Volatility tracking</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Event-based sending</li>
                </ul>
              </CardContent>
            </Card>

            {/* Email Fatigue Management */}
            <Card className="bg-white hover:shadow-lg transition-shadow" data-testid="feature-fatigue-management">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Fatigue Management</h3>
                <p className="text-gray-600 mb-4">
                  Prevent subscriber burnout with intelligent frequency capping and 
                  engagement-based send optimization.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Frequency optimization</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Engagement tracking</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Churn prevention</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Integrations */}
      <section id="integrations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Connect with Your Existing Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SharpSend integrates seamlessly with 16+ email platforms and marketing tools. 
              Keep using what you love, but supercharge it with AI.
            </p>
          </div>

          {/* Primary Integrations */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
            {['Mailchimp', 'SendGrid', 'ConvertKit', 'ActiveCampaign', 'Customer.io', 'Braze', 'Iterable', '+9 More'].map((platform) => (
              <div key={platform} className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-20 hover:shadow-md transition-shadow">
                <span className="font-semibold text-gray-700 text-sm text-center">{platform}</span>
              </div>
            ))}
          </div>

          {/* Integration Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="integration-setup">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">One-Click Setup</h3>
              <p className="text-gray-600">
                Connect your existing email platform in minutes. No complex migrations or data transfers required.
              </p>
            </div>
            <div className="text-center" data-testid="integration-sync">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Two-Way Sync</h3>
              <p className="text-gray-600">
                Keep all your data synchronized across platforms. Changes in SharpSend automatically update your email platform.
              </p>
            </div>
            <div className="text-center" data-testid="integration-analytics">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Unified Analytics</h3>
              <p className="text-gray-600">
                See all your email performance metrics in one dashboard, regardless of which platforms you use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Financial Publishers */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Built Specifically for Financial Publishers
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="benefit-revenue">
                  <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Increase Revenue per Subscriber</h3>
                    <p className="text-primary-100">
                      Our AI identifies high-value subscribers and optimizes content to drive more conversions, 
                      increasing your revenue per subscriber by an average of 3.2x.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="benefit-engagement">
                  <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Improve Engagement Rates</h3>
                    <p className="text-primary-100">
                      Personalized content based on investment preferences and risk profiles leads to 
                      47% higher open rates and 65% higher click-through rates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="benefit-time">
                  <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Save Time with Automation</h3>
                    <p className="text-primary-100">
                      Automated content optimization, send time optimization, and cohort detection 
                      save your team 15+ hours per week.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="benefit-compliance">
                  <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Compliance & Privacy First</h3>
                    <p className="text-primary-100">
                      Built with financial industry compliance in mind. GDPR ready, SOC 2 certified, 
                      and privacy-compliant tracking that respects subscriber preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Financial analytics and growth charts" 
                className="rounded-2xl shadow-2xl"
              />
              
              {/* ROI Stats Overlay */}
              <div className="bg-white rounded-xl p-6 shadow-lg -mt-16 ml-8 relative z-10 max-w-sm" data-testid="roi-stats">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Average ROI Impact</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Revenue Increase</span>
                    <span className="font-bold text-green-600">+320%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Open Rate Boost</span>
                    <span className="font-bold text-blue-600">+47%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Time Saved</span>
                    <span className="font-bold text-purple-600">15hrs/week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Financial Publishers Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              See how SharpSend is transforming newsletter revenue for publishers like you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card data-testid="testimonial-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 text-gold-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  "SharpSend increased our newsletter revenue by 280% in just 3 months. 
                  The AI personalization is incredibly sophisticated for financial content."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                    alt="Michael Chen, CEO of FinanceDaily" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Michael Chen</div>
                    <div className="text-gray-500 text-sm">CEO, FinanceDaily</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="testimonial-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 text-gold-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  "The cohort detection is amazing. We can now identify our highest-value subscribers 
                  automatically and tailor content that drives real conversions."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                    alt="Sarah Williams, Editor at MarketPro" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Williams</div>
                    <div className="text-gray-500 text-sm">Editor, MarketPro</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="testimonial-3">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 text-gold-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  "Setup was incredibly easy - integrated with our Mailchimp in minutes. 
                  Our open rates improved by 52% within the first month."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                    alt="David Rodriguez, Founder of WealthWeek" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">David Rodriguez</div>
                    <div className="text-gray-500 text-sm">Founder, WealthWeek</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pricing That Scales With Your Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free, pay only for results. Our pricing model grows with your newsletter revenue, 
              so you only pay more when you're making more.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <Card className="bg-gray-50 border-2 border-gray-100" data-testid="pricing-starter">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-1">Free</div>
                  <p className="text-gray-500">Up to 1,000 subscribers</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Basic AI personalization</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">2 platform integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Email support</span>
                  </li>
                </ul>
                <Button variant="secondary" className="w-full" data-testid="pricing-starter-btn">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            {/* Growth */}
            <Card className="bg-white border-2 border-primary-200 shadow-lg relative" data-testid="pricing-growth">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-1">$197</div>
                  <p className="text-gray-500">per month + 3% of attributed revenue</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Advanced AI personalization</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">All 16+ integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Revenue attribution</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Smart cohort detection</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Priority support</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => setIsWaitlistOpen(true)} 
                  className="w-full bg-primary-600 hover:bg-primary-700"
                  data-testid="pricing-growth-btn"
                >
                  Join Waitlist
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="bg-gray-50 border-2 border-gray-100" data-testid="pricing-enterprise">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-1">Custom</div>
                  <p className="text-gray-500">Volume discounts available</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Custom AI models</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">White-label options</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">Custom integrations</span>
                  </li>
                </ul>
                <Button variant="secondary" className="w-full" data-testid="pricing-enterprise-btn">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* ROI Guarantee */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gold-50 to-primary-50 rounded-2xl p-8 max-w-4xl mx-auto" data-testid="roi-guarantee">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Revenue Growth Guarantee</h3>
              <p className="text-lg text-gray-600 mb-6">
                We're so confident in SharpSend's ability to grow your newsletter revenue, 
                we offer a 90-day money-back guarantee. If you don't see at least 25% revenue growth, 
                we'll refund your entire investment.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  90-day guarantee
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Minimum 25% growth
                </div>
                <div className="flex items-center">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Full refund if not satisfied
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to 3x Your Newsletter Revenue?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the waitlist for early access to SharpSend. Be among the first financial publishers 
            to experience AI-powered newsletter optimization that actually drives revenue.
          </p>

          {/* Early Access Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="text-center" data-testid="cta-benefit-1">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="font-semibold mb-1">Early Access</div>
              <div className="text-sm text-primary-200">First 100 publishers only</div>
            </div>
            <div className="text-center" data-testid="cta-benefit-2">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Percent className="w-6 h-6 text-white" />
              </div>
              <div className="font-semibold mb-1">50% Discount</div>
              <div className="text-sm text-primary-200">Exclusive early bird pricing</div>
            </div>
            <div className="text-center" data-testid="cta-benefit-3">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="font-semibold mb-1">VIP Support</div>
              <div className="text-sm text-primary-200">Direct access to our team</div>
            </div>
          </div>

          <Button 
            onClick={() => setIsWaitlistOpen(true)} 
            className="bg-white text-primary-700 px-12 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors transform hover:scale-105 shadow-xl"
            data-testid="final-cta-btn"
          >
            Secure Your Spot - Join Waitlist
          </Button>

          <p className="text-sm text-primary-200 mt-6" data-testid="waitlist-counter">
            <Users className="w-4 h-4 inline mr-1" />
            <span>{waitlistCount}</span> financial publishers already joined
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold text-white">SharpSend</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                AI-powered newsletter analytics and personalization platform built specifically 
                for financial publishers who want to maximize subscriber revenue.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('integrations')} className="hover:text-white transition-colors">Integrations</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SharpSend. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Security</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
        <DialogContent className="max-w-md" data-testid="waitlist-modal">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h3>
            <p className="text-gray-600">Be among the first 100 financial publishers to get early access</p>
          </div>
          <WaitlistForm onSuccess={handleWaitlistSuccess} />
          <p className="text-xs text-gray-500 text-center mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-md text-center" data-testid="success-modal">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to the Waitlist!</h3>
          <p className="text-gray-600 mb-6">
            You're now on the priority list for SharpSend early access. 
            We'll notify you as soon as we're ready to onboard your publication.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">What happens next?</p>
            <ul className="text-sm text-gray-800 space-y-1 text-left">
              <li>✓ Confirmation email sent to your inbox</li>
              <li>✓ Early access notification (coming soon)</li>
              <li>✓ Exclusive setup session with our team</li>
            </ul>
          </div>

          <Button 
            onClick={() => setShowSuccessModal(false)} 
            className="bg-primary-600 hover:bg-primary-700"
            data-testid="success-close-btn"
          >
            Got it, thanks!
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
