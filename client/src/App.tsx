import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import { useState, useEffect } from "react";
import DiscountPopup from "@/components/home/discount-popup";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showDiscount, setShowDiscount] = useState(false);

  // Show discount popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiscount(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </div>
      {showDiscount && <DiscountPopup onClose={() => setShowDiscount(false)} />}
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
