import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PreviewBanner } from "@/components/PreviewBanner";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import Index from "./pages/Index";
import Story from "./pages/Story";
import Solution from "./pages/Solution";
import Pricing from "./pages/Pricing";
import ThesisPhd from "./pages/ThesisPhd";
import Blog from "./pages/Blog";
import Community from "./pages/Community";
import Contact from "./pages/Contact";

import SimulationDeepDive from "./pages/SimulationDeepDive";

import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import PentagonAIHacking from "./pages/blog/PentagonAIHacking";
import Team from "./pages/Team";
import TeamMemberProfile from "./pages/TeamMemberProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <ScrollToTop />
        <PreviewBanner />
        <CookieConsent />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/story" element={<Story />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/thesis-phd" element={<ThesisPhd />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/pentagon-ai-hacking" element={<PentagonAIHacking />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/simulation-deep-dive" element={<SimulationDeepDive />} />
          
          <Route path="/careers" element={<Careers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:slug" element={<TeamMemberProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
