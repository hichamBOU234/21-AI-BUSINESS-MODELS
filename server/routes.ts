import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertSubscriberSchema, 
  insertContactSubmissionSchema,
  insertTestimonialSchema 
} from "@shared/schema";
import { isValidEmail } from "../client/src/lib/utils";

export async function registerRoutes(app: Express): Promise<Server> {
  // GET approved testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials(true);
      
      return res.status(200).json({ 
        success: true,
        testimonials 
      });
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({ 
        success: false,
        message: "Failed to fetch testimonials" 
      });
    }
  });
  
  // Submit a new testimonial
  app.post("/api/testimonials", async (req, res) => {
    try {
      const testimonialData = insertTestimonialSchema.safeParse(req.body);
      
      if (!testimonialData.success) {
        return res.status(400).json({ 
          success: false,
          message: "Invalid testimonial data",
          errors: testimonialData.error.format()
        });
      }
      
      const newTestimonial = await storage.createTestimonial(testimonialData.data);
      
      return res.status(201).json({ 
        success: true,
        message: "Testimonial submitted successfully! It will be reviewed before appearing on the site.",
        testimonial: newTestimonial 
      });
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      return res.status(500).json({ 
        success: false,
        message: "Failed to submit testimonial" 
      });
    }
  });

  // Subscribe to newsletter endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const subscriberData = insertSubscriberSchema.safeParse(req.body);
      
      if (!subscriberData.success) {
        return res.status(400).json({ 
          success: false,
          message: "Invalid email address",
          errors: subscriberData.error.format()
        });
      }
      
      // Check if this email is already subscribed
      const existingSubscriber = await storage.getSubscriberByEmail(subscriberData.data.email);
      
      if (existingSubscriber) {
        return res.status(200).json({ 
          success: true,
          message: "You're already subscribed to our newsletter" 
        });
      }
      
      // Add the new subscriber
      const newSubscriber = await storage.createSubscriber(subscriberData.data);
      
      return res.status(201).json({ 
        success: true,
        message: "Subscription successful" 
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      return res.status(500).json({ 
        success: false,
        message: "Failed to subscribe to newsletter" 
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const submissionData = insertContactSubmissionSchema.safeParse(req.body);
      
      if (!submissionData.success) {
        return res.status(400).json({ 
          success: false,
          message: "Invalid form data",
          errors: submissionData.error.format()
        });
      }
      
      // Store the contact submission
      const newSubmission = await storage.createContactSubmission(submissionData.data);
      
      // This would typically also send an email notification to the site owner
      
      return res.status(201).json({ 
        success: true,
        message: "Message sent successfully" 
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      return res.status(500).json({ 
        success: false,
        message: "Failed to send message" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
