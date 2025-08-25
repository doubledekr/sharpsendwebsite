import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Terms from "@/pages/terms";
import ApiDocs from "@/pages/api-docs";
import Integrations from "@/pages/integrations";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Careers from "@/pages/careers";
import Blog from "@/pages/blog";
import Privacy from "@/pages/privacy";
import Security from "@/pages/security";
import { useEffect } from "react";

function Router() {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/terms" component={Terms} />
      <Route path="/api-docs" component={ApiDocs} />
      <Route path="/integrations" component={Integrations} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/careers" component={Careers} />
      <Route path="/blog" component={Blog} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/security" component={Security} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
