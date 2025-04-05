import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Custom book-related utility functions
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

// For tracking internal page navigation
export const scrollToElement = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    const header = document.getElementById('header');
    const headerHeight = header ? header.offsetHeight : 0;
    const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
    
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

// Email validation utility
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Form submission utilities
export const submitToFormspree = async (formData: Record<string, string>) => {
  try {
    const response = await fetch(
      "https://formspree.io/f/your-formspree-endpoint", // Replace with actual endpoint
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    
    return response.ok;
  } catch (error) {
    console.error("Form submission error:", error);
    return false;
  }
};

// For email signup
export const subscribeToNewsletter = async (email: string): Promise<{ success: boolean, message: string }> => {
  try {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    
    const data = await response.json();
    return { 
      success: response.ok && data.success, 
      message: data.message || "Subscription successful" 
    };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return { success: false, message: "Failed to subscribe to newsletter" };
  }
};
