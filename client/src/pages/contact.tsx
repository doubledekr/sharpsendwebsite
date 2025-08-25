import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Mail, Phone, MapPin, Clock, MessageCircle, Shield, Zap } from "lucide-react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(1, "Company name is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  subscriberCount: z.string().min(1, "Please select subscriber count range"),
  message: z.string().min(10, "Please provide at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const inquiryType = watch("inquiryType");
  const subscriberCount = watch("subscriberCount");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Contact form submitted:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <MessageCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Reaching Out!</h1>
            <p className="text-lg text-gray-600 mb-8">
              We've received your inquiry and our team will get back to you within one business day. 
              For urgent matters, feel free to email us directly at the addresses below.
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
              <span className="text-gray-400">/ Contact Us</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                <img src="/sharpsend-logo.png" alt="SharpSend" className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your newsletter revenue? Our team is here to help you get started 
              with SharpSend and answer any questions about AI-powered newsletter optimization.
            </p>
          </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-primary-600" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sales & Demo Requests</h4>
                  <p className="text-gray-600 mb-2">
                    Ready to see SharpSend in action? Schedule a personalized demo.
                  </p>
                  <a href="mailto:sales@sharpsend.io" className="text-primary-600 hover:text-primary-700 font-medium">
                    sales@sharpsend.io
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Support</h4>
                  <p className="text-gray-600 mb-2">
                    Integration help, troubleshooting, and platform questions.
                  </p>
                  <a href="mailto:support@sharpsend.io" className="text-primary-600 hover:text-primary-700 font-medium">
                    support@sharpsend.io
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Security & Privacy</h4>
                  <p className="text-gray-600 mb-2">
                    Data security questions, compliance, and privacy inquiries.
                  </p>
                  <a href="mailto:security@sharpsend.io" className="text-primary-600 hover:text-primary-700 font-medium">
                    security@sharpsend.io
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">General Inquiries</h4>
                  <p className="text-gray-600 mb-2">
                    Partnership opportunities, press, and other questions.
                  </p>
                  <a href="mailto:hello@sharpsend.io" className="text-primary-600 hover:text-primary-700 font-medium">
                    hello@sharpsend.io
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary-600" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">10:00 AM - 2:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <p className="text-sm text-gray-500 pt-2">
                  For urgent technical issues, email support@sharpsend.io for 24/7 assistance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary-600" />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-600">
                  <p className="font-medium text-gray-900 mb-2">SharpSend, Inc.</p>
                  <p>548 Market Street, PMB 61690</p>
                  <p>San Francisco, CA 94104</p>
                  <p className="mt-3 text-sm">
                    <strong>Note:</strong> We operate as a distributed team. Please use email 
                    for all correspondence rather than visiting in person.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within one business day.
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
                        data-testid="contact-first-name"
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
                        data-testid="contact-last-name"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={errors.email ? "border-red-500" : ""}
                      data-testid="contact-email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        {...register("company")}
                        className={errors.company ? "border-red-500" : ""}
                        data-testid="contact-company"
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="jobTitle">Job Title *</Label>
                      <Input
                        id="jobTitle"
                        {...register("jobTitle")}
                        className={errors.jobTitle ? "border-red-500" : ""}
                        data-testid="contact-job-title"
                      />
                      {errors.jobTitle && (
                        <p className="text-red-500 text-sm mt-1">{errors.jobTitle.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Inquiry Type *</Label>
                      <Select onValueChange={(value) => setValue("inquiryType", value)} value={inquiryType}>
                        <SelectTrigger className={errors.inquiryType ? "border-red-500" : ""} data-testid="contact-inquiry-type">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Request Demo</SelectItem>
                          <SelectItem value="pricing">Pricing Information</SelectItem>
                          <SelectItem value="technical">Technical Questions</SelectItem>
                          <SelectItem value="integration">Integration Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.inquiryType && (
                        <p className="text-red-500 text-sm mt-1">{errors.inquiryType.message}</p>
                      )}
                    </div>
                    <div>
                      <Label>Newsletter Subscriber Count *</Label>
                      <Select onValueChange={(value) => setValue("subscriberCount", value)} value={subscriberCount}>
                        <SelectTrigger className={errors.subscriberCount ? "border-red-500" : ""} data-testid="contact-subscriber-count">
                          <SelectValue placeholder="Select subscriber range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-5k">0 - 5,000</SelectItem>
                          <SelectItem value="5k-25k">5,000 - 25,000</SelectItem>
                          <SelectItem value="25k-100k">25,000 - 100,000</SelectItem>
                          <SelectItem value="100k-500k">100,000 - 500,000</SelectItem>
                          <SelectItem value="500k+">500,000+</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.subscriberCount && (
                        <p className="text-red-500 text-sm mt-1">{errors.subscriberCount.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your newsletter goals, current challenges, or specific questions about SharpSend..."
                      {...register("message")}
                      className={errors.message ? "border-red-500" : ""}
                      data-testid="contact-message"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                    data-testid="contact-submit-btn"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our Terms & Conditions and Privacy Policy. 
                    We'll only use your information to respond to your inquiry.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Response Time Expectations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600">
                  We respond to all inquiries within one business day, often much faster.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Follow-up</h3>
                <p className="text-gray-600">
                  You'll hear from a real person who can answer your specific questions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Spam Promise</h3>
                <p className="text-gray-600">
                  We'll only contact you about your inquiry. No sales spam or unwanted emails.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-primary-600 text-white rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join the financial publishers who are already using SharpSend to optimize their 
            newsletter revenue with AI-powered personalization.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild className="bg-white text-primary-700 hover:bg-gray-100">
              <Link href="/">Join Waitlist</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Link href="/api-docs">View API Docs</Link>
            </Button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}