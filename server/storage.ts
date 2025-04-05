import { 
  users, testimonials, subscribers, contactSubmissions,
  type User, type InsertUser,
  type Testimonial, type InsertTestimonial,
  type Subscriber, type InsertSubscriber,
  type ContactSubmission, type InsertContactSubmission
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Expanded interface with all CRUD methods
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Testimonial methods
  getTestimonials(onlyApproved?: boolean): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  updateTestimonial(id: number, isApproved: boolean): Promise<Testimonial | undefined>;
  
  // Subscriber methods
  getSubscribers(): Promise<Subscriber[]>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  
  // Contact submission methods
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmission(id: number): Promise<ContactSubmission | undefined>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  markContactSubmissionAsRead(id: number): Promise<ContactSubmission | undefined>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  // Testimonial methods
  async getTestimonials(onlyApproved: boolean = false): Promise<Testimonial[]> {
    if (onlyApproved) {
      return db.select().from(testimonials).where(eq(testimonials.isApproved, true));
    }
    return db.select().from(testimonials);
  }
  
  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    const [testimonial] = await db.select().from(testimonials).where(eq(testimonials.id, id));
    return testimonial || undefined;
  }
  
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db
      .insert(testimonials)
      .values(insertTestimonial)
      .returning();
    return testimonial;
  }
  
  async updateTestimonial(id: number, isApproved: boolean): Promise<Testimonial | undefined> {
    const [testimonial] = await db
      .update(testimonials)
      .set({ isApproved })
      .where(eq(testimonials.id, id))
      .returning();
    return testimonial || undefined;
  }
  
  // Subscriber methods
  async getSubscribers(): Promise<Subscriber[]> {
    return db.select().from(subscribers);
  }
  
  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    const [subscriber] = await db.select().from(subscribers).where(eq(subscribers.email, email));
    return subscriber || undefined;
  }
  
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const [subscriber] = await db
      .insert(subscribers)
      .values(insertSubscriber)
      .returning();
    return subscriber;
  }
  
  // Contact submission methods
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return db.select().from(contactSubmissions);
  }
  
  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    const [submission] = await db.select().from(contactSubmissions).where(eq(contactSubmissions.id, id));
    return submission || undefined;
  }
  
  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values(insertSubmission)
      .returning();
    return submission;
  }
  
  async markContactSubmissionAsRead(id: number): Promise<ContactSubmission | undefined> {
    const [submission] = await db
      .update(contactSubmissions)
      .set({ isRead: true })
      .where(eq(contactSubmissions.id, id))
      .returning();
    return submission || undefined;
  }
}

export const storage = new DatabaseStorage();
