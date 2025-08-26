import type { InsertWaitlistEntry } from "@shared/schema";

interface ConvertKitConfig {
  apiKey: string;
  apiSecret: string;
  formId: string;
}

interface ConvertKitSubscriber {
  email: string;
  first_name?: string;
  fields?: Record<string, string>;
  tags?: string[];
}

export class ConvertKitService {
  private config: ConvertKitConfig;
  private baseUrl = 'https://api.convertkit.com/v3';

  constructor() {
    this.config = {
      apiKey: process.env.CONVERTKIT_API_KEY || '',
      apiSecret: process.env.CONVERTKIT_API_SECRET || process.env.CONVERTKIT_API_KEY || '', // Fallback to API key if secret not provided
      formId: process.env.CONVERTKIT_FORM_ID || '',
    };

    if (!this.config.apiKey || !this.config.formId) {
      console.warn('ConvertKit credentials not properly configured. Missing API Key or Form ID.');
    } else {
      console.log('ConvertKit service initialized successfully');
    }
  }

  async addSubscriberToForm(formData: InsertWaitlistEntry): Promise<any> {
    try {
      const tags = generateCompleteTags(formData);
      
      const subscriberData: ConvertKitSubscriber = {
        email: formData.email,
        fields: {
          company: formData.company,
          subscriber_count: formData.subscriberCount,
          platform: formData.platform,
        },
        tags: tags,
      };

      const response = await fetch(`${this.baseUrl}/forms/${this.config.formId}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: this.config.apiKey,
          ...subscriberData,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`ConvertKit API error: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      console.log('Successfully added subscriber to ConvertKit:', result);
      return result;
    } catch (error) {
      console.error('Failed to add subscriber to ConvertKit:', error);
      throw error;
    }
  }

  async addTagsToSubscriber(email: string, tags: string[]): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/tags`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_secret: this.config.apiSecret,
          email: email,
          tags: tags,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`ConvertKit tagging error: ${response.status} - ${errorText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to add tags to subscriber:', error);
      throw error;
    }
  }
}

function calculateLeadScore(formData: InsertWaitlistEntry): number {
  let score = 0;

  // Subscriber count scoring
  const subscriberScores = {
    'Under 1,000': 20,
    '1,000 - 5,000': 40,
    '5,000 - 25,000': 60,
    '25,000 - 100,000': 80,
    'Over 100,000': 100,
  };
  score += subscriberScores[formData.subscriberCount as keyof typeof subscriberScores] || 0;

  // Platform sophistication scoring
  const platformScores = {
    'Mailchimp': 10,
    'SendGrid': 20,
    'ConvertKit': 20,
    'ActiveCampaign': 30,
    'Other': 5,
  };
  score += platformScores[formData.platform as keyof typeof platformScores] || 0;

  // Email domain scoring (basic business validation)
  const emailDomain = formData.email.split('@')[1]?.toLowerCase() || '';
  if (!['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'].includes(emailDomain)) {
    score += 20; // Custom domain = more serious business
  }

  return Math.min(score, 100); // Cap at 100
}

function generateCompleteTags(formData: InsertWaitlistEntry): string[] {
  const tags = [
    // Base tags
    'sharpsend-waitlist',
    'source-website',
    'financial-publisher'
  ];

  // Subscriber count tags
  const subscriberTags = {
    'Under 1,000': ['subscribers-under-1k', 'business-micro'],
    '1,000 - 5,000': ['subscribers-1k-5k', 'business-small'],
    '5,000 - 25,000': ['subscribers-5k-25k', 'business-medium'],
    '25,000 - 100,000': ['subscribers-25k-100k', 'business-large'],
    'Over 100,000': ['subscribers-over-100k', 'business-enterprise']
  };

  if (formData.subscriberCount && subscriberTags[formData.subscriberCount as keyof typeof subscriberTags]) {
    tags.push(...subscriberTags[formData.subscriberCount as keyof typeof subscriberTags]);
  }

  // Platform tags
  const platformTags = {
    'Mailchimp': ['platform-mailchimp', 'intent-beginner'],
    'SendGrid': ['platform-sendgrid', 'intent-intermediate'],
    'ConvertKit': ['platform-convertkit', 'intent-intermediate'],
    'ActiveCampaign': ['platform-activecampaign', 'intent-advanced'],
    'Other': ['platform-other', 'intent-beginner']
  };

  if (formData.platform && platformTags[formData.platform as keyof typeof platformTags]) {
    tags.push(...platformTags[formData.platform as keyof typeof platformTags]);
  }

  // Priority tags based on lead score
  const leadScore = calculateLeadScore(formData);
  if (leadScore >= 80) {
    tags.push('priority-high');
  } else if (leadScore >= 60) {
    tags.push('priority-medium');
  } else {
    tags.push('priority-low');
  }

  // Timing tags
  const now = new Date();
  const hour = now.getHours();
  if (hour >= 9 && hour <= 17) {
    tags.push('signup-business-hours');
  } else {
    tags.push('signup-after-hours');
  }

  // Day of week tags
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  tags.push(`signup-${days[now.getDay()]}`);

  return tags;
}

export const convertKitService = new ConvertKitService();