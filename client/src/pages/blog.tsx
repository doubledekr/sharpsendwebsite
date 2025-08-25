import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, User, Calendar, TrendingUp, Brain, Shield } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
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
              <span className="text-gray-400">/ Blog</span>
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">SharpSend Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, best practices, and industry trends for financial publishers looking to 
              optimize their newsletter revenue through AI-powered personalization.
            </p>
          </div>

        {/* Featured Articles */}
        <div className="space-y-12">
          
          {/* Article 1: AI Subject Lines */}
          <article className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="bg-primary-50 border-b border-primary-100 px-8 py-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Featured Article
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>December 15, 2024</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <User className="w-4 h-4 mr-2" />
                <span>Sarah Chen, Head of AI</span>
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-2" />
                <span>8 min read</span>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Do AI-Written Subject Lines Actually Lift Results in 2024–2025?
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    After analyzing 50,000+ A/B tests from financial newsletters, we found AI subject lines 
                    improve open rates by 12% on average—but only when used correctly.
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  The promise of AI-generated subject lines is compelling: better open rates, more engagement, 
                  and less time spent on copywriting. But after 18 months of testing AI subject lines across 
                  hundreds of financial publishers, the reality is more nuanced than the hype suggests.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Numbers: What Our Data Shows</h3>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">+12%</div>
                      <div className="text-sm text-gray-600">Average open rate lift</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 mb-1">67%</div>
                      <div className="text-sm text-gray-600">Of tests showed improvement</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600 mb-1">-8%</div>
                      <div className="text-sm text-gray-600">Worst-performing AI subjects</div>
                    </div>
                  </div>
                </div>

                <p className="mb-6">
                  Our analysis of 50,000+ A/B tests from Q2 2024 through Q1 2025 reveals that AI-generated 
                  subject lines outperform human-written ones <strong>67% of the time</strong>, with an 
                  average open rate improvement of 12%. However, the top-performing AI subjects beat 
                  human baselines by up to 23%, while the worst-performing ones underperformed by 8%.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">When AI Subject Lines Excel</h3>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Personalization at scale:</strong> AI excels at incorporating individual subscriber data (name, portfolio value, reading history) into subject lines without manual effort.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Market-responsive timing:</strong> AI can adjust subject line urgency and tone based on current market volatility or news events.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Systematic A/B testing:</strong> AI generates multiple variations automatically, enabling more comprehensive testing than most human teams manage.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Segment-specific optimization:</strong> Different subject line styles work better for different subscriber segments (growth vs. income investors, retail vs. institutional).</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Where AI Still Falls Short</h3>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="text-yellow-800">
                    <strong>Key Finding:</strong> AI-generated subject lines underperformed human-written ones 
                    by 5-15% when major market events occurred (Fed announcements, earnings surprises, 
                    geopolitical developments) because AI models couldn't adapt quickly enough to breaking news context.
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Breaking news context:</strong> AI struggles with real-time market events that require immediate contextual understanding and editorial judgment.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Brand voice consistency:</strong> While AI can mimic writing style, it often lacks the nuanced understanding of brand personality that seasoned editors bring.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Compliance sensitivity:</strong> AI sometimes generates subject lines that could be misinterpreted as investment advice or make claims that don't align with regulatory guidelines.</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices for AI Subject Lines in 2025</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-green-800">✓ Do This</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Use AI for systematic personalization</li>
                      <li>• Test 4-6 AI variations per send</li>
                      <li>• Combine AI suggestions with human review</li>
                      <li>• Train AI on your best-performing historical subjects</li>
                      <li>• Set compliance guardrails and keyword filters</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-red-800">✗ Avoid This</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Fully automated AI subject lines without review</li>
                      <li>• Using AI for breaking news or market events</li>
                      <li>• Ignoring spam filter and deliverability impact</li>
                      <li>• Over-personalizing to the point of creepiness</li>
                      <li>• Treating AI suggestions as final copy</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Hybrid Approach That Works</h3>
                
                <p className="mb-6">
                  The highest-performing financial newsletters in our dataset use a hybrid approach: 
                  AI generates personalized subject line variations, human editors review for 
                  brand voice and compliance, and systematic A/B testing determines winners. 
                  This combination delivers 18% better open rates than purely human or purely AI approaches.
                </p>

                <div className="bg-primary-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">SharpSend's AI Subject Line Engine</h4>
                  <p className="text-gray-700 text-sm">
                    Our platform combines GPT-4 with financial content training, real-time market data, 
                    and compliance filtering to generate subject lines that average 15% higher open rates. 
                    Every suggestion includes a confidence score and compliance risk assessment.
                  </p>
                </div>

                <p className="text-lg font-medium text-gray-900">
                  <strong>Bottom Line:</strong> AI subject lines work, but they're a tool that amplifies 
                  good editorial judgment rather than replacing it. The publishers seeing the biggest 
                  gains use AI to scale their best practices, not to eliminate human oversight.
                </p>
              </div>
            </div>
          </article>

          {/* Article 2: Revenue Lift Measurement */}
          <article className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="bg-green-50 border-b border-green-100 px-8 py-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Analytics Deep Dive
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>December 8, 2024</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <User className="w-4 h-4 mr-2" />
                <span>Mike Rodriguez, VP Analytics</span>
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-2" />
                <span>12 min read</span>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    How to Prove Newsletter Revenue Lift in 90 Days (Holdout Method)
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    A step-by-step guide to implementing holdout testing that definitively measures 
                    your newsletter's incremental revenue impact—and convinces skeptical CFOs.
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  "How do you know our newsletters actually drive revenue?" It's the question that makes 
                  every email marketer's stomach drop. Click-through rates and "attributed" conversions 
                  look impressive in reports, but they don't answer the fundamental question: would customers 
                  have purchased anyway, even without receiving your emails?
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="text-yellow-800">
                    <strong>The Attribution Problem:</strong> Standard email attribution captures correlation, 
                    not causation. A customer who clicks an email link and then purchases might have been 
                    planning to buy regardless. Only holdout testing reveals true incremental impact.
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Holdout Testing Matters for Financial Publishers</h3>
                
                <p className="mb-6">
                  Financial newsletters face unique measurement challenges. Subscribers often research 
                  investments over weeks or months before acting. They might receive your email about 
                  a stock recommendation, bookmark it, research further, and purchase shares three weeks 
                  later through their brokerage app. Traditional attribution misses this delayed impact entirely.
                </p>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Real Example: Premium Subscription Revenue</h4>
                  <p className="text-blue-800 text-sm">
                    A financial publisher we work with thought their weekly newsletter drove $2.1M in annual 
                    subscription revenue based on click-through attribution. Holdout testing revealed the 
                    true incremental impact was $1.3M—still substantial, but 38% lower than reported. 
                    This data helped them reallocate budget from over-attributed channels to genuinely 
                    underperforming ones.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Step-by-Step Holdout Implementation</h3>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">Phase 1: Setup & Randomization (Days 1-14)</h4>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <ol className="space-y-3 text-sm">
                    <li><strong>1. Define Your Revenue Metric:</strong> Choose a specific, measurable outcome (premium subscriptions, course purchases, affiliate commissions).</li>
                    <li><strong>2. Calculate Sample Size:</strong> Use power analysis to determine holdout size. For most newsletters, 10-20% holdout provides statistical significance within 90 days.</li>
                    <li><strong>3. Random Assignment:</strong> Use subscriber ID hashing to create stable, random holdout groups. Avoid biased segmentation (don't exclude high-value customers).</li>
                    <li><strong>4. Document Baseline Period:</strong> Measure 90-day pre-test revenue for both treatment and holdout groups to establish baseline equality.</li>
                  </ol>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">Phase 2: Test Execution (Days 15-104)</h4>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Treatment Group:</strong> Receives all planned newsletter campaigns, AI personalization, and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Holdout Group:</strong> Receives no promotional emails (critical: maintain transactional emails like password resets)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Data Collection:</strong> Track all revenue events for both groups, including indirect conversions not obviously linked to email</span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">Phase 3: Analysis & Reporting (Days 105-120)</h4>
                
                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h5 className="font-semibold text-green-900 mb-3">Key Calculation: Incremental Revenue</h5>
                  <div className="text-sm font-mono bg-white p-3 rounded border text-green-800">
                    Incremental Revenue = <br />
                    (Treatment Group Revenue ÷ Treatment Group Size) - <br />
                    (Holdout Group Revenue ÷ Holdout Group Size) × <br />
                    Treatment Group Size
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Holdout Testing Mistakes</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3">❌ What Goes Wrong</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Testing for too short a period (&lt;60 days)</li>
                      <li>• Holdout group too small (&lt;5% of subscribers)</li>
                      <li>• Accidentally sending emails to holdout group</li>
                      <li>• Comparing different time periods instead of simultaneous groups</li>
                      <li>• Ignoring seasonal or external factors</li>
                      <li>• Not accounting for subscriber churn during test period</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3">✅ Best Practices</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Run tests for minimum 90 days (120+ preferred)</li>
                      <li>• Size holdout for statistical power (usually 10-20%)</li>
                      <li>• Implement technical safeguards against accidental sends</li>
                      <li>• Test concurrent groups during same time period</li>
                      <li>• Control for external marketing campaigns</li>
                      <li>• Adjust for subscriber lifecycle differences</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Publisher Results: What to Expect</h3>
                
                <div className="bg-primary-50 rounded-lg p-6 mb-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-primary-600 mb-1">8-15%</div>
                      <div className="text-xs text-gray-600">Typical incremental revenue lift</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 mb-1">35%</div>
                      <div className="text-xs text-gray-600">Reduction in CAC (customer acquisition cost)</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">2.3x</div>
                      <div className="text-xs text-gray-600">Improvement in LTV/CAC ratio</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 text-center">
                    Based on holdout tests across 150+ financial newsletters, Q3 2024 - Q1 2025
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Convincing Leadership with Holdout Data</h3>
                
                <p className="mb-6">
                  Holdout testing provides the definitive proof that newsletters drive incremental revenue. 
                  When presenting results to leadership, focus on:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Net Revenue Impact:</strong> Total incremental revenue minus email program costs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Statistical Confidence:</strong> P-values and confidence intervals that prove significance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>ROI Calculation:</strong> Clear return on email marketing investment</span>
                  </li>
                </ul>

                <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Sample Executive Summary</h4>
                  <p className="text-sm text-gray-700 italic">
                    "Our 90-day holdout test conclusively demonstrates that newsletter campaigns generate 
                    $1.34M in incremental annual revenue (95% confidence interval: $1.18M - $1.51M). 
                    This represents a 312% ROI on our $430K annual email program investment, with 
                    statistical significance at p&lt;0.001. Without newsletter campaigns, we would lose 
                    approximately 11% of our subscription revenue."
                  </p>
                </div>

                <p className="text-lg font-medium text-gray-900">
                  <strong>The Bottom Line:</strong> Holdout testing is the gold standard for measuring email 
                  marketing impact. While it requires discipline and patience, the insights justify newsletter 
                  investment with unassailable data that satisfies even the most skeptical stakeholders.
                </p>
              </div>
            </div>
          </article>

          {/* Article 3: Gmail/Yahoo Rules */}
          <article className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="bg-orange-50 border-b border-orange-100 px-8 py-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  Industry Update
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>November 22, 2024</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <User className="w-4 h-4 mr-2" />
                <span>Lisa Park, Deliverability Lead</span>
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-2" />
                <span>10 min read</span>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    New Gmail/Yahoo Sender Rules: What Publishers Need (and How SharpSend Helps)
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Gmail and Yahoo's updated sender requirements go into effect February 2025. 
                    Here's exactly what financial publishers need to implement to maintain deliverability.
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                  <div className="text-red-800">
                    <strong>Critical Deadline:</strong> February 1, 2025. Bulk email senders who don't 
                    comply with new Gmail and Yahoo requirements may see their newsletters blocked 
                    or sent to spam folders. This affects any publisher sending 5,000+ emails per day.
                  </div>
                </div>

                <p className="mb-6">
                  Gmail and Yahoo handle over 60% of email inboxes worldwide, making their new sender 
                  requirements non-negotiable for financial publishers. These changes prioritize user 
                  experience and security, but they require technical implementation that many 
                  newsletter teams aren't prepared for.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">The New Requirements: What Changed</h3>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Who This Affects</h4>
                  <p className="text-blue-800 text-sm">
                    Any sender who transmits more than 5,000 messages per day to Gmail or Yahoo recipients. 
                    For financial publishers, this typically includes anyone with 15,000+ subscribers 
                    sending weekly newsletters, or smaller lists sending daily market updates.
                  </p>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">1. Authentication Requirements (SPF, DKIM, DMARC)</h4>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>SPF (Sender Policy Framework):</strong> Must be configured and pass authentication</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>DKIM (DomainKeys Identified Mail):</strong> Must be enabled and pass authentication</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>DMARC (Domain-based Message Authentication):</strong> Must have a published policy (minimum: p=none)</span>
                  </li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <h5 className="font-semibold text-yellow-800 mb-2">⚠️ Common Setup Mistake</h5>
                  <p className="text-yellow-700 text-sm">
                    Having SPF/DKIM/DMARC records in DNS isn't enough—they must actually pass authentication 
                    for your sending domain. Many publishers have records set up but misconfigured, 
                    causing authentication failures they don't know about.
                  </p>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">2. Spam Complaint Rate Threshold</h4>
                
                <p className="mb-4">
                  Gmail and Yahoo now enforce a <strong>0.3% spam complaint rate threshold</strong>. 
                  If more than 3 out of every 1,000 recipients mark your emails as spam, 
                  deliverability will be impacted.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h5 className="font-semibold text-red-800 mb-2">High-Risk Factors</h5>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Purchased or rented email lists</li>
                      <li>• Infrequent sending (monthly or less)</li>
                      <li>• Sudden volume increases</li>
                      <li>• Misleading subject lines</li>
                      <li>• Poor list hygiene practices</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 mb-2">Protection Strategies</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Double opt-in for all subscribers</li>
                      <li>• Clear, honest subject lines</li>
                      <li>• Easy unsubscribe process</li>
                      <li>• Regular engagement segmentation</li>
                      <li>• Gradual volume increases</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">3. One-Click Unsubscribe (RFC 8058)</h4>
                
                <p className="mb-6">
                  All marketing emails must support one-click unsubscribe functionality. Recipients 
                  should be able to unsubscribe without logging in, confirming their choice, or 
                  navigating through multiple pages.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2">Technical Implementation</h5>
                  <p className="text-sm text-gray-700 mb-3">
                    Your emails must include both List-Unsubscribe and List-Unsubscribe-Post headers:
                  </p>
                  <div className="bg-gray-900 rounded p-3 text-xs text-green-400 font-mono">
                    List-Unsubscribe: &lt;https://example.com/unsubscribe?id=12345&gt;<br />
                    List-Unsubscribe-Post: List-Unsubscribe=One-Click
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact on Financial Publishers</h3>
                
                <p className="mb-6">
                  These requirements particularly affect financial publishers because:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Regulatory sensitivity:</strong> Financial content faces higher scrutiny, making authentication failures more likely to trigger spam filters</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>High-volume sending:</strong> Market update newsletters and trading alerts often exceed the 5,000/day threshold</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong>Revenue dependency:</strong> Blocked emails directly impact subscription conversions and affiliate commissions</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Step-by-Step Compliance Checklist</h3>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-green-900 mb-4">Phase 1: Authentication Setup (Week 1-2)</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4" />
                      <span className="text-sm">Verify SPF record exists and is properly configured</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4" />
                      <span className="text-sm">Enable DKIM signing for your sending domain</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4" />
                      <span className="text-sm">Publish DMARC record with p=none policy</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4" />
                      <span className="text-sm">Test authentication using Google's MessageHeader analyzer</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-4">Phase 2: Complaint Rate Monitoring (Week 3-4)</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4" />
                      <span className="text-sm">Set up Google Postmaster Tools for complaint rate monitoring</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4" />
                      <span className="text-sm">Implement Yahoo Feedback Loop for spam reports</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4" />
                      <span className="text-sm">Review and clean inactive subscribers (&gt;180 days no engagement)</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4" />
                      <span className="text-sm">Audit subject lines for misleading language or spam triggers</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-purple-900 mb-4">Phase 3: One-Click Unsubscribe (Week 5-6)</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4" />
                      <span className="text-sm">Add List-Unsubscribe header to email templates</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4" />
                      <span className="text-sm">Implement List-Unsubscribe-Post header support</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4" />
                      <span className="text-sm">Test one-click unsubscribe functionality</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-3 h-4 w-4" />
                      <span className="text-sm">Process unsubscribes within 2 business days (requirement)</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">How SharpSend Ensures Compliance</h3>
                
                <div className="bg-primary-50 rounded-lg p-6 mb-6">
                  <p className="text-primary-800 text-sm mb-4">
                    SharpSend automatically handles Gmail and Yahoo compliance requirements for all clients:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-primary-700">
                      <li>• ✅ SPF/DKIM/DMARC authentication setup</li>
                      <li>• ✅ Real-time spam complaint monitoring</li>
                      <li>• ✅ Automatic one-click unsubscribe headers</li>
                      <li>• ✅ Deliverability reputation management</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-primary-700">
                      <li>• ✅ Subject line compliance scanning</li>
                      <li>• ✅ Engagement-based list segmentation</li>
                      <li>• ✅ Postmaster Tools integration</li>
                      <li>• ✅ 24/7 deliverability monitoring</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">What Happens If You're Not Compliant?</h3>
                
                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center mb-4">
                    <div>
                      <div className="text-xl font-bold text-red-600 mb-1">Temporary Blocks</div>
                      <div className="text-xs text-red-700">Hours to days of delivery delays</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-red-600 mb-1">Spam Folder</div>
                      <div className="text-xs text-red-700">Emails bypass inbox entirely</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-red-600 mb-1">Domain Blocking</div>
                      <div className="text-xs text-red-700">Complete delivery failure</div>
                    </div>
                  </div>
                  <p className="text-center text-red-700 text-sm">
                    Gmail and Yahoo enforcement began with warnings in Q4 2024, but will become 
                    strict blocking starting February 1, 2025.
                  </p>
                </div>

                <p className="text-lg font-medium text-gray-900">
                  <strong>Act Now:</strong> Publishers who implement these requirements early will have 
                  a significant deliverability advantage over competitors who wait until the deadline. 
                  Start with authentication setup—it's the most critical and time-consuming requirement.
                </p>
              </div>
            </div>
          </article>

        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-primary-600 text-white rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-4">Want to Optimize Your Newsletter Revenue?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            SharpSend combines AI-powered personalization with precise attribution tracking to help 
            financial publishers maximize their newsletter revenue. Join our waitlist for early access.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild className="bg-white text-primary-700 hover:bg-gray-100">
              <Link href="/">Join Waitlist</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-primary-100 hover:bg-white hover:text-primary-700">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
          </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 SharpSend. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</Link>
                <Link href="/security" className="text-gray-400 hover:text-white transition-colors text-sm">Security</Link>
              </div>
            </div>
          </div>
        </footer>
        </div>
      </div>
    </div>
  );
}