import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, MapPin, Users, Heart, Zap, Globe, DollarSign, Coffee, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const applicationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please select your experience level"),
  resume: z.string().url("Please provide a valid URL to your resume"),
  coverLetter: z.string().min(100, "Please provide at least 100 characters"),
  portfolio: z.string().url().optional().or(z.literal("")),
});

type ApplicationData = z.infer<typeof applicationSchema>;

export default function Careers() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ApplicationData>({
    resolver: zodResolver(applicationSchema),
  });

  const position = watch("position");
  const experience = watch("experience");

  const onSubmit = async (data: ApplicationData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Job application submitted:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your interest in joining SharpSend. We've received your application 
              and our team will review it carefully. You'll hear from us within one week.
            </p>
            <Link href="/">
              <Button>Return to Homepage</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Help us revolutionize newsletter optimization for financial publishers. We're building 
            the future of AI-powered email marketing and we'd love to have you on the journey.
          </p>
        </div>

        {/* Company Culture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Work at SharpSend?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cutting-Edge Technology</h3>
                <p className="text-gray-600">
                  Work with the latest AI/ML technologies, modern web frameworks, and distributed 
                  systems at scale. Every day brings new technical challenges to solve.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Exceptional Team</h3>
                <p className="text-gray-600">
                  Join a close-knit team of experienced engineers, data scientists, and product 
                  experts who've built successful companies and products before.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Remote-First Culture</h3>
                <p className="text-gray-600">
                  Work from anywhere with flexible hours, async communication, and tools that 
                  keep our distributed team connected and productive.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Values */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Values</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Heart className="w-5 h-5 text-red-500 mr-2" />
                  Customer Obsession
                </h4>
                <p className="text-gray-600">
                  Everything we build starts with understanding our customers' real problems. 
                  We measure success by the revenue growth we create for financial publishers.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                  Ship Fast, Learn Faster
                </h4>
                <p className="text-gray-600">
                  We believe in rapid iteration and data-driven decisions. Perfect is the enemy 
                  of good – we'd rather ship, learn, and improve than debate endlessly.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Users className="w-5 h-5 text-blue-500 mr-2" />
                  Ownership & Transparency
                </h4>
                <p className="text-gray-600">
                  Every team member owns their domain completely. We share context freely, 
                  communicate openly about challenges, and support each other's success.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Globe className="w-5 h-5 text-green-500 mr-2" />
                  Think Big, Start Small
                </h4>
                <p className="text-gray-600">
                  We're building technology that will transform how newsletters generate revenue, 
                  but we validate every big idea with small, measurable experiments first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                  Compensation & Equity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Competitive salaries (market rate + 10-20%)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Meaningful equity stake in company growth</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Annual performance bonuses</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Stock option acceleration on milestones</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-600" />
                  Health & Wellness
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">100% medical, dental, vision coverage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">$2,000 annual wellness stipend</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Mental health support (therapy, coaching)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Unlimited paid time off (4+ weeks encouraged)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-600" />
                  Remote Work Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">$3,000 home office setup budget</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">$500 monthly coworking/coffee shop allowance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">High-end laptop and equipment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Quarterly team meetups in cool cities</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Coffee className="w-5 h-5 mr-2 text-yellow-600" />
                  Growth & Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">$3,000 annual learning & development budget</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Conference attendance (2+ per year)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Mentorship from experienced tech leaders</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  <span className="text-gray-700">20% time for passion projects</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>
          <div className="space-y-6">
            {/* Senior Frontend Engineer */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Senior Frontend Engineer</CardTitle>
                    <div className="flex items-center mt-2 text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Remote (US/Canada)</span>
                      <span className="mx-2">•</span>
                      <span>Full-time</span>
                      <span className="mx-2">•</span>
                      <span>$140K - $180K</span>
                    </div>
                  </div>
                  <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    Engineering
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Build the user-facing components of our AI-powered newsletter optimization platform. 
                  Work with React, TypeScript, and modern web technologies to create intuitive 
                  interfaces for complex data visualization and campaign management.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What you'll do:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Build responsive, accessible React components</li>
                      <li>• Implement data visualizations and dashboards</li>
                      <li>• Optimize performance for large datasets</li>
                      <li>• Collaborate on design systems and UX patterns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 5+ years React/TypeScript experience</li>
                      <li>• Strong CSS and responsive design skills</li>
                      <li>• Experience with data visualization (D3, Recharts)</li>
                      <li>• Testing experience (Jest, Testing Library)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Senior Backend Engineer */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Senior Backend Engineer</CardTitle>
                    <div className="flex items-center mt-2 text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Remote (US/Canada)</span>
                      <span className="mx-2">•</span>
                      <span>Full-time</span>
                      <span className="mx-2">•</span>
                      <span>$150K - $190K</span>
                    </div>
                  </div>
                  <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    Engineering
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Design and build the scalable systems that power our AI optimization engine. 
                  Work with high-volume data processing, real-time APIs, and distributed systems 
                  that handle millions of email events per day.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What you'll do:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Build scalable APIs and microservices</li>
                      <li>• Design data pipelines for ML training</li>
                      <li>• Implement real-time event processing</li>
                      <li>• Optimize database performance and queries</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 5+ years Python/Node.js experience</li>
                      <li>• Strong database design skills (PostgreSQL)</li>
                      <li>• Experience with AWS/cloud infrastructure</li>
                      <li>• Knowledge of data processing (Kafka, Redis)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Machine Learning Engineer */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Machine Learning Engineer</CardTitle>
                    <div className="flex items-center mt-2 text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Remote (US/Canada/EU)</span>
                      <span className="mx-2">•</span>
                      <span>Full-time</span>
                      <span className="mx-2">•</span>
                      <span>$160K - $200K</span>
                    </div>
                  </div>
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    AI/ML
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Develop and deploy the AI models that power our newsletter personalization engine. 
                  Work with large language models, recommendation systems, and optimization algorithms 
                  trained on email marketing data.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What you'll do:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Train and fine-tune language models</li>
                      <li>• Build recommendation systems</li>
                      <li>• Implement A/B testing frameworks</li>
                      <li>• Monitor model performance in production</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• PhD/MS in ML/CS or equivalent experience</li>
                      <li>• Experience with PyTorch/TensorFlow</li>
                      <li>• Knowledge of NLP and LLMs</li>
                      <li>• Production ML deployment experience</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Manager */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Senior Product Manager</CardTitle>
                    <div className="flex items-center mt-2 text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Remote (US)</span>
                      <span className="mx-2">•</span>
                      <span>Full-time</span>
                      <span className="mx-2">•</span>
                      <span>$130K - $170K</span>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Product
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Shape the product strategy and roadmap for our AI-powered newsletter optimization 
                  platform. Work closely with financial publishers to understand their needs and 
                  translate them into product features that drive real revenue impact.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What you'll do:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Define product roadmap and priorities</li>
                      <li>• Conduct customer research and interviews</li>
                      <li>• Write detailed product requirements</li>
                      <li>• Analyze usage data and feature performance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 4+ years B2B SaaS product management</li>
                      <li>• Experience with AI/ML products preferred</li>
                      <li>• Strong analytical and communication skills</li>
                      <li>• Background in marketing tech or fintech</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Application Form */}
        <section className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Apply to Join SharpSend</CardTitle>
              <p className="text-gray-600 text-center">
                Ready to help us revolutionize newsletter optimization? We'd love to hear from you.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      className={errors.firstName ? "border-red-500" : ""}
                      data-testid="career-first-name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      className={errors.lastName ? "border-red-500" : ""}
                      data-testid="career-last-name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={errors.email ? "border-red-500" : ""}
                      data-testid="career-email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      className={errors.phone ? "border-red-500" : ""}
                      data-testid="career-phone"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Position *</Label>
                    <Select onValueChange={(value) => setValue("position", value)} value={position}>
                      <SelectTrigger className={errors.position ? "border-red-500" : ""} data-testid="career-position">
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="senior-frontend">Senior Frontend Engineer</SelectItem>
                        <SelectItem value="senior-backend">Senior Backend Engineer</SelectItem>
                        <SelectItem value="ml-engineer">Machine Learning Engineer</SelectItem>
                        <SelectItem value="product-manager">Senior Product Manager</SelectItem>
                        <SelectItem value="other">Other (specify in cover letter)</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.position && (
                      <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>
                    )}
                  </div>
                  <div>
                    <Label>Experience Level *</Label>
                    <Select onValueChange={(value) => setValue("experience", value)} value={experience}>
                      <SelectTrigger className={errors.experience ? "border-red-500" : ""} data-testid="career-experience">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mid-level">Mid-level (3-5 years)</SelectItem>
                        <SelectItem value="senior">Senior (5-8 years)</SelectItem>
                        <SelectItem value="staff">Staff (8-12 years)</SelectItem>
                        <SelectItem value="principal">Principal (12+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.experience && (
                      <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="resume">Resume/CV URL *</Label>
                    <Input
                      id="resume"
                      placeholder="https://drive.google.com/..."
                      {...register("resume")}
                      className={errors.resume ? "border-red-500" : ""}
                      data-testid="career-resume"
                    />
                    {errors.resume && (
                      <p className="text-red-500 text-sm mt-1">{errors.resume.message}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Please share a Google Drive, Dropbox, or personal website link
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="portfolio">Portfolio URL (Optional)</Label>
                    <Input
                      id="portfolio"
                      placeholder="https://github.com/username or personal site"
                      {...register("portfolio")}
                      className={errors.portfolio ? "border-red-500" : ""}
                      data-testid="career-portfolio"
                    />
                    {errors.portfolio && (
                      <p className="text-red-500 text-sm mt-1">{errors.portfolio.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    rows={6}
                    placeholder="Tell us why you're excited about SharpSend, what you'd bring to the team, and any relevant experience with AI/ML, email marketing, or fintech..."
                    {...register("coverLetter")}
                    className={errors.coverLetter ? "border-red-500" : ""}
                    data-testid="career-cover-letter"
                  />
                  {errors.coverLetter && (
                    <p className="text-red-500 text-sm mt-1">{errors.coverLetter.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                  data-testid="career-submit-btn"
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this application, you agree to our Terms & Conditions and Privacy Policy.
                  SharpSend is an equal opportunity employer committed to diversity and inclusion.
                </p>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Equal Opportunity Statement */}
        <section className="mb-12">
          <Card className="bg-blue-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Equal Opportunity Employer</h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                SharpSend is committed to providing equal employment opportunities to all qualified individuals 
                without regard to race, color, religion, gender, gender identity or expression, sexual orientation, 
                national origin, genetics, disability, age, or veteran status. We believe diverse perspectives 
                make our products better and our team stronger.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}