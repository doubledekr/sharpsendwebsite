import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { z } from "zod";
import { convertKitService } from "./convertkit";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist signup endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      // Create the waitlist entry in local storage
      const entry = await storage.createWaitlistEntry(validatedData);
      
      // Add subscriber to ConvertKit (don't fail if this errors)
      try {
        await convertKitService.addSubscriberToForm(validatedData);
        console.log('Successfully added to ConvertKit:', validatedData.email);
      } catch (convertKitError) {
        console.error('ConvertKit integration failed, but local entry created:', convertKitError);
        // Continue with successful response even if ConvertKit fails
      }
      
      res.status(201).json({
        success: true,
        message: "Successfully joined the waitlist",
        entry: {
          id: entry.id,
          email: entry.email,
          company: entry.company,
          createdAt: entry.createdAt,
        },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid input data",
          errors: error.errors,
        });
      } else if (error instanceof Error && error.message === "Email already exists in waitlist") {
        res.status(409).json({
          success: false,
          message: "This email is already on our waitlist",
        });
      } else {
        console.error("Waitlist signup error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to join waitlist",
        });
      }
    }
  });

  // Get waitlist stats (for display purposes)
  app.get("/api/waitlist/stats", async (req, res) => {
    try {
      const entries = await storage.getAllWaitlistEntries();
      res.json({
        success: true,
        count: entries.length,
      });
    } catch (error) {
      console.error("Waitlist stats error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to get waitlist stats",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
