import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertWaitlistSchema } from "@shared/schema";
import type { InsertWaitlistEntry } from "@shared/schema";
import { z } from "zod";
import { Check } from "lucide-react";

const formSchema = insertWaitlistSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  subscriberCount: z.string().min(1, "Please select your subscriber count"),
  platform: z.string().min(1, "Please select your current platform"),
});

type FormData = z.infer<typeof formSchema>;

interface WaitlistFormProps {
  onSuccess: () => void;
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

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
      const response = await apiRequest('POST', '/api/waitlist', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/waitlist/stats'] });
      form.reset();
      onSuccess();
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
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
          Work Email
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
          <p className="text-red-500 text-sm mt-1" data-testid="error-email">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>
      
      <div>
        <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2">
          Publication/Company
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
          <p className="text-red-500 text-sm mt-1" data-testid="error-company">
            {form.formState.errors.company.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="subscribers" className="text-sm font-medium text-gray-700 mb-2">
          Subscriber Count
        </Label>
        <Select onValueChange={(value) => form.setValue("subscriberCount", value)} data-testid="select-subscribers">
          <SelectTrigger>
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
          <p className="text-red-500 text-sm mt-1" data-testid="error-subscribers">
            {form.formState.errors.subscriberCount.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="platform" className="text-sm font-medium text-gray-700 mb-2">
          Current Email Platform
        </Label>
        <Select onValueChange={(value) => form.setValue("platform", value)} data-testid="select-platform">
          <SelectTrigger>
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
          <p className="text-red-500 text-sm mt-1" data-testid="error-platform">
            {form.formState.errors.platform.message}
          </p>
        )}
      </div>

      {/* Benefits Reminder */}
      <div className="bg-primary-50 rounded-lg p-4 my-6" data-testid="benefits-reminder">
        <h4 className="font-semibold text-primary-900 mb-2">Early Access Benefits:</h4>
        <ul className="text-sm text-primary-800 space-y-1">
          <li className="flex items-center">
            <Check className="w-4 h-4 mr-2 text-primary-600" />
            50% discount on first year
          </li>
          <li className="flex items-center">
            <Check className="w-4 h-4 mr-2 text-primary-600" />
            Priority onboarding support
          </li>
          <li className="flex items-center">
            <Check className="w-4 h-4 mr-2 text-primary-600" />
            Direct feedback channel to our team
          </li>
        </ul>
      </div>

      <Button 
        type="submit" 
        disabled={mutation.isPending}
        className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
        data-testid="submit-waitlist"
      >
        {mutation.isPending ? "Securing Your Spot..." : "Secure My Spot"}
      </Button>
    </form>
  );
}
