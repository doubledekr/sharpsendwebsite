import { google } from 'googleapis';
import type { InsertWaitlistEntry } from "@shared/schema";

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-sheet',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Google Sheet not connected');
  }
  return accessToken;
}

async function getUncachableGoogleSheetClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.sheets({ version: 'v4', auth: oauth2Client });
}

export class GoogleSheetsService {
  private spreadsheetId: string | null = null;

  async ensureSpreadsheet() {
    if (this.spreadsheetId) {
      return this.spreadsheetId;
    }

    const sheets = await getUncachableGoogleSheetClient();

    // Create a new spreadsheet for waitlist signups
    const spreadsheet = await sheets.spreadsheets.create({
      requestBody: {
        properties: {
          title: 'SharpSend Waitlist Signups',
        },
        sheets: [{
          properties: {
            title: 'Waitlist',
          },
        }],
      },
    });

    this.spreadsheetId = spreadsheet.data.spreadsheetId!;

    // Add headers
    await sheets.spreadsheets.values.append({
      spreadsheetId: this.spreadsheetId,
      range: 'Waitlist!A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          ['Timestamp', 'Email', 'Company', 'Subscriber Count', 'Platform'],
        ],
      },
    });

    console.log('Created Google Sheet:', this.spreadsheetId);
    console.log('View at: https://docs.google.com/spreadsheets/d/' + this.spreadsheetId);

    return this.spreadsheetId;
  }

  async addWaitlistEntry(entry: InsertWaitlistEntry) {
    try {
      const spreadsheetId = await this.ensureSpreadsheet();
      const sheets = await getUncachableGoogleSheetClient();

      const timestamp = new Date().toISOString();
      const values = [
        [
          timestamp,
          entry.email,
          entry.company,
          entry.subscriberCount,
          entry.platform,
        ],
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Waitlist!A:E',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values,
        },
      });

      console.log('Added waitlist entry to Google Sheet:', entry.email);
      return { success: true, spreadsheetId };
    } catch (error) {
      console.error('Failed to add entry to Google Sheet:', error);
      throw error;
    }
  }

  getSpreadsheetUrl() {
    if (!this.spreadsheetId) {
      return null;
    }
    return `https://docs.google.com/spreadsheets/d/${this.spreadsheetId}`;
  }
}

export const googleSheetsService = new GoogleSheetsService();
