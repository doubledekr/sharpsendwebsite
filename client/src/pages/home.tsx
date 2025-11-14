import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertWaitlistSchema } from "@shared/schema";
import type { InsertWaitlistEntry } from "@shared/schema";
import { z } from "zod";
import { Check, Zap, Shield, TrendingUp } from "lucide-react";

const formSchema = insertWaitlistSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  subscriberCount: z.string().min(1, "Please select your subscriber count"),
  platform: z.string().min(1, "Please select your current platform"),
});

type FormData = z.infer<typeof formSchema>;

export default function Home() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      company: "",
      subscriberCount: "",
      platform: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertWaitlistEntry) => {
      const isProduction = window.location.hostname === 'sharpsend.io';
      const apiUrl = isProduction 
        ? 'https://sharpsend-waitlist.davemaxwellmaxwell.workers.dev/'
        : '/api/waitlist';

      const body = isProduction 
        ? {
            email: data.email,
            company: data.company,
            subscriberCount: data.subscriberCount,
            emailPlatform: data.platform,
          }
        : data;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. Check your email to confirm!",
      });
      form.reset();
      setSubmitted(true);
    },
    onError: (error: any) => {
      const message = error?.message || "Something went wrong. Please try again.";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img src="/sharpsend-logo.png" alt="SharpSend" className="w-12 h-12 md:w-16 md:h-16" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              SharpSend
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            AI-Powered Newsletter Personalization for Financial Publishers
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Value Proposition */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Every Newsletter Into a Personalized Experience
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                SharpSend uses AI to automatically personalize your financial newsletters boosting engagement and revenue without changing your workflow.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 rounded-lg p-3">
                  <Zap className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">AI Content Personalization</h3>
                  <p className="text-gray-600">Automatically adapt your content to each subscriber's interests and reading patterns</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 rounded-lg p-3">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Revenue Attribution Tracking</h3>
                  <p className="text-gray-600">Know exactly which content drives conversions with precise subscriber-level tracking</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 rounded-lg p-3">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Works With Your Platform</h3>
                  <p className="text-gray-600">Seamless integration with Mailchimp, SendGrid, ConvertKit, ActiveCampaign, and more</p>
                </div>
              </div>
            </div>

            {/* Early Access Benefits */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
              <h3 className="font-semibold text-primary-900 mb-4">Early Access Benefits:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-primary-800">
                  <Check className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  50% discount on first year
                </li>
                <li className="flex items-center text-primary-800">
                  <Check className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  Priority onboarding and support
                </li>
                <li className="flex items-center text-primary-800">
                  <Check className="w-5 h-5 mr-3 text-primary-600 flex-shrink-0" />
                  Direct input on feature development
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Waitlist Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 sticky top-8">
            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Join the Waitlist
                </h2>
                <p className="text-gray-600 mb-6">
                  Be among the first to experience the future of newsletter personalization.
                </p>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                      Work Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@yourpublication.com"
                      {...form.register("email")}
                      className="w-full"
                      data-testid="input-email"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2">
                      Publication/Company *
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Financial Publication"
                      {...form.register("company")}
                      className="w-full"
                      data-testid="input-company"
                    />
                    {form.formState.errors.company && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.company.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="subscribers" className="text-sm font-medium text-gray-700 mb-2">
                      Subscriber Count *
                    </Label>
                    <Select onValueChange={(value) => form.setValue("subscriberCount", value)}>
                      <SelectTrigger data-testid="select-subscribers">
                        <SelectValue placeholder="Select range..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Under 1,000">Under 1,000</SelectItem>
                        <SelectItem value="1,000 - 5,000">1,000 - 5,000</SelectItem>
                        <SelectItem value="5,000 - 25,000">5,000 - 25,000</SelectItem>
                        <SelectItem value="25,000 - 100,000">25,000 - 100,000</SelectItem>
                        <SelectItem value="Over 100,000">Over 100,000</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.subscriberCount && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.subscriberCount.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="platform" className="text-sm font-medium text-gray-700 mb-2">
                      Current Email Platform *
                    </Label>
                    <Select onValueChange={(value) => form.setValue("platform", value)}>
                      <SelectTrigger data-testid="select-platform">
                        <SelectValue placeholder="Select platform..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Mailchimp">Mailchimp</SelectItem>
                        <SelectItem value="SendGrid">SendGrid</SelectItem>
                        <SelectItem value="ConvertKit">ConvertKit</SelectItem>
                        <SelectItem value="ActiveCampaign">ActiveCampaign</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.platform && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.platform.message}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={mutation.isPending}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-6 text-lg rounded-lg font-semibold transition-all transform hover:scale-105"
                    data-testid="submit-waitlist"
                  >
                    {mutation.isPending ? "Securing Your Spot..." : "Get Early Access"}
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By joining, you'll receive exclusive updates and early access pricing.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
                <p className="text-gray-600 mb-6">
                  Check your email to confirm your subscription. We'll be in touch soon with exclusive updates.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mx-auto"
                >
                  Submit Another
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center pt-16 border-t border-gray-200">
          <p className="text-gray-600 mb-2">
            © 2025 SharpSend. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            AI-powered newsletter personalization for financial publishers
          </p>
        </footer>
      </div>
    </div>
  );
}
